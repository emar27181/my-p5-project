
const express = require("express");

const app = express();
const PORT = 3000;


app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", function(reqest, response){
    response.sendFile('/mnt/d/ryunosuke/my_WSL_dir/my-p5-project/src/index.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
});
