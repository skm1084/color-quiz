$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "1. The most popular “favorite color” is:",
        choices: ["Red", "Blue", "Green", "Purple"],
        qNum : 0,
        correct : 1,
        fact: "Based on the survey conducted by several global marketing firms, they’ve concluded that people worldwide picked blue (40%) as their favorite color followed by purple (14%). Though some researchers also suggest that red and green are a close second and third respectively."
        },
        {
        question: "2. What is the first color that babies see?",
        choices: ["Yellow", "Blue", "Red", "Green"],
        qNum : 1,
        correct : 2,
        fact: "Recent studies have shown that infants as young as 2 weeks of age can already distinguish the color red. "
        },
        {
        question: "3. Mosquitos are attracted the most to what color?",
        choices: ["Red", "White", "Grey", "Blue"],
        qNum : 2,
        correct : 3,
        fact: "Research shows that mosquitoes are attracted to dark colors especially blue. "
        },
        {
        question: "4. What color combo elicit the feeling of hunger?",
        choices: ["Yellow + Red", "Purple + Red", "Red + Black", "Orange + Purple"],
        qNum : 3,
        correct : 0,
        fact: "Researchers says that red and yellow are the most appetizing colors. Having said that, they advice not to paint your kitchen yellow if you’re on a diet."
        },
        {
        question: "5. The human eye processes what color first?",
        choices: ["Violet", "Red", "Yellow", "Green"],
        qNum : 4,
        correct : 2,
        fact: "Yellow is the most visible color of the spectrum. This is why it is used for cautionary signs and emergency rescue vehicles."
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    var numberWrong = 0;

     $("#question_wrapper").on("click", "#submit", function () {
        currentQuestion++;
        nextQuestion();
    });

       $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });
    function nextQuestion() {
        if (currentQuestion < 5) {
        	var correctAnswer = questions[currentQuestion-1].correct;
        	var userAnswer = $("input:checked").val();
        	console.log(userAnswer + " " + correctAnswer);
        	if (correctAnswer == userAnswer){
        		numberCorrect++;
        	}
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn(3000);
        }
        else {
        	var correctAnswer = questions[currentQuestion-1].correct;
        	var userAnswer = $("input:checked").val();
        	console.log(userAnswer + " " + correctAnswer);
        	if (correctAnswer == userAnswer){
        		numberCorrect++;
        	}
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeOut(30000);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore).fadeIn(3000);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore).fadeIn(3000);
            }
        }
    }
});