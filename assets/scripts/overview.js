function overView(storedHabits) {

    each(storedHabits, function (habit) {
    var $a = $(`<a href="habit.html?habit=${habit.id}" class="habit-progress"></a>`);

    $a.append(`<div class="habit-title">${habit.name}</div>`);
    var $progressBar = $("<div class='habit-progress-bar'></div>");
    each(habit.progress.slice(0, 10), function (day) {
      if (day.done == true) {
        $progressBar.append(`<div class="daily-state done"></div>`);
      } else {
        $progressBar.append(`<div class="daily-state not-done"></div>`);
      }
    });
    $a.append($progressBar);
    $("#habits-overview").append($a);
  });
}

overView(storedHabits);
