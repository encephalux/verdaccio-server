const { runServer } = require("verdaccio");

runServer("./config.yaml").then(_app => {
    _app.listen(process.env.SRV_PORT || 3000, _event => {
        if(process.env.DEBUG === "debug")
            console.log(new Date().toLocaleDateString(), _event);
    });
}).catch(_err => {
    console.log("Error on server starting");
    console.log(_err);
});