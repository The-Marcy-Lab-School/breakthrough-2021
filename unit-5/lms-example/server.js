const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3030;

// can use one, many, none, result

app.get("/students", async (req, res) => {
  const limit = 1;
  try {
    const students = await db.any(`select * from students limit $1`, limit);
    return res.json({
      data: students,
      total: limit,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/students", async (req, res) => {
  try {
    await db.none(
      "insert into students (full_name, email) values (${full_name}, ${email})",
      req.body
    );

    return res.json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.get("/students/:studentId", async (req, res) => {
  const studentId = parseInt(req.params.studentId, 10);

  try {
    const student = await db.one(
      "select * from students where id = $1",
      studentId
    );

    return res.json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.patch("/students/:studentId", async (req, res) => {
  const studentId = parseInt(req.params.studentId, 10);

  try {
    await db.none("update students set full_name=$1, email=$2 where id = $3", [
      req.body.name,
      req.body.email,
      studentId,
    ]);

    res.json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.delete("/students/:studentId", async (req, res) => {
  const studentId = parseInt(req.params.studentId, 10);

  try {
    await db.none("delete from users where id = $1", studentId);
    res.status(204).json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`);
});
