export const questions = [
  {
    questionText:
      "Which of the following selector selects all paragraph elements whose lang attribute has a value of exactly 'fr'?",
    answerOptions: [
      {
        answerText: " p[lang]",
        isCorrect: false,
      },
      {
        answerText: `p[lang~="fr"]`,
        isCorrect: false,
      },
      {
        answerText: `p[lang|="fr"]`,
        isCorrect: false,
      },
      { answerText: `p[lang="fr"]`, isCorrect: true },
    ],
  },
  {
    questionText:
      "Which of the following is a way to associate styles with your HTML document?",
    answerOptions: [
      { answerText: "External CSS - The Element", isCorrect: false },
      { answerText: "Imported CSS - @import Rule", isCorrect: false },
      { answerText: "Both of the above.", isCorrect: true },
      { answerText: " None of the above", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following uses 1vw or 1vh, whichever is smaller?",
    answerOptions: [
      { answerText: "px", isCorrect: false },
      { answerText: " vh", isCorrect: false },
      { answerText: "vw", isCorrect: false },
      { answerText: "vmin", isCorrect: true },
    ],
  },
  {
    questionText:
      "Which of the following property is used as shorthand to specify a number of other font properties?",
    answerOptions: [
      { answerText: "font-size", isCorrect: false },
      { answerText: "font", isCorrect: true },
      { answerText: "font-variant", isCorrect: false },
      { answerText: "font-weight", isCorrect: false },
    ],
  },

  {
    questionText:
      "Which of the following property changes the style of top border?",
    answerOptions: [
      { answerText: " :border-bottom-style", isCorrect: false },
      { answerText: " :border-top-style", isCorrect: true },
      { answerText: " :border-left-style", isCorrect: false },
      { answerText: ":border-right-style", isCorrect: false },
    ],
  },
];
