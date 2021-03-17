const router = require("express").Router();
const ctrls = require("./ctrls");

router.get("/plz", ctrls.plz);

router.all("*", (req, res) => {
  res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});

module.exports = router;
