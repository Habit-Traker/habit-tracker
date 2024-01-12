var Habit = function (name, category, description, goal) {
  var instance = {};
  instance.name = name;
  instance.description = description;
  instance.goal = goal;
  instance.category = category;
  instance.progress = [];
  instance.streaks = 0; // How many days in a row
  instance.goalAcheived = false;

  // Methods
  instance.completeDay = completeDay;

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
