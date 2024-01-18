const add_task_btn = document.querySelector(".add-task-btn");
const popup_menu = document.querySelector(".popup");
const close_form = document.querySelector(".close-form");
const form = document.querySelector("#popup-form");

function popup() {
  if (popup_menu.style.visibility == "hidden")
    popup_menu.style.visibility = "visible";
  else popup_menu.style.visibility = "hidden";
}

add_task_btn.addEventListener("click", popup);
close_form.addEventListener("click", popup);

// A Class to store the inputs
class Tasks {
  constructor(title, due_date, url, note, image) {
    this.title = title;
    this.due_date = due_date;
    this.url = url;
    this.note = note;
    this.image = image;
  }
}

//UI Class: Handle UI Tasks
class UI {
  static displayTask() {
    const StoredTasks = [
      {
        title: "Title 1",
        due_date: "2023-10-9",
        url: "google.com",
        note: "lorem lorem lorem lorem",
        image: "./image.png",
      },
      {
        title: "Title 2",
        due_date: "2023-11-9",
        url: "google1.com",
        note: "lorem lorem lorem lorem",
        image: "./image.png",
      },
    ];
    const tasks = StoredTasks;
    tasks.forEach((task) => UI.addTask(task));
  }
  static addTask(task) {
    const card_section = document.querySelector("#card-section");
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <img src="${task.image}" alt="image" /> 
          <div class="card-txt-content">
            <p class="card-title">${task.title}</p>
            <p class="card-due-date">${task.due_date}</p>
            <p class="card-note">
              ${task.note}
            </p>
            <button class="card-open-btn" hre>OPEN</button>
            <button class="card-close-btn">CLOSE</button>
      `;
    card_section.appendChild(card);
  }
}

// Store Class: Handles Storage

//Event: Display Book
document.addEventListener("DOMContentLoaded", UI.displayTask);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#form-title").value;
  const due_date = document.querySelector("#due-date").value;
  const url = document.querySelector("#url").value;
  const note = document.querySelector("#note").value;
  const imageURL = document.querySelector("#image");
  const image = URL.createObjectURL(imageURL.files[0]);

  const task = new Tasks(title, due_date, url, note, image);
  console.log(task);
  console.log(image);

  UI.addTask(task);
});
// Event: Remove book
