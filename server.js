const express = require("express");
const path = require("path");
const { calculate } = require("./calculator");

const UNARY_OPERATIONS = new Set(["sqrt", "squareroot", "square-root", "√"]);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/calculate", (req, res) => {
  const { operation, a, b } = req.body;
  const isUnaryOperation = UNARY_OPERATIONS.has(String(operation).toLowerCase());

  const first = Number(a);
  const second = Number(b);

  if (Number.isNaN(first) || (!isUnaryOperation && Number.isNaN(second))) {
    return res.status(400).json({ error: "Please provide valid numbers." });
  }

  try {
    const result = calculate(operation, first, second);
    return res.json({ result });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Calculator app is running at http://localhost:${PORT}`);
});
