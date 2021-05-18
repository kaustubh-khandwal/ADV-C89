
function adduser()
{
    var name=document.getElementById("playerlogin_1").value;
    var name1=document.getElementById("playerlogin_2").value;

    localStorage.setItem("player1", name);
    localStorage.setItem("player2", name1);
    
     window.location.href="game_page.html";
}
