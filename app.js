const btn1 = $("#btn1");
const btn2 = $("#btn2");

let playerStats = { xp: 0, hp: 100, gold: 20 };

$.each(playerStats, function (stat, value) {
  $("#" + stat).text(value);
});

function xp(value) {
  value = playerStats.xp;
}

const story = {
  chapter1: {
    line: `The protagonist, Alex, is a young adventurer living in the peaceful village of Eldoria.<br><br>
           One day, a mysterious stranger arrives with tales of a great evil rising in the distant lands of Noxterra.<br><br>
           The stranger gives Alex a choice: stay in Eldoria and ignore the threat or embark on a journey to defeat the evil.`,
    choices: [
      {
        text: "Stay in Eldoria",
        outcome: "endgame",
        effects: { xp: 10, hp: 0, money: 0 },
      },
      {
        text: "Embark on the Journey",
        outcome: "chapter2",
        effects: { xp: 50, hp: 0, money: 0 },
      },
    ],
  },
  // Additional chapters can be added here
};

$(document).ready(function () {
  function cssHide(element) {
    $(element).css("display", "none");
  }
  cssHide(btn2);
});
