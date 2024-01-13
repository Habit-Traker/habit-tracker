function overView(storedHabits) {

    each(storedHabits, function (habit) {
    var $li = $(`<li class="habit-progress"></li>`);

    $li.append(`<div class="habit-title">${habit.name}</div>`);
    var $progressBar = $("<div class='habit-progress-bar'></div>");
    each(habit.progress.slice(0, 10), function (day) {
      if (day.done == true) {
        $progressBar.append(`<div class="daily-state done"></div>`);
      } else {
        $progressBar.append(`<div class="daily-state not-done"></div>`);
      }
    });
    $li.append($progressBar);
    $("#habits-overview").append($li);
  });
}

overView(storedHabits);
