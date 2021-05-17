
var player_1 = document.getElementById("playerlogin_1").value;
var player_2 = document.getElementById("playerlogin_2").value;
function adduser() {
    document.write(window.location.href);
    localStorage.setItem("player1_name", player_1);
    localStorage.setItem("player2_name", player_2);
    alert("your data has been saved");/
    window.location= "https://github.com/kaustubh-khandwal/ADV-C89/game_page.html";
}

//
