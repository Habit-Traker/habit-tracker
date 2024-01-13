// console.log(getURLHabit());

var currentHabit = findObject(storedHabits, "id", Number(getURLHabit()))[0];

function displayHabit(habit) {
  $("#habit-name").text(habit.name);
  $("#habit-category")
    .text(habit.category)
    .css({ color: "var(--primary)", "font-size": "22px" });
  $("#habit-description").text(habit.description);
  $("#goal").text(habit.goal);
  $("#streak")
    .text(habit.streaks)
    .css({ color: "var(--primary)", "font-size": "28px" });

  progress = (100 * habit.streaks) / habit.goal;
  $("#green-ratio").css("flex", "0 0 " + progress + "%");
  $("#red-ratio").css("flex", "0 0 " + (100 - progress) + "%");

  $("#progress")
    .text(progress.toFixed(2) + "%")
    .css({ color: "var(--primary)", "font-size": "25px" });

  if (progress === 0 || progress === 100) {
    $("#green-ratio.ratio").css("border-radius", "15px 15px 15px 15px");
    $("#red-ratio.ratio").css("border-radius", "15px 15px 15px 15px");
  }
  var avg = avgRating(habit.progress);
  $("#habit-avg-rating")
    .text(`${avg.toFixed(2)}`)
    .css({ color: "var(--primary)", "font-size": "25px" });

  $("#achieved");
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
var $done = $("input[name='habit-done']");
var $submitday = $("#add-day");

$submitday.on("click", function () {
  console.log($("#done").is(":checked"));

  var validInputs = $('input[name="habit-rating"]:checked').val() !== undefined;
  if (validInputs) {
    currentHabit.completeDay(
      $note.val(),
      $("#done").is(":checked"),
      $('input[name="habit-rating"]:checked').val()
    );
  } else {
    alert(
      "you should  provide if  the habit '" +
        currentHabit.name +
        " of the day is achived or not with it s rating for static"
    );
  }
  localStorage.setItem("storedHabits", JSON.stringify(storedHabits));
  displayHabit(currentHabit);
});

function avgRating(array) {
  return reduce(
    array,
    function (acc, element) {
      return (acc = acc + element.rate / array.length);
    },
    0
  );
}
// location.reload();
