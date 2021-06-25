const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 1500;
const staticPath = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "templates");


app.use(express.static(staticPath));
app.set("view engine", "pug");
app.set("views", viewsPath);


app.get("/", (req, res) => {
	res.render("index");
});


app.on("error", err => console.log(err));

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
