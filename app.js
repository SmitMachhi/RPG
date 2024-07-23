const lore = $("#lore");

const start = $("#start");
const btn1 = $("#btn1");
const btn2 = $("#btn2");

let playerStats = { xp: 0, hp: 100, gold: 20 };

$.each(playerStats, function (stat, value) {
  $("#" + stat).text(value);
});

$(document).ready(cssShow(start), cssHide(btn1), cssHide(btn2));

function cssHide(element) {
  $(element).css("display", "none");
}

function cssShow(element) {
  $(element).css("display", "block");
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

function updateXp(amount) {
  playerStats.xp += amount;
  return amount;
}

function updateXpUI() {
  $("#xp").html(playerStats.xp);
}

start.click(function () {
  cssHide(start);
  chapter1();
});

function chapter1() {
  lore.html(story.chapter1.line).slideDown(2000);

  setInterval(function () {
    cssShow(btn1);
    cssShow(btn2);
  }, 5000);

  btn1.text(story.chapter1.choices[0].text);
  btn2.text(story.chapter1.choices[1].text);
}
