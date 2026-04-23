const form = document.getElementById("calculator-form");
const resultElement = document.getElementById("result");
const operationElement = document.getElementById("operation");
const secondNumberElement = document.getElementById("second-number");

function updateSecondNumberState() {
  const isSqrt = operationElement.value === "sqrt";
  secondNumberElement.disabled = isSqrt;
  secondNumberElement.required = !isSqrt;

  if (isSqrt) {
    secondNumberElement.value = "";
    secondNumberElement.placeholder = "Not required for square root";
  } else {
    secondNumberElement.placeholder = "";
  }
}

operationElement.addEventListener("change", updateSecondNumberState);
updateSecondNumberState();

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const operation = operationElement.value;
  const a = document.getElementById("first-number").value;
  const b = secondNumberElement.value;

  resultElement.textContent = "Calculating...";

  try {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ operation, a, b })
    });

    const data = await response.json();

    if (!response.ok) {
      resultElement.textContent = `Error: ${data.error || "Something went wrong."}`;
      return;
    }

    resultElement.textContent = `Result: ${data.result}`;
  } catch (error) {
    resultElement.textContent = "Error: Could not connect to server.";
  }
});
