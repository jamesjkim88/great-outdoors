/**
 * COMMUNITY PAGE JAVASCRIPT
 * Handles form submissions for guided hike registration and newsletter signup
 */

document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // GUIDED HIKE REGISTRATION FORM
  // ========================================

  const hikeForm = document.getElementById("hikeRegistrationForm");
  const hikeSuccess = document.getElementById("hikeFormSuccess");

  if (hikeForm) {
    hikeForm.addEventListener("submit", function (e) {
      // Prevent the form from actually submitting (would refresh the page)
      e.preventDefault();

      // Get form values
      const formData = {
        name: document.getElementById("hikeName").value,
        email: document.getElementById("hikeEmail").value,
        phone: document.getElementById("hikePhone").value,
        participants: document.getElementById("hikeParticipants").value,
        selectedHike: document.getElementById("selectedHike").value,
        experience: document.getElementById("hikeExperience").value,
      };

      // Log to console (in a real app, this would send to a server)
      console.log("Guided hike registration:", formData);

      // Show success message
      hikeSuccess.style.display = "block";

      // Scroll to success message
      hikeSuccess.scrollIntoView({ behavior: "smooth", block: "center" });

      // Reset form after 3 seconds
      setTimeout(function () {
        hikeSuccess.style.display = "none";
        hikeForm.reset();
      }, 3000);
    });
  }

  // ========================================
  // NEWSLETTER SIGNUP FORM
  // ========================================

  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterSuccess = document.getElementById("newsletterSuccess");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      // Prevent form submission
      e.preventDefault();

      // Get email value
      const email = document.getElementById("newsletterEmail").value;

      // Log to console (in a real app, this would send to a server)
      console.log("Newsletter signup:", email);

      // Show success message
      newsletterSuccess.style.display = "block";

      // Reset form after 3 seconds
      setTimeout(function () {
        newsletterSuccess.style.display = "none";
        newsletterForm.reset();
      }, 3000);
    });
  }
});
