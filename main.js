const VIEWS_PATH = process.env.VIEWS_PATH || "./views/";

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const views = fs.readdirSync(VIEWS_PATH);
for (var i=0; i < views.length; i++)
{
    const fileName = views[i];
    const pathFile = path.join(VIEWS_PATH, fileName);

    app.get("/" +
        (
            fileName == "index.html" ? ""
            : fileName.split(".")[0]
        )
    , (req, res) => {
        res.status(200).sendFile(path.join(__dirname, pathFile));
    });
}

app.listen(process.env.PORT || 3000, (err) => {
    if (err)
    {
        console.error(err);
        return;
    }
    console.log("Listening in 3000");
});