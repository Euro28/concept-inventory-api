const json = {
 "title": "Concept Inventory",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Set question",
     "title": "Let S be a well defined set (a set with no ambiguity on whether an object belongs to the set), for example C = {a,b,c} is well-defined as it is clear what is and is not in the set. Let {} be the empty set with no elements, which of the following statements are always true. (PICK ONE)",
     "isRequired": true,
     "choices": [
      {
       "value": "set-1",
       "text": "{}  ∈  S"
      },
      {
       "value": "correct",
       "text": "{} ⊆ S"
      },
      {
       "value": "set-2",
       "text": "{} ⊂ S"
      },
      {
       "value": "set-3",
       "text": "{} = {{}}"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "question9",
     "title": "Suppose each card has a number on one side and a letter on the other. Which cards are relevant to turn over if you want to know whether the following statement is false? If a card has a vowel on one side, then it has an even number on the other side.",
     "isRequired": true,
     "choices": [
      {
       "value": "implication-1",
       "text": "The A card"
      },
      {
       "value": "correct",
       "text": "The A card and the 7 card"
      },
      {
       "value": "implication-2",
       "text": "The A card and the 4 card"
      },
      {
       "value": "implication-3",
       "text": "The A, 4, and 7 card"
      },
      {
       "value": "implication-4",
       "text": "All the cards"
      }
     ],
     "colCount": 0
    },
    {
     "type": "image",
     "name": "question10",
     "startWithNewLine": false,
     "imageLink": "https://i.ibb.co/5GLyqdH/cards.png",
     "imageHeight": 250,
     "imageWidth": 500
    },
    {
     "type": "radiogroup",
     "name": "question12",
     "title": "If the teacher marks all the exam papers, they will get paid 50 pounds, the teacher did not get paid 50 pounds, which of the following conclusions are valid? (select one)",
     "isRequired": true,
     "choices": [
      {
       "value": "implication-1",
       "text": "The teacher marked the papers"
      },
      {
       "value": "implication-2",
       "text": "The teacher did not mark the papers"
      },
      {
       "value": "implication-3",
       "text": "If the teacher got paid 50 pounds then they marked all the papers"
      },
      {
       "value": "implication-4",
       "text": "The teacher did not get the papers"
      },
      {
       "value": "correct",
       "text": "None of the above"
      }
     ],
     "colCount": 0
    },
    {
     "type": "html",
     "name": "question1",
     "html": "<img src=\"https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{200}&space;\\huge&space;\\neg&space;p&space;\\rightarrow&space;q&space;\\newline&space;\\indent&space;p\" title=\"\\huge \\neg p \\rightarrow q \\newline \\indent p\" />"
    },
    {
     "type": "checkbox",
     "name": "question13",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Tick all check boxes which can be deduced assuming the two statements above are true",
     "isRequired": true,
     "choices": [
      {
       "value": "correct",
       "text": "p"
      },
      {
       "value": "denial of antecedent-1",
       "text": "~p"
      },
      {
       "value": "denial of antecedent-1",
       "text": "q"
      },
      {
       "value": "denial of antecedent-1",
       "text": "~q"
      },
      {
       "value": "denial of antecedent-1",
       "text": "p and ~p"
      },
      {
       "value": "denial of antecedent-1",
       "text": "p and q"
      },
      {
       "value": "denial of antecedent-1",
       "text": "~p and q"
      },
      {
       "value": "denial of antecedent-1",
       "text": "None of the above"
      }
     ],
     "colCount": 5
    },
    {
     "type": "html",
     "name": "question14",
     "html": "<img src=\"https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{200}&space;\\huge&space;\\neg&space;p&space;\\rightarrow&space;\\neg&space;q&space;\\newline&space;\\indent&space;\\neg&space;q\" title=\"\\huge \\neg p \\rightarrow \\neg q \\newline \\indent \\neg q\" />"
    },
    {
     "type": "checkbox",
     "name": "question15",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Tick all check boxes which can be deduced assuming the two statements above are true",
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
       "value": "correct",
       "text": "~q"
      },
      {
       "value": "d",
       "text": "None of the above"
      },
      {
       "value": "item1",
       "text": "p and ~p"
      },
      {
       "value": "item2",
       "text": "c"
      }
     ],
     "colCount": 5
    },
    {
     "type": "html",
     "name": "question6",
     "html": "<img src=\"https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{200}&space;\\huge&space;\\neg&space;p&space;\\lor&space;q&space;\\newline&space;\\indent&space;\\neg&space;q\" title=\"\\huge \\neg p \\lor q \\newline \\indent \\neg q\" />"
    },
    {
     "type": "checkbox",
     "name": "Disjunctive denial",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Tick all check boxes which can be deduced assuming the two statements above are true",
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
     ],
     "colCount": 5
    },
    {
     "type": "html",
     "name": "question8",
     "html": "<img src=\"https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{200}&space;\\huge&space;p&space;\\lor&space;\\neg&space;q&space;\\newline&space;\\indent&space;\\neg&space;q\" title=\"\\huge p \\lor \\neg q \\newline \\indent \\neg q\" />"
    },
    {
     "type": "checkbox",
     "name": "disjunctive affirmation",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Tick all check boxes which can be deduced assuming the two statements above are true",
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
     ],
     "colCount": 5
    },
    {
     "type": "html",
     "name": "question7",
     "html": "<img src=\"https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{200}&space;\\huge&space;p&space;\\rightarrow&space;q&space;\\newline&space;\\indent&space;p\" title=\"\\huge p \\rightarrow q \\newline \\indent p\" />"
    },
    {
     "type": "checkbox",
     "name": "modus ponens",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Tick all check boxes which can be deduced assuming the two statements above are true",
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
     ],
     "colCount": 5
    },
    {
     "type": "html",
     "name": "question11",
     "html": "<img src=\"https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{200}&space;\\huge&space;p&space;\\rightarrow&space;q&space;\\newline&space;\\indent&space;\\neg&space;q\" title=\"\\huge p \\rightarrow q \\newline \\indent \\neg q\" />"
    },
    {
     "type": "checkbox",
     "name": "modus tollens",
     "minWidth": "",
     "maxWidth": "600",
     "title": "Tick all check boxes which can be deduced assuming the two statements above are true",
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
     ],
     "colCount": 5
    },
    {
     "type": "html",
     "name": "question2",
     "html": "<img src=\"https://latex.codecogs.com/gif.latex?\\inline&space;\\dpi{200}&space;\\huge&space;\\neg&space;p&space;\\leftrightarrow&space;q\" title=\"\\huge \\neg p \\leftrightarrow q\" />"
    },
    {
     "type": "checkbox",
     "name": "biconditional question",
     "title": "Check all boxes which results in the statement above holding in the given circumstance",
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
     ],
     "colCount": 0
    },
    {
     "type": "image",
     "name": "question3",
     "imageLink": "https://i.ibb.co/JH3jP0L/comp.png",
     "imageHeight": 100,
     "imageWidth": 900
    },
    {
     "type": "radiogroup",
     "name": "negation question",
     "title": "Consider the above statement The negation of this statement is",
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
     ],
     "colCount": 0
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
     ],
     "colCount": 0
    }
   ]
  }
 ],
 "maxTimeToFinish": 5000
}

export default json;
