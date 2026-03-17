/**
 * TRAIL DETAIL PAGE JAVASCRIPT
 * Displays detailed information about a specific trail
 */

let trailId;

document.addEventListener("DOMContentLoaded", function () {
  // Get the trail ID from the URL
  // Example: trail-detail.html?id=tamolitch-blue-pool
  const urlParams = new URLSearchParams(window.location.search);
  trailId = urlParams.get("id");

  // Get the container where we'll put the trail info
  const contentContainer = document.getElementById("trailContent");

  // Check if we have a trail ID
  if (!trailId) {
    showError("No trail specified");
    return;
  }

  // Find the trail in our data
  const trail = getTrailById(trailId);

  // Check if trail was found
  if (!trail) {
    showError("Trail not found");
    return;
  }

  // Display the trail information
  displayTrailDetail(trail);

  /**
   * Display the full trail details
   */
  function displayTrailDetail(trail) {
    const difficultyClass = getDifficultyClass(trail.difficulty);
    const avgRating = calculateAverageRating(trail.reviews);

    contentContainer.innerHTML = `
            <!-- Hero Image -->
            <div style="position: relative; height: 400px; background-color: #d6d3d1;">
                <img src="${trail.imageUrl}" alt="${trail.name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>
                
                <!-- Trail Name Overlay -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; color: white; padding: 2rem;">
                    <div class="container">
                        <a href="trails.html" style="color: rgba(255,255,255,0.9); text-decoration: none; display: inline-block; margin-bottom: 1rem;">
                            ← Back to All Trails
                        </a>
                        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; color: white;">${trail.name}</h1>
                        <div class="flex items-center gap-2 text-lg">
                            <span>📍</span>
                            <span>${trail.location}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Main Content -->
            <div class="container section-lg">
                <div class="grid" style="grid-template-columns: 2fr 1fr; gap: 2rem;">
                    <!-- Left Column -->
                    <div>
                        <!-- Trail Overview -->
                        <section class="card mb-4">
                            <h2>Trail Overview</h2>
                            <p class="text-stone-700">${trail.description}</p>
                        </section>
                        
                        <!-- Safety Notes -->
                        <section class="card mb-4 bg-amber-50 border-amber">
                            <div class="flex items-start gap-2 mb-3">
                                <span style="font-size: 1.5rem;">⚠️</span>
                                <h2 class="m-0">Safety Information</h2>
                            </div>
                            <ul style="list-style: none; padding: 0;">
                                ${trail.safetyNotes
                                  .map(
                                    (note) => `
                                    <li class="flex items-start gap-2 mb-2">
                                        <span style="color: #b45309;">•</span>
                                        <span>${note}</span>
                                    </li>
                                `,
                                  )
                                  .join("")}
                            </ul>
                        </section>
                        
                        <!-- Stewardship Tips -->
                        <section class="card mb-4 bg-emerald-50 border-emerald">
                            <div class="flex items-start gap-2 mb-3">
                                <span style="font-size: 1.5rem;">🍃</span>
                                <h2 class="m-0">Leave No Trace</h2>
                            </div>
                            <p class="mb-3">Help us protect this beautiful trail for future generations:</p>
                            <ul style="list-style: none; padding: 0;">
                                ${trail.stewardshipTips
                                  .map(
                                    (tip) => `
                                    <li class="flex items-start gap-2 mb-2">
                                        <span style="color: #047857;">•</span>
                                        <span>${tip}</span>
                                    </li>
                                `,
                                  )
                                  .join("")}
                            </ul>
                        </section>
                        
                        <!-- Reviews -->
                        <section class="card">
                            <h2>Hiker Reviews</h2>
                            ${
                              trail.reviews.length > 0
                                ? `
                                <!-- Average Rating -->
                                <div class="flex items-center gap-3 pb-3 mb-3 border" style="border-bottom: 1px solid #e7e5e4;">
                                    <div class="text-xl font-bold">${avgRating.toFixed(1)}</div>
                                    <div>
                                        <div style="font-size: 1.25rem; margin-bottom: 0.25rem;">
                                            ${createStarRating(Math.round(avgRating))}
                                        </div>
                                        <div class="text-sm text-stone-600">
                                            Based on ${trail.reviews.length} review${trail.reviews.length !== 1 ? "s" : ""}
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Individual Reviews -->
                                ${trail.reviews
                                  .map(
                                    (review, index) => `
                                    <div class="pb-3 mb-3 ${index < trail.reviews.length - 1 ? "border" : ""}" style="${index < trail.reviews.length - 1 ? "border-bottom: 1px solid #e7e5e4;" : ""}">
                                        <div class="flex justify-between mb-2">
                                            <div>
                                                <div class="font-semibold">${review.author}</div>
                                                <div class="text-sm text-stone-500">${formatDate(review.date)}</div>
                                            </div>
                                            <div style="font-size: 1rem;">
                                                ${createStarRating(review.rating)}
                                            </div>
                                        </div>
                                        <p class="m-0">${review.comment}</p>
                                    </div>
                                `,
                                  )
                                  .join("")}
                            `
                                : `
                                <div class="text-center py-4 text-stone-500">
                                    <div style="font-size: 3rem; margin-bottom: 1rem;">👥</div>
                                    <p>No reviews yet. Be the first to share your experience!</p>
                                </div>
                            `
                            }
                            
                            <!-- Future review form placeholder -->
                            <div class="mt-4 p-3 bg-stone-100 rounded text-center">
                                <p class="text-sm text-stone-600 m-0">
                                    Review submission feature coming soon. 
                                    <a href="community.html" class="text-emerald-700">Join our community</a> to share your experiences!
                                </p>
                            </div>
                        </section>
                    </div>
                    
                    <!-- Right Column - Trail Stats Sidebar -->
                    <div>
                        <div class="card" style="position: sticky; top: 100px;">
                            <h3>Trail Stats</h3>
                            
                            <!-- Difficulty -->
                            <div class="mb-3">
                                <div class="text-sm text-stone-500 mb-2">Difficulty Level</div>
                                <span class="badge ${difficultyClass}">${trail.difficulty}</span>
                            </div>
                            
                            <!-- Stats -->
                            <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
                                <!-- Distance -->
                                <div class="flex items-start gap-2">
                                    <span style="font-size: 1.25rem;">📏</span>
                                    <div>
                                        <div class="text-sm text-stone-500">Distance</div>
                                        <div class="font-semibold">${trail.distance} miles</div>
                                    </div>
                                </div>
                                
                                <!-- Elevation -->
                                <div class="flex items-start gap-2">
                                    <span style="font-size: 1.25rem;">📈</span>
                                    <div>
                                        <div class="text-sm text-stone-500">Elevation Gain</div>
                                        <div class="font-semibold">${trail.elevationGain} feet</div>
                                    </div>
                                </div>
                                
                                <!-- Season -->
                                <div class="flex items-start gap-2">
                                    <span style="font-size: 1.25rem;">📅</span>
                                    <div>
                                        <div class="text-sm text-stone-500">Best Season</div>
                                        <div class="font-semibold">${trail.bestSeason}</div>
                                    </div>
                                </div>
                                
                                <!-- Region -->
                                <div class="flex items-start gap-2">
                                    <span style="font-size: 1.25rem;">📍</span>
                                    <div>
                                        <div class="text-sm text-stone-500">Region</div>
                                        <div class="font-semibold">${trail.region}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Call to Action Buttons -->
                            <div style="border-top: 1px solid #e7e5e4; padding-top: 1.5rem; margin: 1.5rem;">
                                <a href="safety.html" class="btn btn-primary btn-block mb-2">
                                    Review Safety Tips
                                </a>
                                <a href="community.html" class="btn btn-secondary btn-block mb-2">
                                    Join a Guided Hike
                                </a>
                                <a id="printBtn" class="btn btn-secondary btn-block">
                                    Download page as PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  /**
   * Show error message
   */
  function showError(message) {
    contentContainer.innerHTML = `
            <div class="container text-center section-lg">
                <div style="font-size: 5rem; margin-bottom: 1rem;">🏔️</div>
                <h1 class="mb-3">Trail Not Found</h1>
                <p class="text-stone-600 mb-4">${message}</p>
                <a href="trails.html" class="btn btn-primary">
                    ← Back to Trail Directory
                </a>
            </div>
        `;
  }

  /**
   * Calculate average rating from reviews
   */
  function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((total, review) => total + review.rating, 0);
    return sum / reviews.length;
  }

  document.dispatchEvent(new Event("trailContentReady"));
});

