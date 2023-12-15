// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  var domain = "; domain=point.com"; // will be point.com
  document.cookie = name + "=" + (value || "") + expires + domain + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to check if the acknowledged cookie exists
function checkCookie() {
  var acknowledged = getCookie("acknowledged");
  if (acknowledged) {
    // If the acknowledged cookie exists, hide the cookie wrapper
    document.getElementById("cookie-wrapper").style.display = "none";
  } else {
    // If the acknowledged cookie does not exist, add the show class
    document.getElementById("cookie-wrapper").classList.add("show");
  }
}

// Event listener for the acknowledge button
document.addEventListener("DOMContentLoaded", function () {
  var acknowledgeBtn = document.getElementById("cookie-acknowledge");
  acknowledgeBtn.addEventListener("click", function () {
    setCookie("acknowledged", "true", 7); // Set the cookie for 7 days
    document.getElementById("cookie-wrapper").style.display = "none";
  });

  checkCookie(); // Check the cookie when the DOM is loaded
});
