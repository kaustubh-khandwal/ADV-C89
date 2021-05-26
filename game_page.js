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

var Question_turn = "player1";
var Answer_turn = "player2";

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    var Question = number1+"X"+number2;


    var Question_word = "<h4 id='word_display'>Q."+Question+"</h4>";
    var input_box = "<br> Answer: <input type='number' id='input_check'><br>";
    var button = "<br> <button class='btn-info' onclick='check()'>Check</button>";
    var row = Question_word+input_box+button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    var Answer= document.getElementById("input_check").value;
    var right_ans = number1 * number2;
    console.log(right_ans)
    if (Answer == right_ans) {
        console.log(right_ans)
        if (Answer_turn == "player1") {
            player1_score = player1_score + 1;
            console.log(player1_score)
            document.getElementById("player1_score").innerHTML = player1_score;
        } else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
   
    if (Question_turn == "player1") {
        Question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }else{
        Question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (Answer_turn == "player1") {
        Answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }else{
        Answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}