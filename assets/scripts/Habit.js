function Habit(name, description, goal, progress) {
  return {
    name: name,
    description: description,
    goal: goal,
    progress: progress,
    category: category,
    status: false,
  };
}
var habits = [
  Habit(
    "Exercise",
    "Being active has been shown to have many health benefits, both physically and mentally",
    30,
    [
      { note: "2H IN GYM", done: true },
      { note: "Swimming", done: false },
      { note: "Running", done: false },
    ]
  ),
  Habit(
    "Meditate",
    "Learning to meditate is like learning any other skill",
    7,
    [
      { note: "calm", done: true },
      { note: "missed the setion", done: false },
      { note: "relaxed", done: true },
    ]
  ),
  Habit("Reading ", "20 pages a day will change your life", 7, [
    { note: "Rich dar Poor dad", done: true },
    { note: "Anatomy of Everything", done: true },
  ]),
  Habit("eating fresh", "Eating lots of vegetables , fruit and meat.", 30, [
    { note: "Lemon-Pepper Salmon", done: true },
    { note: "MC", done: false },
    { note: "Cesar salade", done: true },
    { note: "Mediterranean Chicken", done: true },
  ]),
  Habit(
    "Sleep",
    "have 7 or more hours of good-quality sleep on a regular schedule each night",
    14,
    [
      { note: "from 9 pm to 7 AM ", done: true },
      { note: "from 03 PM to 7 AM", done: false },
    ]
  ),
  Habit(
    "Learn something new",
    "each day we choose a tobic and learn somthing new about it",
    30,
    [
      { note: "gender equality", done: true },
      { note: "to be is not to be", done: true },
      { note: "i think so i exist", done: true },
      { note: "missed this day", done: false },
    ]
  ),
  Habit("solve a crossword", "solve a crosswordwith leveling up each day", 30, [
    { note: "easy", done: true },
    { note: "effortless", done: true },
    { note: "simple", done: true },
    { note: "smooth", done: true },
  ]),
  Habit("Jump rope", "20 min of jump rope", 30, [
    { note: "too hard", done: true },
    { note: "im getting it", done: true },
    { note: "it s a peace of cake", done: true },
  ]),
];
var each = function (coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
};

var filter = function (array, predicate) {
  var acc = [];
  each(array, function (e, i) {
    if (predicate(e, i)) {
      acc.push(e);
    }
  });
  return acc;
};
