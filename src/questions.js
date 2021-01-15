const json = {
  title: "Concept Inventory",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question 1",
          title:
            "Suppose each card has a number on one side and a letter on the other. Which cards are relevant to turn over if you want to know whether the following statement is false? If a card has a vowel on one side, then it has an even number on the other side.",
          valueName: "implication",
          correctAnswer: "card-2",
          isRequired: true,
          choices: [
            {
              value: "card-1",
              text: "The A card",
            },
            {
              value: "card-2",
              text: "The A card and the 7 card",
            },
            {
              value: "card-3",
              text: "The A card and the 4 card",
            },
            {
              value: "card-4",
              text: "The A, 4, and 7 card",
            },
            {
              value: "card-5",
              text: "All the cards",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "question 2",
          title:
            "If the teacher marks all the exam papers, they will get paid 50 pounds, the teacher did not get paid 50 pounds, which of the following conclusions are valid?",
          valueName: "implication",
          correctAnswer: "teacher-5",
          isRequired: true,
          choices: [
            {
              value: "teacher-1",
              text: "The teacher marked the papers",
            },
            {
              value: "teacher-2",
              text: "The teacher did not mark the papers",
            },
            {
              value: "teacher-3",
              text:
                "If the teacher got paid 50 pounds then they marked all the papers",
            },
            {
              value: "teacher-4",
              text: "The teacher did not get the papers",
            },
            {
              value: "teacher-5",
              text: "None of the above",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "question 3",
          minWidth: "",
          maxWidth: "600",
          title:
            "Given that ~p -> q, p are both true, which statement can be deduced",
          valueName: "denial of antecedent",
          correctAnswer: "denial antecedent-1",
          isRequired: true,
          choices: [
            {
              value: "denial antecedent-1",
              text: "p",
            },
            {
              value: "denial antecedent-2",
              text: "~p",
            },
            {
              value: "denial antecedent-3",
              text: "q",
            },
            {
              value: "denial antecedent-4",
              text: "~q",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "question 4",
          minWidth: "",
          maxWidth: "600",
          title:
            "Given that ~p => ~q, ~q are both true, which statement can be deduced",
          valueName: "affirmation of consequent",
          correctAnswer: "correct",
          isRequired: true,
          choices: [
            {
              value: "affirmation-1",
              text: "p",
            },
            {
              value: "affirmation-2",
              text: "¬p",
            },
            {
              value: "affirmation-3",
              text: "q",
            },
            {
              value: "affirmation-4",
              text: "¬q",
            },
            {
              value: "affirmation-5",
              text: "None of the above",
            },
          ],
        },
        {
          type: "checkbox",
          name: "question 5",
          minWidth: "",
          maxWidth: "600",
          title:
            "Given that ¬p v q, ¬q are both true, which statement can be deduced",
          valueName: "disjunctive denial",
          correctAnswer: ["b", "e"],
          isRequired: true,
          choices: [
            {
              value: "disjunctive denial-1",
              text: "p",
            },
            {
              value: "disjunctive denial-2",
              text: "¬p",
            },
            {
              value: "disjunctive denial-3",
              text: "q",
            },
            {
              value: "disjunctive denial-4",
              text: "¬q",
            },
            {
              value: "disjunctive denial-5",
              text: "None of the above",
            },
          ],
        },
        {
          type: "checkbox",
          name: "question 6",
          minWidth: "",
          maxWidth: "600",
          title:
            "Given that p v ~q, ~q are both true, which statement can be deduced.",
          valueName: "Disjunctive Affirmation",
          correctAnswer: ["e"],
          isRequired: true,
          choices: [
            {
              value: "Disjunctive Affirmation-1",
              text: "p",
            },
            {
              value: "Disjunctive Affirmation-2",
              text: "~p",
            },
            {
              value: "Disjunctive Affirmation-3",
              text: "q",
            },
            {
              value: "Disjunctive Affirmation-4",
              text: "~q",
            },
            {
              value: "Disjunctive Affirmation-5",
              text: "None of the above",
            },
          ],
        },
        {
          type: "checkbox",
          name: "question 7",
          minWidth: "",
          maxWidth: "600",
          title:
            "Given that p -> q, p are both true, which statement can be deduced",
          valueName: "Modus Ponens",
          correctAnswer: ["a", "c"],
          isRequired: true,
          choices: [
            {
              value: "modus ponens-1",
              text: "p",
            },
            {
              value: "modus ponens-2",
              text: "~p",
            },
            {
              value: "modus ponens-3",
              text: "q",
            },
            {
              value: "modus ponens-4",
              text: "~q",
            },
            {
              value: "modus ponens-5",
              text: "None of the above",
            },
          ],
        },
        {
          type: "checkbox",
          name: "question 8",
          minWidth: "",
          maxWidth: "600",
          title:
            "Given that p -> q, ~q are both true which statement can be deduced",
          valueName: "Modus Tollens",
          correctAnswer: ["b", "c"],
          isRequired: true,
          choices: [
            {
              value: "Modus Tollens-1",
              text: "p",
            },
            {
              value: "Modus Tollens-2",
              text: "~p",
            },
            {
              value: "Modus Tollens-3",
              text: "q",
            },
            {
              value: "Modus Tollens-4",
              text: "~q",
            },
            {
              value: "Modus Tollens-5",
              text: "None of the above",
            },
          ],
        },
        {
          type: "checkbox",
          name: "question 9",
          title:
            "Tick all statements for which ~p <-> q evaluates to true, (<-> is if and only if)",
          valueName: "Biconditional",
          correctAnswer: ["b", "c"],
          isRequired: true,
          choices: [
            {
              value: "biconditional-1",
              text: "p,q both true",
            },
            {
              value: "biconditional-2",
              text: "p true q false",
            },
            {
              value: "biconditional-3",
              text: "p false q true",
            },
            {
              value: "biconditional-4",
              text: "p,q both false",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "question 10",
          title:
            'What is the negation of the statement "Either -2 <= x <= -1 OR 1 <= x <= 2"',
          valueName: "Negation",
          correctAnswer: "e",
          isRequired: true,
          choices: [
            {
              value: "negation-1",
              text: "x < -2 or 2 < x or -1 < x < 1",
            },
            {
              value: "negation-2",
              text: "x < -2 or 2 < x",
            },
            {
              value: "negation-3",
              text: "-1 < x < 1",
            },
            {
              value: "negation-4",
              text: "-2 < x < 2",
            },
            {
              value: "negation-5",
              text: "x <= -2 or 2 <= x or -1 < x < 1",
            },
          ],
        },
      ],
    },
  ],
  maxTimeToFinish: 5000,
};

export default json;
