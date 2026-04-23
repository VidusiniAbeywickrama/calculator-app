function calculate(operation, a, b) {
  switch (String(operation).toLowerCase()) {
    case "add":
    case "+":
      return a + b;
    case "subtract":
    case "sub":
    case "-":
      return a - b;
    case "multiply":
    case "mul":
    case "*":
      return a * b;
    case "divide":
    case "div":
    case "/":
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    case "sqrt":
    case "squareroot":
    case "square-root":
    case "√":
      if (a < 0) {
        throw new Error("Cannot calculate square root of a negative number.");
      }
      return Math.sqrt(a);
    default:
      throw new Error("Invalid operation. Use add, subtract, multiply, divide, or sqrt.");
  }
}

module.exports = { calculate };
