/**
 * MAIN JAVASCRIPT FILE
 * Contains functionality that's used across multiple pages
 * - Mobile navigation menu
 * - Current year in footer
 * - Active navigation link highlighting
 */

// Wait for the page to fully load before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // MOBILE NAVIGATION TOGGLE
  // ========================================

  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  // Check if elements exist (they might not on all pages)
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      // Toggle the 'active' class to show/hide menu
      navMenu.classList.toggle("active");

      // Change icon between hamburger and X
      if (navMenu.classList.contains("active")) {
        navToggle.textContent = "✕";
      } else {
        navToggle.textContent = "☰";
      }
    });
  }

  // ========================================
  // SET CURRENT YEAR IN FOOTER
  // ========================================

  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ========================================
  // HIGHLIGHT ACTIVE NAVIGATION LINK
  // ========================================

  // Get current page filename (e.g., "index.html" or "trails.html")
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Get all navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  // Loop through each link
  navLinks.forEach((link) => {
    // Remove 'active' class from all links first
    link.classList.remove("active");

    // Get the href attribute (e.g., "trails.html")
    const linkPage = link.getAttribute("href");

    // If the link matches current page, add 'active' class
    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    // Special case for homepage
    if (currentPage === "index.html" && linkPage === "index.html") {
      link.classList.add("active");
    }
  });
});

/**
 * HELPER FUNCTION: Create a trail card element
 * This is used on both homepage and trails page
 *
 * @param {Object} trail - The trail data object
 * @returns {HTMLElement} - The created card element
 */
function createTrailCard(trail) {
  // Create the main card container
  const card = document.createElement("article");
  card.className = "card";
  card.style.padding = "0";
  card.style.overflow = "hidden";

  // Get difficulty badge color
  const difficultyClass = getDifficultyClass(trail.difficulty);

  // Get crowd level info
  const crowdInfo = getCrowdInfo(trail.crowdLevel);

  // Build the card HTML
  card.innerHTML = `
        <!-- Trail Image -->
        <div style="position: relative; height: 12rem; overflow: hidden;">
            <img src="${trail.imageUrl}" alt="${trail.name}" style="width: 100%; height: 100%; object-fit: cover;">
            
            <!-- Difficulty Badge -->
            <div style="position: absolute; top: 0.75rem; right: 0.75rem;">
                <span class="badge ${difficultyClass}">${trail.difficulty}</span>
            </div>
            
            <!-- Hidden Gem Badge (only for low crowd trails) -->
            ${
              trail.crowdLevel === "Low"
                ? `
                <div style="position: absolute; top: 0.75rem; left: 0.75rem;">
                    <span class="badge badge-emerald">Hidden Gem</span>
                </div>
            `
                : ""
            }
        </div>
        
        <!-- Card Content -->
        <div style="padding: 1.5rem;">
            <!-- Trail Name -->
            <h3 class="card-title">
                <a href="../pages/trail-detail.html?id=${trail.id}" style="color: inherit; text-decoration: none;">
                    ${trail.name}
                </a>
            </h3>
            
            <!-- Location -->
            <div class="flex items-center gap-1 mb-3 text-sm text-stone-600">
                <span>📍</span>
                <span>${trail.location}</span>
            </div>
            
            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-2 mb-3">
                <!-- Distance -->
                <div class="flex items-start gap-1">
                    <span style="color: #047857;">📏</span>
                    <div>
                        <div class="text-xs text-stone-500">Distance</div>
                        <div class="font-semibold">${trail.distance} mi</div>
                    </div>
                </div>
                
                <!-- Elevation -->
                <div class="flex items-start gap-1">
                    <span style="color: #047857;">📈</span>
                    <div>
                        <div class="text-xs text-stone-500">Elevation</div>
                        <div class="font-semibold">${trail.elevationGain} ft</div>
                    </div>
                </div>
            </div>
            
            <!-- Description -->
            <p class="text-sm text-stone-600 mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                ${trail.description}
            </p>
            
            <!-- Crowd Level -->
            <div class="text-sm ${crowdInfo.class} flex items-center gap-1 mb-3">
                <span>🏔️</span>
                <span>${crowdInfo.text}</span>
            </div>
            
            <!-- View Details Button -->
            <a href="../pages/trail-detail.html?id=${trail.id}" class="btn btn-primary btn-block">
                View Trail Details
            </a>
        </div>
    `;

  return card;
}

/**
 * HELPER FUNCTION: Format a date string
 *
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} - Formatted date like "August 15, 2024"
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

/**
 * HELPER FUNCTION: Create star rating display
 *
 * @param {number} rating - Rating from 1-5
 * @returns {string} - HTML string of star icons
 */
function createStarRating(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "⭐";
    } else {
      stars += "☆";
    }
  }
  return stars;
}
