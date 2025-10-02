// Step 1: Define the function
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve user’s answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 4: Compare answers
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case where no option is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Step 5: Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
