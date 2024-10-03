const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  // creating elements to show input box
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  // Adding classes, attributes and image to input box
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src =
    "https://icon-library.com/images/delete-icon-image/delete-icon-image-15.jpg";

  // Appending to the elements
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        saveNotes();
      };
    });
  }
});

// Save Notes to Local Storage
function saveNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// To Display Notes
function displayNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
displayNotes();

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
