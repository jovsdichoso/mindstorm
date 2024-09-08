document.addEventListener('DOMContentLoaded', () => {
    const questionList = document.getElementById('questionList');
    const selectAnswerBtn = document.getElementById('selectAnswerBtn');
    const resultDiv = document.getElementById('result');

    // Create 10 question input fields dynamically
    for (let i = 1; i <= 10; i++) {
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box', 'mb-3');

        const label = document.createElement('label');
        label.classList.add('form-label');
        label.innerHTML = `Answer Question ${i}`;

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.id = `answer${i}`;
        input.placeholder = `Your answer to question ${i}`;

        questionBox.appendChild(label);
        questionBox.appendChild(input);
        questionList.appendChild(questionBox);
    }

    // Handle selection of the best answer
    selectAnswerBtn.addEventListener('click', () => {
        let bestAnswer = '';
        let bestAnswerId = '';

        // Loop through the answers and let the user pick one (simplified for now)
        for (let i = 1; i <= 10; i++) {
            const answer = document.getElementById(`answer${i}`).value;
            if (answer !== '') {
                bestAnswer = answer; // For now, we just select the last non-empty answer
                bestAnswerId = `answer${i}`;
            }
        }

        if (bestAnswer) {
            resultDiv.classList.remove('d-none');
            resultDiv.innerHTML = `Best Answer: <strong>${bestAnswer}</strong>`;
        } else {
            resultDiv.classList.add('d-none');
        }
    });
});
