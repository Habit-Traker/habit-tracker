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

var Habit = function (name, category, description, goal, id) {
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
  instance.progress = [];
  instance.streaks = 0; // How many days in a row
  instance.goalAcheived = false;

  // Methods
  instance.completeDay = completeDay;
  // instance.renderHabitCard = renderHabitCard;

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

// var renderAccount = function () {
//   console.log(this);
//   var $div = $("<div></div>");
//   var $sectionTitle = $div.clone().attr({
//     class: "section-title",
//   });
//   var $h1 = $("<h1></h1>").html(this.name + ": <span class=\"money-value\">" + this.balance + "</span>TND");
//   $sectionTitle.append($h1);

//   var $sectionBody = $div.clone().attr({
//     class: "section-body",
//   });
//   $div.attr({
//     class: "column-section",
//   });
//   $table = generateTableWithHead(
//     "Type",
//     "From",
//     "To",
//     "Category",
//     "Ammount",
//     "Fee"
//   );
//   $table.append($tbody);

//   $sectionBody.append($table);
//   $div.append($sectionTitle);
//   $div.append($sectionBody);
//   $content.append($div);
// };
