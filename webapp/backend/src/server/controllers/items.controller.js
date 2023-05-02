const service = require("../services/crud.service").getService("Item", [
  "title",
  "text",
  "description",
]);
const itemsService = require("../services/items.service");
const { getPosts, add, editPost } = itemsService;

function getAll(req, res, next) {
  getPosts(req.query)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function addOne(req, res, next) {
  const photosBinary = [];
  for (let paramName in req.files) {
    const index = parseInt(paramName.substring(7, 8));
    if (paramName.substring(0, 6) !== "photos") continue;
    if (photosBinary[index]) photosBinary[index].push(req.files[paramName]);
    else photosBinary[index] = [req.files[paramName]];
  }
  const photos = [];
  for (let paramName in req.body) {
    const index = parseInt(paramName.substring(7, 8));
    if (paramName.substring(0, 6) !== "photos") continue;
    if (photos[index]) photos[index].push(req.body[paramName]);
    else photos[index] = [req.body[paramName]];
  }
  console.log(1212, photos, photosBinary);

  add(
    Object.assign(req.body, {
      photos,
      photosBinary,
    })
  )
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

async function editOne(req, res, next) {
  editPost(
    Object.assign(req.body, {
      images: req.body?.["photos[]"],
      previewsBinary: req.files?.["photos[]"],
    })
  )
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

function deleteOne(req, res, next) {
  service
    .delete(req.body.id)
    .then((data) => res.send(data))
    .catch((error) => next(error));
}

module.exports = {
  getAll,
  addOne,
  editOne,
  deleteOne,
};
