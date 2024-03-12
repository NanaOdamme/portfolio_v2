// for about me paragraph
function toggleReadMore() {
    const hiddenText = document.querySelector('.hidden');
    const readMoreButton = document.querySelector('.read-more-button');

    // Toggle the class to reveal/hide the full text
    hiddenText.classList.toggle('full-text');

    // Toggle the button text
    readMoreButton.textContent = hiddenText.classList.contains('full-text') ? 'Read Less' : 'Read More';
}

// Show the "Read More" button once the page is loaded
window.onload = function () {
    const readMoreButton = document.querySelector('.read-more-button');
    readMoreButton.style.display = 'inline-block';
};
// animation effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//popup
function showPopup(col) {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content-inner");

    // Clear previous content
    popupContent.innerHTML = "";

    // Clone the content of the clicked column
    var clone = col.cloneNode(true);
    popupContent.appendChild(clone);

    // Show the popup
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
