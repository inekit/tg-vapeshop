const servicePreset = require('../services/crud.service').getService('Post', ['title', 'text', 'description']);
const {
  getPosts,
  editPost,
  transformTagsArray,
  transformPreviewName,
  updateRss,
} = require('../services/posts.service');

function getAllCreator(showText = true) {
  return async function getAll(req, res, next) {
    getPosts(Object.assign(req.query, { showText }))
      .then((data) => res.send(data))
      .catch((error) => next(error));
  };
}

function getRss(req, res, next) {
  try {
    res.redirect('/public/RSS.xml');
  } catch (e) {}
}

function addOne(req, res, next) {
  const { title, text, tagsArray, projectName, previewName, description } = req.body;

  const tagObjs = transformTagsArray(tagsArray);

  const fNameFullPath = transformPreviewName(req.files?.image);

  servicePreset
    .add({ title, description, text, project_name: projectName, tags: tagObjs, preview_name: fNameFullPath })
    .then((data) => {
      updateRss().catch((e) => {});
      res.send(data);
    })
    .catch((error) => next(error));
}

async function editOne(req, res, next) {
  editPost(Object.assign(req.body, { previewBinary: req.files?.image }))
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteOne(req, res, next) {
  servicePreset
    .delete(req.body.id)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getAll: getAllCreator(false),
  getAllWithText: getAllCreator(true),
  getRss,
  addOne,
  editOne,
  deleteOne,
};