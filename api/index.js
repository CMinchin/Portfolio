const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

router.post("*", async (req, res) => {
    // console.log(req);
    console.log("\x1b[36m%s\x1b[0m", `request recieved at ${Date()}`);
    console.log(req.body);
    res.json({recieved:true});
});

module.exports = router;
