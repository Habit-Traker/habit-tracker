var habit1 = Habit(
  "Exercise",
  "Fitness",
  "Workout for 30 minutes daily",
  7,
  HabitsID()
);
var habit2 = Habit(
  "Read",
  "Self-Improvement",
  "Read a book for 20 minutes daily",
  5,
  HabitsID(),
  [
    { note: "Finished a chapter", rate: 4, done: true },
    { note: "Started a new book", rate: 5, done: true },
  ]
);
var habit3 = Habit(
  "Meditate",
  "Mindfulness",
  "Practice meditation for 15 minutes daily",
  10,
  HabitsID()
);
var habit4 = Habit(
  "Learn a Language",
  "Skill Development",
  "Study a new language for 30 minutes daily",
  7,
  HabitsID(),
  [
    { note: "learned alphapet", rate: 5, done: true },
    { note: "lerned numbers ", rate: 4, done: true },
  ]
);
var habit5 = Habit(
  "Drink Water",
  "Health",
  "Drink 8 glasses of water daily",
  15,
  HabitsID(),
  [
    { note: "drunk 2 L of water", rate: 5, done: true },
    { note: "it 's too cold  ", rate: 1, done: false },
  ]
);
var habit6 = Habit(
  "Write",
  "Creativity",
  "Write for 20 minutes daily",
  5,
  HabitsID(),
  [
    { note: "wrote 2 pages about my day", rate: 5, done: true },
    { note: " wasn't feeling inspired", rate: 1, done: false },
  ]
);
var habit7 = Habit(
  "Eat Vegetables",
  "Health",
  "Include vegetables in every meal",
  10,
  HabitsID()
);
var habit8 = Habit(
  "Practice Guitar",
  "Hobby",
  "Play the guitar for 20 minutes daily",
  7,
  HabitsID()
);
var habit9 = Habit(
  "Code",
  "Skill Development",
  "Code for 1 hour daily",
  7,
  HabitsID()
);
var habit10 = Habit(
  "Practice Yoga",
  "Fitness",
  "Practice yoga for 30 minutes daily",
  10,
  HabitsID(),
  []
);
var habit11 = Habit(
  "Limit Screen Time",
  "Health",
  "Limit screen time to 2 hours daily",
  15,
  HabitsID()
);
var habit12 = Habit(
  "Review Goals",
  "Self-Improvement",
  "Review personal and professional goals daily",
  7,
  HabitsID()
);
var habit13 = Habit(
  "Quality Sleep",
  "Health",
  "Get 7-8 hours of quality sleep",
  15,
  HabitsID()
);
var habit14 = Habit(
  "Draw",
  "Creativity",
  "Draw or sketch for 20 minutes daily",
  5,
  HabitsID()
);
var habit15 = Habit(
  "Express Gratitude",
  "Mindfulness",
  "Write down three things to be grateful for daily",
  10,
  HabitsID()
);

habit1.progress = habit1.progress.concat([
  { note: "Feeling energized!", rate: 5, done: true },
  { note: "Missed today", rate: 2, done: false },
  { note: "Feeling energized!", rate: 5, done: true },
  { note: "Done it", rate: 3, done: true },
]);

var habits = [
  habit1,
  habit2,
  habit3,
  habit4,
  habit5,
  habit6,
  habit7,
  habit8,
  habit9,
  habit10,
  habit11,
  habit12,
  habit13,
  habit14,
  habit15,
];

var currentHabit = findObject(storedHabits, "id", Number(getURLHabit()))[0];

console.log(getURLHabit());
$(".card-title").append(`${currentHabit.name}`);
$(".habit-category").append(`${currentHabit.category}`);
$(".habit-description").append(`${currentHabit.description}`);
$(".habit-achivedd").append(`${currentHabit.goalAcheived}`);
$(".habit-achived").append(`${currentHabit.goalAcheived}`);
$(".habit-avg-reating").append(`${avgrating(currentHabit.progress)}`);
each(currentHabit.progress, function (element) {
  if (element.done === true) {
    $(".habitcol-progress").append(`<div class="daily-state done"></div>`);
  } else {
    $(".habitcol-progress").append(`<div class="daily-state not-done"></div>`);
  }
});
var $note = $("#habit-note");
var $;
var $done = $("input[name='habit-done']");
var $submitday = $("#add-day");

$submitday.on("click", function () {
  var validInputs =
    $('input[name="habit-done"]:checked').val() !== undefined &&
    $('input[name="habit-rating"]:checked').val() !== undefined;
  if (validInputs) {
    var newDay = {
      note: $note.val(),
      rating: $('input[name="habit-rating"]:checked').val(),
      done: $('input[name="habit-done"]:checked').val(),
    };

    currentHabit.progress.unshift(newDay);
    localStorage.setItem("newDay", JSON.stringify(newDay));
    var avg = avgrating(currentHabit.progress);
    $(".habit-avg-reating").append(`${avg}`);
  } else {
    alert(
      "you should  provide if  the habit '" +
        currentHabit.name +
        "' of the day is achived or not with it s rating for static"
    );
  }
  console.log(storedHabits);
  localStorage.setItem("storedHabits", JSON.stringify(storedHabits));
});
function avgrating(array) {
  return reduce(
    array,
    function (acc, element) {
      return (acc = acc + element.rating / array.length);
    },
    0
  );
}
// location.reload();
