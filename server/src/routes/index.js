const Router = require("express");
const router = Router();

router.use('/example', require('./example.route'))
router.use("/user", require("./user.route"))
router.use("/post", require("./post.route"));
router.use("/comment", require("./comment.routes"));
router.use("/group", require("./group.route"));
router.use("/saved", require("./saved.routes"));

router.get("/", (req, res) => {
    res.status(200).json('Bienvenido a Rocket Cafe ☕​​🚀​')
})

module.exports = router;
