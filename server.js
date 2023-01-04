
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
    response.sendFile('src/index.html'); //これだと開く端末によって保存先が異なり上手く認識されない
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
});
