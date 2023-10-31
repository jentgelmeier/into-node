import express from "express";
import bp from "body-parser";
import morgan from "morgan";

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

const db = [];

app.post("/todo", function (req, res) {
  const newToDo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(newToDo);

  res.json(newToDo);
});

app.get('/todo', function (req,res) {
  res.json(db)
})

app.listen(process.env.PORT, function () {
  console.log(`Server on http://localhost:8000`)
})
