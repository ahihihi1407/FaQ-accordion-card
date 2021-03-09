var acc = document.getElementsByClassName("accordion-header");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", questionClicked);
}

function questionClicked() {
    clickedElement = this;
    toggleQuestion(clickedElement);
    rotateArrow(clickedElement);
}

function toggleQuestion(clickedElement) {
    clickedElement.classList.toggle("active-question");
    var panel = clickedElement.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

function rotateArrow(clickedElement) {
    var arrow = clickedElement.querySelector('.arrow');
    arrow.classList.toggle("rotate-180");
}
