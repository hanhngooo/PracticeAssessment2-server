const { Router } = require("express");
const Homepage = require("../models").homepage;
const router = new Router();
const Story = require("../models").story;
const authMiddleware = require("../auth/middleware");

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
  // console.log("id", id);

  const homepageById = await Homepage.findByPk(id, {
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });
  if (homepageById === null) {
    return res.status(404).send({ message: "Homepage not found" });
  }
  res.status(200).send(homepageById);
});
router.post("/:id/newStory", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const homepageById = await Homepage.findByPk(id);

  const { name, content, imageUrl } = req.body;
  if (!name || !content || !imageUrl) {
    res
      .status(400)
      .send("Please provide name, content and image of your story");
  }
  try {
    const newStory = await Story.create({
      name: name,
      content: content,
      imageUrl: imageUrl,
    });
  } catch (error) {}
});
module.exports = router;
