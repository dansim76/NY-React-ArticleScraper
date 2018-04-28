var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
    title : {
        type: String,
        required: false
    },
    link:{
        type: String,
        required: false
    },
    date:{
        type: Date,
    
        required: false
    },
    issaved: {
        type:Boolean,
        default: false
    }
   
    }
    
    
});
var Article = mongoose.model("Article", ArticlesSchema);

module.exports = Article;