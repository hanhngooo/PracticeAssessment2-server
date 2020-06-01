const { Router } = require("express");
const Homepage = require("../models").homepage;
const router = new Router();
const Story = require("../models").story;

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const homepages = await Homepage.findAndCountAll({
    limit,
    offset,
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });
  res.status(200).send(homepages);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  const homepageById = await Homepage.findByPk(id, {
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });
  if (homepageById === null) {
    return res.status(404).send({ message: "Homepage not found" });
  }
  res.status(200).send(homepageById);
});
module.exports = router;
