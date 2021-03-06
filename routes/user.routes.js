const { Router } = require("express");
const {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", getUsers);
router.post("/", postUsers);

router.put("/:id", putUsers);
router.patch("/:id", patchUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
