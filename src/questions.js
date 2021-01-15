const json = {
 "title": "Concept Inventory",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question9",
     "title": "Suppose each card has a number on one side and a letter on the other. Which cards are relevant to turn over if you want to know whether the following statement is false? If a card has a vowel on one side, then it has an even number on the other side.",
     "valueName": "implication",
     "correctAnswer": "correct",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "The A card"
      },
      {
       "value": "correct",
       "text": "The A card and the 7 card"
      },
      {
       "value": "b",
       "text": "The A card and the 4 card"
      },
      {
       "value": "c",
       "text": "The A, 4, and 7 card"
      },
      {
       "value": "d",
       "text": "All the cards"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question12",
     "title": "If the teacher marks all the exam papers, they will get paid 50 pounds, the teacher did not get paid 50 pounds, which of the following conclusions are valid?",
     "valueName": "implication",
     "correctAnswer": "correct",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "The teacher marked the papers"
      },
      {
       "value": "b",
       "text": "The teacher did not mark the papers"
      },
      {
       "value": "c",
       "text": "If the teacher got paid 50 pounds then they marked all the papers"
      },
      {
       "value": "d",
       "text": "The teacher did not get the papers"
      },
      {
       "value": "correct",
       "text": "None of the above"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question13",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Given that ~p -> q, p are both true, which statement can be deduced",
     "valueName": "denial of antecedent",
     "correctAnswer": "correct",
     "isRequired": true,
     "choices": [
      {
       "value": "correct",
       "text": "p"
      },
      {
       "value": "a",
       "text": "~p"
      },
      {
       "value": "b",
       "text": "q"
      },
      {
       "value": "c",
       "text": "~q"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question15",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Given that ~p => ~q, ~q are both true, which statement can be deduced",
     "valueName": "affirmation of consequent",
     "correctAnswer": "correct",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "p"
      },
      {
       "value": "b",
       "text": "¬p"
      },
      {
       "value": "c",
       "text": "q"
      },
      {
       "value": "correct",
       "text": "¬q"
      },
      {
       "value": "d",
       "text": "None of the above"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "Disjunctive denial",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Given that ¬p v q, ¬q are both true, which statement can be deduced",
     "valueName": "disjunctive denial",
     "correctAnswer": [
      "b",
      "e"
     ],
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "p"
      },
      {
       "value": "b",
       "text": "¬p"
      },
      {
       "value": "c",
       "text": "q"
      },
      {
       "value": "e",
       "text": "¬q"
      },
      {
       "value": "d",
       "text": "None of the above"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "disjunctive affirmation",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Given that p v ~q, ~q are both true, which statement can be deduced.",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "p"
      },
      {
       "value": "b",
       "text": "~p"
      },
      {
       "value": "c",
       "text": "q"
      },
      {
       "value": "e",
       "text": "~q"
      },
      {
       "value": "d",
       "text": "None of the above"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "modus ponens",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Given that p -> q, p are both true, which statement can be deduced",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "p"
      },
      {
       "value": "b",
       "text": "~p"
      },
      {
       "value": "c",
       "text": "q"
      },
      {
       "value": "e",
       "text": "~q"
      },
      {
       "value": "d",
       "text": "None of the above"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "modus tollens",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Given that p -> q, ~q are both true which statement can be deduced",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "p"
      },
      {
       "value": "b",
       "text": "~p"
      },
      {
       "value": "c",
       "text": "q"
      },
      {
       "value": "e",
       "text": "~q"
      },
      {
       "value": "d",
       "text": "None of the above"
      }
     ]
    },
    {
     "type": "checkbox",
     "name": "biconditional question",
     "title": "Tick all statements for which ~p <-> q evaluates to true, (<-> is if and only if)",
     "description": "correct ans = b,c",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "p,q both true"
      },
      {
       "value": "b",
       "text": "p true q false"
      },
      {
       "value": "c",
       "text": "p false q true"
      },
      {
       "value": "d",
       "text": "p,q both false"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "negation question",
     "title": "What is the negation of the statement \"Either -2 <= x <= -1 OR 1 <= x <= 2\"",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "x < -2 or 2 < x or -1 < x < 1"
      },
      {
       "value": "b",
       "text": "x < -2 or 2 < x"
      },
      {
       "value": "c",
       "text": "-1 < x < 1"
      },
      {
       "value": "d",
       "text": "-2 < x < 2"
      },
      {
       "value": "e",
       "text": "x <= -2 or 2 <= x or -1 < x < 1"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Inductive Reasoning question",
     "title": "A man and woman are walking side by side and their RIGHT feet touch the ground at the same time. The woman takes THREE steps for each TWO steps the man takes. Which of the following most accurately represents the number of steps the man takes until the LEFT foot of the man and the woman touch the ground at the same time",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "6"
      },
      {
       "value": "b",
       "text": "6*n for all n = 1,2,3..."
      },
      {
       "value": "c",
       "text": "some k = 1,2,3... 10000"
      },
      {
       "value": "d",
       "text": "12*n for all n=1,2,3..."
      },
      {
       "value": "e",
       "text": "None of the above"
      }
     ]
    }
   ]
  }
 ],
 "maxTimeToFinish": 5000
}

export default json;
