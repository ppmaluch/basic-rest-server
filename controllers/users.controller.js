const { response, request } = require("express");

const getUsers = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: "get API - controller",
    query,
  });
};

const postUsers = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: "post API - controller",
    name,
    age,
  });
};

const putUsers = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API - controller",
    id,
  });
};

const patchUsers = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "patch API - controller",
    id,
  });
};

const deleteUsers = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "delete API - controller",
    id,
  });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
};
