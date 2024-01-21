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
        due_date: "2024-10-9",
        url: "http://google.com",
        note: "lorem lorem lorem lorem",
        image: "./image.png",
      },
      {
        title: "Title 2",
        due_date: "2024-01-9",
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

    // Calculate time difference
    let ddate = new Date(task.due_date).getTime();
    let today = new Date().getTime();
    let difference = ddate - today;

    // Convert time difference to days, hours, minutes, and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Create countdown element
    const countdownElement = document.createElement("p");
    countdownElement.classList.add("card-due-date");
    countdownElement.textContent = `Due in ${days}d ${hours}h ${minutes}m ${seconds}s`;

    card.innerHTML = `
          <img src="${task.image}" alt="image" /> 
          <div class="card-txt-content">
            <p class="card-title">${task.title}</p>
            <p class="card-note">
              ${task.note}
            </p>
            <p class="card-url">
              ${task.url}
            </p>
            
      `;
    card.appendChild(countdownElement);
    const card2 = document.createElement("div");
    card2.innerHTML = `
    <button class="card-open-btn" hre>OPEN</button>
    <button class="card-close-btn">CLOSE</button>
    `;
    card.appendChild(card2);

    card_section.appendChild(card);

    // Update countdown every second
    setInterval(() => {
      difference -= 1000;
      days = Math.floor(Math.abs(difference) / (1000 * 60 * 60 * 24));
      hours = Math.floor(
        (Math.abs(difference) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes = Math.floor(
        (Math.abs(difference) % (1000 * 60 * 60)) / (1000 * 60)
      );
      seconds = Math.floor((Math.abs(difference) % (1000 * 60)) / 1000);

      // Update countdown text
      if (difference > 0)
        countdownElement.textContent = `Due in ${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
      else countdownElement.textContent = `Expired`;
    }, 1000);
  }

  static eventTask(el) {
    if (el.classList.contains("card-close-btn")) {
      el.parentElement.parentElement.remove();
    } else if (el.classList.contains("card-open-btn")) {
      const url =
        el.parentElement.parentElement.querySelector(".card-url").textContent;
      console.log(url);
      window.open(url, "_blank").focus();
    }
  }

  static clearFields() {
    document.querySelector("#form-title").value = "";
    document.querySelector("#due-date").value = "";
    document.querySelector("#url").value = "";
    document.querySelector("#note").value = "";
    document.querySelector("#image").value = "";
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
  // console.log(url);

  UI.addTask(task);

  //clear fields
  UI.clearFields();

  // close popup
  popup();
});
// Event: Remove task
document.querySelector("#card-section").addEventListener("click", (e) => {
  UI.eventTask(e.target);
});

//Event : open the link
