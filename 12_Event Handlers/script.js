// ✅ Inline Event Handler (for box-1)
function inlineHandler() {
    alert("Box 1 clicked - Handled using INLINE event");
}

// ✅ Property-Based Event Handler (for box-2)
const box2 = document.getElementById("box-2");
box2.onclick = function () {
    box2.style.backgroundColor = "green";
    alert("Box 2 clicked - Handled using PROPERTY-based event");
};

// ✅ addEventListener Method (for box-3)
const box3 = document.getElementById("box-3");
box3.addEventListener("click", function () {
    box3.innerHTML = "Clicked!";
    box3.style.backgroundColor = "coral";
    alert("Box 3 clicked - Handled using addEventListener");
});

// ✅ addEventListener with 'mouseover' event (for box-4)
const box4 = document.getElementById("box-4");
box4.addEventListener("mouseover", function () {
    box4.style.backgroundColor = "gold";
    box4.innerText = "Hovered!";
});
