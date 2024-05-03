const flagInput = document.getElementById('flagInput');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');


const correctFlag = "EaswariCTF";

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
