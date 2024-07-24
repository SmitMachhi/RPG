const lore = $("#lore");

const start = $("#start");
const btn1 = $("#btn1");
const btn2 = $("#btn2");

let playerStats = { xp: 0, hp: 100, gold: 20 };

$(".points").each(function () {
  let statId = $(this).attr("id"); // Get the id of the current element
  $(this).text(playerStats[statId]); // Set the text content to the corresponding value in playerStats
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
        // outcome: "endGame",
        effects: { xp: 0, hp: 0, gold: 0 },
      },
      {
        text: "Embark on the Journey",
        // outcome: "chapter2",
        effects: { xp: 50, hp: -10, gold: 20 },
      },
    ],
  },
  // Additional chapters can be added here
};

start.click(function () {
  cssHide(start);
  chapter1();
});

/* function updateXpUI() {
  $("#xp").html(playerStats.xp);
} */

function updateStats(v1, v2, v3) {
  playerStats.xp += v1;
  playerStats.hp += v2;
  playerStats.gold += v3;

  $("#xp").html(playerStats.xp);
  $("#hp").html(playerStats.hp);
  $("#gold").html(playerStats.gold);
}

function chapter1() {
  lore.html(story.chapter1.line).slideDown(2000);

  setTimeout(function () {
    btn1.fadeIn(1000); // Fade in over 1 second
    btn2.fadeIn(1000); // Fade in over 1 second
  }, 3000);

  btn1.text(story.chapter1.choices[0].text);
  btn2.text(story.chapter1.choices[1].text);

  btn1.click(function () {
    endGame();
    $(".button").attr("disabled", true);
  });

  btn2.click(function () {
    updateStats(
      story.chapter1.choices[1].effects.xp,
      story.chapter1.choices[1].effects.hp,
      story.chapter1.choices[1].effects.gold
    );
    $(".button").attr("disabled", true);
  });
}

function endGame() {
  $(".container").css("background-color", "red");
}
