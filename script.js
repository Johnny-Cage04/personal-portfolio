// ✅ Day 1: Setup
console.log("JavaScript is linked correctly!");

// ✅ Day 2: DOM Manipulation
// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ✅ Day 3: Event Handling
// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Load dark mode preference on page load
window.onload = function() {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
};

// ✅ Day 4: Form Validation
function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const feedback = document.getElementById("form-feedback");

  if (!email.includes("@")) {
    feedback.textContent = "⚠️ Please enter a valid email address.";
    feedback.style.color = "red";
    return false;
  }

  if (message.length < 10) {
    feedback.textContent = "⚠️ Message must be at least 10 characters.";
    feedback.style.color = "red";
    return false;
  }

  feedback.textContent = "✅ Message sent successfully!";
  feedback.style.color = "green";
  return true;
}

// ✅ Day 5: Interactive Features
// Example: Simple To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = () => li.remove(); // click to remove task
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
