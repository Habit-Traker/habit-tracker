// HardCoded User Demo
localStorage.setItem("username", 'habitUser');
localStorage.setItem("pass", '12345678');

var $loginForm = $("#loginForm");
var $diaryContainer = $("#diaryContainer");
var i = 1;
hideElement($diaryContainer);
function addEntry() {
  console.log(1);
  var $entryInput = $("#entry-input")
  var $entriesContainer = $("#entries-container");
  if ($entryInput !== "") {
    $entriesContainer.append(
      `<div>
        <h3>Day${i}:</h3>
        <p>${$entryInput.val()}</p>
      </div>`
    );
    i++;
    $entryInput.val("");
  }
}

$loginForm.submit(function (event) {
  event.preventDefault();
  var $username = $("#username").val();
  var $password = $("#password").val();
  console.log($username);
  console.log($password);

  loginUser($username, $password);
});

function loginUser(username, password) {
  var utilisateur = localStorage.getItem("username");
  var pass = localStorage.getItem("pass");

  if (utilisateur == username && pass == password) {
    showDiary();
  } else {
    alert("Login failed. Please check IDENTIFICATION.");
  }
}

function showDiary() {
  hideElement($loginForm);
  $diaryContainer.show();
}

function hideElement(element) {
  element.hide();
}
