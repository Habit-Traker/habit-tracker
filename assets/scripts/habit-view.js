// console.log(getURLHabit());

var currentHabit = findObject(storedHabits, "id", Number(getURLHabit()))[0];

function displayHabit(habit) {
  $("#habit-name").text(habit.name);
  $("#habit-category").text(habit.category);
  $("#habit-description").text(habit.description);
  $("#goal").text(habit.goal);
  $("#streak").text(habit.streaks);

  progress = (100 * habit.streaks) / habit.goal;
  $("#green-ratio").css("flex", "0 0 " + progress + "%");
  $("#red-ratio").css("flex", "0 0 " + (100 - progress) + "%");

  if (progress === 0 || progress === 100) {
    $("#green-ratio.ratio").css("border-radius", "15px 15px 15px 15px");
    $("#red-ratio.ratio").css("border-radius", "15px 15px 15px 15px");
  }

  $achieved = $("#achieved");
}

displayHabit(currentHabit);

// each(currentHabit.progress, function (element) {
//   if (element.done === true) {
//     $(".habitcol-progress").append(`<div class="daily-state done"></div>`);
//   } else {
//     $(".habitcol-progress").append(`<div class="daily-state not-done"></div>`);
//   }
// });

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
