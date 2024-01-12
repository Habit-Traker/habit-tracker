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
  HabitsID()
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
  HabitsID()
);
var habit5 = Habit(
  "Drink Water",
  "Health",
  "Drink 8 glasses of water daily",
  15,
  HabitsID()
);
var habit6 = Habit(
  "Write",
  "Creativity",
  "Write for 20 minutes daily",
  5,
  HabitsID()
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
  HabitsID()
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

var arr = findObject(habits, "id", Number(getURLHabit()));
console.log(getURLHabit());
$(".card-title").append(`${arr[0].name}`);
$(".habit-category").append(`${arr[0].category}`);
$(".habit-description").append(`${arr[0].description}`);
$(".habit-achivedd").append(`${arr[0].goalAcheived}`);