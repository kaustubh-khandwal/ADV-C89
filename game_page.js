player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var Question = number1+"X"+number2;


    var Question_word = "<h4 id='word_display'>Q."+Question+"</h4>";
    var input_box = "<br> Answer: <input type='number' id='input_check'><br>";
    var button = "<br> <button class='btn-info' onclick='check()'>Check</button>";
    var row = Question_word+input_box+button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}