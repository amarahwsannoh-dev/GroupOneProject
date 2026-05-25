
// ========================================
// MODAL FUNCTIONS
// These control the group info popup
// ========================================

// Get modal element
const infoModal = document.getElementById("infoModal");

// Open modal
function showModal(){
    if(infoModal){
        infoModal.style.display = "flex";
    }
}

// Close modal
function closeModal(){
    if(infoModal){
        infoModal.style.display = "none";
    }
}

// ========================================
// CONTACT FORM MODAL
// This handles form confirmation
// ========================================

// Get contact form
const form = document.getElementById("contactForm");

// Get confirm modal
const confirmModal = document.getElementById("confirmModal");

// Prevent instant form submission
if(form){

    form.addEventListener("submit", function(event){

        // Stop form from submitting immediately
        event.preventDefault();

        // Show confirmation modal
        confirmModal.style.display = "flex";
    });
}

// If user confirms submission
function confirmSubmit(){

    alert("Form submitted successfully!");

    confirmModal.style.display = "none";

    // Reset form after submit
    form.reset();
}

// If user cancels submission
function cancelSubmit(){
    confirmModal.style.display = "none";
}

// ========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ========================================

window.onclick = function(event){

    if(event.target == infoModal){
        infoModal.style.display = "none";
    }

    if(event.target == confirmModal){
        confirmModal.style.display = "none";
    }
}
