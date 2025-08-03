// 1. Click Event → Updates content of box1 when button1 is clicked
document.getElementById("btn1").addEventListener("click", () => {
  // Selects the box with class 'box1' and changes its text content
  document.querySelector(".box1").textContent = "Jai Shree Ram";
});

// 2. Mouseover Event → Updates content of box2 when mouse hovers over button2
document.getElementById("btn2").addEventListener("mouseover", () => {
  // Selects the box with class 'box2' and changes its text content
  document.querySelector(".box2").textContent = "Radhe Radhe";
});

// 3. Double Click Event → Updates content of box3 when button3 is double-clicked
document.getElementById("btn3").addEventListener("dblclick", () => {
  // Selects the box with class 'box3' and changes its text content
  document.querySelector(".box3").textContent = "Shiv Shambhu";
});

// 4. Mouse Out Event → Updates content of box4 when the mouse leaves button4
document.getElementById("btn4").addEventListener("mouseout", () => {
  // Selects the box with class 'box4' and changes its text content
  document.querySelector(".box4").textContent = "Jai Hanuman";
});

