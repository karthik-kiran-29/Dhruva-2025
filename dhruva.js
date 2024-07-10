//code for changing color

let element = document.getElementById("home");
element.addEventListener("mouseover", function() {
    changeColor(this);
});

function Randomcolor() {
    let colors = ["red", "green", "blue"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColor(element) {
    element.style.color = Randomcolor();
}

// code for visibility

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=> observer.observe(el));