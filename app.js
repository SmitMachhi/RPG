let xp = document.getElementById("xp");
let hp = document.getElementById("hp");
let money = document.getElementById("money");

const story = {
  chapter1: {
    text:
      "The protagonist, Alex, is a young adventurer living in the peaceful village of Eldoria. \n" +
      "One day, a mysterious stranger arrives with tales of a great evil rising in the distant lands of Noxterra. \n" +
      "The stranger gives Alex a choice: stay in Eldoria and ignore the threat or embark on a journey to defeat the evil.",
    choices: [
      {
        text: "Stay in Eldoria",
        outcome: endgame(),
        effects: { xp: 0, hp: 0, money: 0 },
      },
      {
        text: "Embark on the Journey",

        outcome: "chapter2",
        effects: { xp: 50, hp: 0, money: 0 },
      },
    ],
  },
  chapter2: {
    text:
      "Alex leaves Eldoria and ventures into the Whispering Woods, a place known for its dangers and mysteries. \n" +
      "As night falls, Alex must decide whether to set up camp or press on through the night.",
    choices: [
      {
        text: "Set Up Camp:",
        outcome: endgame(),
        effects: { xp: 0, hp: 0, money: 0 },
      },
      {
        text: "Embark on the Journey",
        outcome: endgame(),
        effects: { xp: 50, hp: 0, money: 0 },
      },
    ],
  },
};
