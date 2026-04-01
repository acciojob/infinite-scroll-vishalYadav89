//your code here!
const list = document.getElementById("infi-list");

let count = 1;

// 🔹 Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item " + count++;
    list.appendChild(li);
  }
}

// 🔹 Add initial 10 items
addItems(10);

// 🔹 Scroll Event
window.addEventListener("scroll", () => {
  // total height of page
  const scrollHeight = document.documentElement.scrollHeight;

  // current scroll position + viewport height
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  // 🔥 Check if reached bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2);
  }
});

