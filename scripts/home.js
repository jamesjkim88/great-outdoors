/**
 * HOME PAGE JAVASCRIPT
 * Handles displaying featured trails on the homepage
 */

// Wait for page to load

document.addEventListener("DOMContentLoaded", function () {
  // Get the container where trail cards will go
  const container = document.getElementById("featuredTrailsContainer");
  // Only run if we're on a page with this container
  if (container) {
    console.log("Render featured trails on the home page please");
    // Get featured trails from our data
    const featuredTrails= getFeaturedTrails();
    // Loop through each featured trail and create a card for it, then add to the container
    featuredTrails.forEach((trail) => {
      const card = createTrailCard(trail);
      container.appendChild(card);
    });

    //Loop through and populate the featured Trails array with trails data
    
    /*

    // Get featured trails from our data
      // You should see a function called getFeaturedTrails,
      // that should get you featured trails for the homepage

    // Loop through each featured trail
    // Create a card for this trail

    // Add the card to the container

*/
    
    // If no featured trails found, show a message
    if (featuredTrails.length === 0) {
      container.innerHTML =
        '<p class="text-center text-stone-600">No featured trails available at this time.</p>';
    }
  }
});
