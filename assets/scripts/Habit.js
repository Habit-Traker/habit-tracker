var storedHabits;
var lastHabitId;

if (localStorage.getItem("storedHabits")) {
  storedHabits = JSON.parse(localStorage.getItem("storedHabits"));
} else {
  storedHabits = [];
}

if (localStorage.getItem("lastHabitId")) {
  lastHabitId = Number(localStorage.getItem("lastHabitId"));
} else {
  lastHabitId = 0;
}

var HabitsID = generateID(lastHabitId);

var Habit = function (
  name,
  category,
  description,
  goal,
  id,
  streaks,
  goalAcheived,
  progress
) {
  var instance = {};
  if (id === undefined) {
    instance.id = HabitsID();
    localStorage.setItem("lastHabitId", instance.id);
  } else {
    instance.id = id;
  }

  instance.name = name;
  instance.description = description;
  instance.goal = goal;
  instance.category = category;

  if (streaks === undefined) {
    instance.streaks = 0; // How many days in a row
  } else {
    instance.streaks = streaks; // How many days in a row
  }
  if (goalAcheived === undefined) {
    instance.goalAcheived = false;
  } else {
    instance.goalAcheived = goalAcheived;
  }

  if (progress === undefined) {
    instance.progress = [];
  } else {
    instance.progress = progress;
  }

  // Methods
  instance.completeDay = completeDay;
  instance.generateHabitCard = generateHabitCard;

  return instance;
};

var completeDay = function (note, done, rate) {
  this.progress.push({
    note: note,
    done: done,
    rate: rate,
  });

  if (done) {
    this.streaks++;
  } else {
    this.streaks = 0;
  }
};

var generateHabitCard = function () {
  console.log(this);
  var $div = $("<div></div>");
  var $card = $("<a></a>");
  $card.attr({
    class: "card habit-card",
    href: "habit.html?habit=" + this.id,
  });
  var $title = $div
    .clone()
    .attr({
      class: "card-title",
    })
    .text(this.name);
  $card.append($title);

  $div
    .attr({
      class: "card-body",
    })
    .html(`<p>${this.description}</p>`);

  $card.append($div);
  return $card;
};

// retrieve stored Habits
storedHabits = map(storedHabits, function (habit) {
  return Habit(
    habit.name,
    habit.category,
    habit.description,
    habit.goal,
    habit.id,
    habit.streaks,
    habit.goalAcheived,
    habit.progress
  );
});

