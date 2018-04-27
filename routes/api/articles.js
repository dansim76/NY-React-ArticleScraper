const  router = require("express").Router();
const articleController = require("../../controllers/articleController")





router.route("/api/articles")   
    .get(articleController.findAll)
    .post(articleController.update)
    .delete(articleController.remove)



    module.exports = router;