const mongoose = require("mongoose");
//const url=`mongodb+srv://tanayparashar:${process.env.DB_PWD}@cluster0.hjise66.mongodb.net/?retryWrites=true&w=majority`
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_SERVER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

mongoose.connection.on('connected', async function(){
    console.log("Mongoose default connection is open");
});
mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});
mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});

module.exports = {mongoose};
