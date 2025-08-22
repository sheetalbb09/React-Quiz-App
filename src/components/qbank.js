const qBank = [
  {
    id: 1,
    question: "What is JSX in React?",
    options: [
      "A. A simpler way to write JavaScript with a type safety approach.",
      "B. A syntax extension for JavaScript that looks similar to XML.",
      "C. A JavaScript framework for building user interfaces.",
      "D. A kind of JavaScript library for server-side rendering.",
    ],
    answer: "B. A syntax extension for JavaScript that looks similar to XML.",
  },
  {
    id: 2,
    question: "What is the purpose of keys in React?",
    options: [
      "A. Keys are used for security to encrypt data.",
      "B. Keys are used internally to optimize rendering by reconciling children in Arrays.",
      "C. Keys are used to uniquely identify a module or library.",
      "D. Keys allow developers to specify a unique ID that's private to each component.",
    ],
    answer:
      "B. Keys are used internally to optimize rendering by reconciling children in Arrays.",
  },
  {
    id: 3,
    question: "In React, what is a state?",
    options: [
      "A. A persistent storage like a database.",
      "B. An internal data store of a component that can change over time.",
      "C. A set of static properties that controls the render output of components.",
      "D. External data that is passed into the component as properties.",
    ],
    answer:
      "B. An internal data store of a component that can change over time.",
  },
  {
    id: 4,
    question:
      "Which lifecycle method is called when a component is first mounted in React?",
    options: [
      "A. componentDidMount",
      "B. componentDidUpdate",
      "C. componentWillMount",
      "D. componentWillReceiveProps",
    ],
    answer: "A. componentDidMount",
  },
  {
    id: 5,
    question:
      "What can you use to handle side effects in functional components in React?",
    options: ["A. useState", "B. useReducer", "C. useEffect", "D. useContext"],
    answer: "C. useEffect",
  },
];

export default qBank;
