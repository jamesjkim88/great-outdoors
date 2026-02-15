/**
 * TRAILS PAGE JAVASCRIPT
 * Handles filtering, searching, and displaying all trails
 */

// Current filter values
let currentFilters = {
  region: "All",
  difficulty: "All",
  search: "",
};

// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to all the elements we need
  const trailsContainer = document.getElementById("trailsContainer");
  const searchInput = document.getElementById("searchInput");
  const regionFilter = document.getElementById("regionFilter");
  const difficultyFilter = document.getElementById("difficultyFilter");
  const resultsCount = document.getElementById("resultsCount");
  const noResults = document.getElementById("noResults");
  const clearFiltersBtn = document.getElementById("clearFilters");

  // Only run if we're on the trails page
  if (!trailsContainer) return;

  // ========================================
  // DISPLAY TRAILS FUNCTION
  // ========================================

  function displayTrails() {
    // Start with all trails
    let filteredTrails = [...trails];

    // Apply region filter
    if (currentFilters.region !== "All") {
      filteredTrails = filteredTrails.filter(
        (trail) => trail.region === currentFilters.region,
      );
    }

    // Apply difficulty filter
    if (currentFilters.difficulty !== "All") {
      filteredTrails = filteredTrails.filter(
        (trail) => trail.difficulty === currentFilters.difficulty,
      );
    }

    // Apply search filter
    if (currentFilters.search) {
      const query = currentFilters.search.toLowerCase();
      filteredTrails = filteredTrails.filter((trail) => {
        return (
          trail.name.toLowerCase().includes(query) ||
          trail.location.toLowerCase().includes(query) ||
          trail.description.toLowerCase().includes(query)
        );
      });
    }

    // Clear the container
    trailsContainer.innerHTML = "";

    // Update results count
    resultsCount.textContent = `Showing ${filteredTrails.length} of ${trails.length} trails`;

    // Show trails or "no results" message
    if (filteredTrails.length > 0) {
      // Hide no results message
      noResults.style.display = "none";

      // Create and add each trail card
      filteredTrails.forEach((trail) => {
        const card = createTrailCard(trail);
        trailsContainer.appendChild(card);
      });
    } else {
      // Show no results message
      noResults.style.display = "block";
    }
  }

  // ========================================
  // EVENT LISTENERS
  // ========================================

  // Search input
    searchInput.addEventListener("input", () => {
      // Change Search filter
      currentFilters.search = searchInput.value;

      // Refresh display
      displayTrails()
    })

  // Region filter
    regionFilter.addEventListener("change", () => {
      // Change Region filter
      currentFilters.region = regionFilter.value;

      // Refresh display
      displayTrails()
    })

  // Difficulty filter
    difficultyFilter.addEventListener("change", () => {
      // Change Difficulty filter
      difficultyFilter.region = regionFilter.value;

      // Refresh display
      displayTrails();
    })


  // Clear filters button
    clearFiltersBtn.addEventListener("click", () => {
      // Reset all filters
      currentFilters.region = "All";
      currentFilters.difficulty = "All";
      currentFilters.search = "";

      // Reset form elements
      searchInput.value = "";

      // Refresh display
      displayTrails();
    })


  // ========================================
  // INITIAL DISPLAY
  // ========================================

  // Display all trails when page loads
  displayTrails();
});
