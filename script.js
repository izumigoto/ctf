const flagInput = document.getElementById('flagInput');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');

// Generate a secure random flag (replace with your actual generation logic)
function generateFlag() {
  // Implement your secure random flag generation logic here (e.g., using a cryptographically secure random number generator)
  // For demonstration, use a placeholder:
  return "YOUR_SECURE_FLAG"; // Replace with your generated flag
}

const correctFlag = generateFlag();

submitButton.addEventListener('click', () => {
  const userFlag = flagInput.value.trim();

  if (userFlag === correctFlag) {
    result.textContent = "Flag is correct!";
    result.classList.add('success'); // Add success class for styling
  } else {
    result.textContent = "Incorrect flag.";
    result.classList.add('error'); // Add error class for styling
  }
});

// Clear error/success message on input change
flagInput.addEventListener('input', () => {
  result.textContent = "";
  result.classList.remove('error', 'success'); // Remove styling classes
});
