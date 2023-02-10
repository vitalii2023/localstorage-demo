//function to set the themeof our website
function setTheme() {
  if (
    localStorage.getItem("theme") === "light" ||
    localStorage.getItem("theme") === null
  ) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", setTheme);

// change the theme from dark to light and vice versa, depending on what it is currently set to
//this should happen when I click the button

// function to get the current theme of our website
function getTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}

getTheme();

// localStorage.setItem(key, value)
// creates or updates  a key; value pair in localStorage

// localStorage.getItem(key)
// ritrieves the value of the item with the key passed into the parrameter

// localStorage.removeItem(key)
// deletes the value of the item with the key passed into the parameter

//localStorage.clear()
//boom (deletes all of the item)
