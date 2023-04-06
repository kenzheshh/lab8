const questions = [
    "What is the capital of France?",
    "Which planet is closest to the Sun?",
    "What is the chemical symbol for Hydrogen?"
];

const answers = [
    "Paris",
    "Mercury",
    "H"
];

const choice_options = [
    ["Berlin", "London", "Paris", "Madrid"],
    ["Mercury", "Venus", "Mars", "Earth"],
    ["He", "H", "O", "N"]
];

$(document).ready(function() {
    for (let i = 0; i < questions.length; i++) {
        let question_html = `<div class="question">
            <p>`;
        
        for (let j = 0; j < questions[i].length; j++) {
            question_html += `<span class="letter">${questions[i][j]}</span>`;
        }
        
        question_html += `</p><ul>`;
        
        for (let j = 0; j < choice_options[i].length; j++) {
            question_html += `<li>
                <input type="radio" name="question${i}" value="${choice_options[i][j]}"> ${choice_options[i][j]}
            </li>`;
        }
        
        question_html += `</ul></div>`;
        
        $("#quiz-container").append(question_html);
    }
    

    $(".letter").hover(function() {
        $(this).css("font-size", "1.2em");
    }, function() {
        $(this).css("font-size", "1em");
    });
    
    $("#submit-quiz").on("click", function() {
        let score = 0;
        
        for (let i = 0; i < questions.length; i++) {
            const selected_answer = $(`input[name="question${i}"]:checked`).val();
            
            if (selected_answer === answers[i]) {
                score++;
            }
        }
        
        $("#quiz-result").html(`<p id = 'Score'>Your score is: ${score}/${questions.length}</p>`);
    });
});
