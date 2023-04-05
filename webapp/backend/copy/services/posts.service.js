const tOrmCon = require('../db/connection');
const checkInputData = require('../utils/checkInputData');
const { HttpError, MySqlError, NotFoundError, NoInputDataError } = require('../utils/httpErrors');
const updateRss = require('../utils/updateRss');

class UsersService {
  constructor() {
    this.getOnePost = this.getOnePost.bind(this);

    this.getPosts = this.getPosts.bind(this);

    this.transformPreviewName = this.transformPreviewName.bind(this);

    this.editPost = this.editPost.bind(this);

    this.updateRss = updateRss;
  }

  getOnePost(id) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `select p.*, array_agg(ptt.tags_name) tags_array
                      from public.posts p
                      left join public.posts_tags_tags ptt on p.id = ptt.posts_id
                      where p.id = $1
                      group by p.id`,
          [id]
        )
        .then(async (postData) => {
          if (!postData?.[0]) rej(new NotFoundError());

          return res(postData?.[0]);
        })
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  getPosts({ id, page = 1, take = 10, projectName, tagsArray = null, searchQuery, showText = true }) {
    return new Promise(async (res, rej) => {
      if (id) {
        this.getOnePost(id)
          .then((data) => res(data))
          .catch((error) => rej(error));
      }

      const skip = (page - 1) * take;
      searchQuery = searchQuery ? `%${searchQuery}%` : null;
      projectName = projectName || null;

      const connection = await tOrmCon;

      connection
        .query(
          `select p.id,p.title,p.description,` +
            (showText ? `p.text,` : ``) +
            `p.preview_name,p.publication_date,p.project_name, 
              (select array_agg(tags_name) from public.posts_tags_tags where posts_id = p.id) as tags_array
              from public.posts p
              left join public.posts_tags_tags ptt on p.id = ptt.posts_id
              where (title like $1 or $1 is NULL) 
              and (p.project_name = $2 or $2 is NULL)  
              and (ptt.tags_name = any($3::text[]) or $3 is NULL)
              group by p.id
              order by publication_date DESC
              LIMIT $4 OFFSET $5`,
          [searchQuery, projectName, tagsArray, take, skip]
        )
        .then((data) => res(data))
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  transformTagsArray(tagsArray) {
    let tagObjs;
    if (typeof tagsArray === 'object') {
      tagObjs = tagsArray?.map((name) => {
        return {
          name,
        };
      });
    } else if (typeof tagsArray === 'string') {
      tagObjs = [{ name: tagsArray }];
    } else tagObjs = [];

    return tagObjs;
  }

  transformPreviewName(image) {
    let fName = image?.name;
    let fNameFullPath;
    if (fName) {
      let fNameSplit = fName.split('.');

      fNameFullPath = image?.md5 + '.' + fNameSplit[fNameSplit.length - 1];
      image?.mv('public/pics/' + fNameFullPath);
    }
    return fNameFullPath;
  }

  editPost({ id, text, title, projectName, description, tagsArray, previewBinary }) {
    return new Promise(async (res, rej) => {
      const fNameFullPath = this.transformPreviewName(previewBinary);

      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        await queryRunner.query(`delete from posts_tags_tags where posts_id = $1;`, [id]);
        await queryRunner.query(
          `insert into posts_tags_tags (posts_id, tags_name) 
                 select $1 as posts_id, unnest as tags_name from  unnest($2::text[])`,
          [id, tagsArray]
        );

        const data = await queryRunner.manager
          .getRepository('Post')
          .createQueryBuilder()
          .update({
            title,
            text,
            project_name: projectName,
            description,
            preview_name: fNameFullPath,
          })
          .where({
            id: id,
          })
          .returning('*')
          .execute();

        updateRss();

        await queryRunner.commitTransaction();

        res(data);
      } catch (error) {
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }
}

module.exports = new UsersService();