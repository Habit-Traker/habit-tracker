// render habits function
var renderHabits = function (habits) {
  $HabitsGrid.empty();

  each(habits, function (habit) {
    $HabitsGrid.append(habit.generateHabitCard());
  });
};

var $name = $("#name");
var $category = $("#category");
var $description = $("#description");
var $goal = $("#goal");
var $submitHabit = $("#add-habit");
var $HabitsGrid = $(".habits-grid");

renderHabits(storedHabits);


$submitHabit.on("click", function () {
  var validInputs = $name.val() !== "" && $goal.val() !== "";
  if (validInputs) {
    var habit = Habit(
      $name.val(),
      $category.val(),
      $description.val(),
      $goal.val()
    );
    storedHabits.unshift(habit);
    // localStorage.removeItem("storedHabits");
    localStorage.setItem("storedHabits", JSON.stringify(storedHabits));
    console.log(habit);
  } else {
    alert("Invalid Inputs");
  }
});

