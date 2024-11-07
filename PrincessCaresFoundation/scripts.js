// Function to set the current date on page load
window.onload = function() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    document.getElementById('dateStamp').innerText = formattedDate;
}

// Function to show the lightbox with the clicked image
function showLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc; // Set the source of the lightbox image
    lightbox.style.display = 'flex'; 
}

// Function to close the lightbox when clicked
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Function to clear field
function clearField(element) {
    element.value = "";
}

// Function for validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert('All fields are required.');
        return false;
    }
    return true;
}
