let xp = document.getElementById("xp");
let hp = document.getElementById("hp");
let money = document.getElementById("money");

$("#xp").text("20");

let ch1 = " The protagonist, Alex, is a young adventurer living in the peaceful village of Eldoria. \n One day, a mysterious stranger arrives with tales of a great evil rising in the distant lands of Noxterra. \n The stranger gives Alex a choice: stay in Eldoria and ignore the threat or embark on a journey to defeat the evil. "

$("#b1").click(function(){
    $("#lore").text(ch1);
});