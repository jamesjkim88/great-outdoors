/**
 * TRAIL DATA
 * This file contains all the trail information
 * Students can add more trails by following the same format
 *
 * STRUCTURE:
 * - Each trail is an object with properties like name, location, difficulty, etc.
 * - All trails are stored in an array called 'trails'
 * 
 * Note: all trails have been cross-referenced and up-to-date with https://www.alltrails.com/
 */

// Array of all trails
const trails = [
  {
    id: "tamolitch-blue-pool",
    name: "Tamolitch Blue Pool",
    location: "McKenzie River, Oregon",
    region: "Oregon",
    difficulty: "Moderate",
    distance: 4.1,
    distanceBucket: "Low",
    elevationGain: 351,
    elevationBucket: "Low",
    description:
      "A stunning turquoise pool where the McKenzie River emerges from underground. This lesser-known gem offers incredible photo opportunities and a peaceful hiking experience.",
    bestSeason: [
      "Late Spring to Early Fall (May - October)",
      "Spring",
      "Summer",
      "Fall"
    ],
    safetyNotes: [
      "Trail can be icy in winter months",
      "No swimming - water is extremely cold (38°F year-round)",
      "Bring traction devices if visiting in shoulder seasons",
    ],
    stewardshipTips: [
      "Stay on designated trails to prevent erosion",
      "Pack out all trash - leave no trace",
      "Respect wildlife and maintain distance",
    ],
    featured: true,
    crowdLevel: "Low",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    reviews: [
      {
        id: "r1",
        author: "Sarah M.",
        rating: 5,
        date: "2024-08-15",
        comment:
          "Absolutely breathtaking! The blue pool is even more stunning in person. Easy hike suitable for families.",
      },
      {
        id: "r2",
        author: "Mike L.",
        rating: 5,
        date: "2024-07-22",
        comment: "Great trail with minimal crowds. The water color is unreal!",
      },
    ],
  },
  {
    id: "lake-22",
    name: "Lake 22",
    location: "Mountain Loop Highway, Washington",
    region: "Washington",
    difficulty: "Moderate",
    distance: 6,
    distanceBucket: "Medium",
    elevationGain: 1446,
    elevationBucket: "Medium",
    description:
      "A beautiful alpine lake surrounded by old-growth forest and dramatic cliffs. This trail features waterfalls and offers a rewarding destination without excessive crowds.",
    bestSeason: [
      "Summer to Early Fall (July - September)",
      "Summer"
    ],
    safetyNotes: [
      "Snow typically lingers until late June",
      "Trail can be muddy and slippery when wet",
      "Bear country - make noise and carry bear spray",
      "Check avalanche conditions in spring",
    ],
    stewardshipTips: [
      "Use designated campsites if staying overnight",
      "Filter water before drinking",
      "Keep noise levels down to preserve wilderness experience",
    ],
    featured: true,
    crowdLevel: "Medium",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    reviews: [
      {
        id: "r3",
        author: "Emily R.",
        rating: 4,
        date: "2024-08-30",
        comment:
          "Beautiful lake! Trail is well-maintained but gets steep in sections. Worth the effort.",
      },
    ],
  },
  {
    id: "iron-mountain",
    name: "Iron Mountain",
    location: "Willamette National Forest, Oregon",
    region: "Oregon",
    difficulty: "Moderate",
    distance: 3.4,
    distanceBucket: "Low",
    elevationGain: 1000,
    elevationBucket: "Medium",
    description:
      "A relatively short but steep climb rewarded with panoramic views and spectacular wildflower meadows. This lesser-known trail offers solitude and stunning vistas of the Cascade peaks.",
    bestSeason: [
      "Late June to September (peak wildflowers in July)",
      "Summer"
    ],
    safetyNotes: [
      "Exposed summit - avoid during thunderstorms",
      "Bring sun protection - limited shade",
      "Trail is steep with loose rocks in sections",
    ],
    stewardshipTips: [
      "Stay on trail through wildflower meadows",
      "Do not pick flowers or disturb vegetation",
      "Northwest Forest Pass required for parking",
    ],
    featured: true,
    crowdLevel: "Low",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    reviews: [
      {
        id: "r4",
        author: "David K.",
        rating: 5,
        date: "2024-07-10",
        comment:
          "The wildflowers were absolutely incredible! Best hike I've done this year.",
      },
    ],
  },
  {
    id: "cascade-head",
    name: "Cascade Head",
    location: "Lincoln City, Oregon",
    region: "Oregon",
    difficulty: "Moderate",
    distance: 4.8,
    distanceBucket: "Medium",
    elevationGain: 1243,
    elevationBucket: "Medium",
    description:
      "Coastal headland with sweeping ocean views and lush meadows. A Nature Conservancy preserve offering some of the best coastal hiking in Oregon with opportunities to spot wildlife.",
    bestSeason: [
      "July 16 - December 31 (closed other times for wildlife protection)",
      "Summer",
      "Fall",
      "Winter"
    ],
    safetyNotes: [
      "Seasonal closure: Closed Jan 1 - July 15 to protect nesting birds",
      "Strong winds possible - especially near cliff edges",
      "Poison oak present along trail",
      "Ticks common in meadows - check yourself after hiking",
    ],
    stewardshipTips: [
      "Respect seasonal closures",
      "Do not disturb grazing elk",
      "Stay on designated trails through sensitive meadows",
      "No dogs allowed to protect wildlife",
    ],
    featured: true,
    crowdLevel: "Low",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    reviews: [],
  },
  {
    id: "silver-falls",
    name: "Trails of Ten Falls",
    location: "Sublimity, Oregon",
    region: "Oregon",
    difficulty: "Moderate",
    distance: 7.6,
    distanceBucket: "High",
    elevationGain: 1184,
    elevationBucket: "Medium",
    description:
      "The Trail of Ten Falls showcases ten magnificent waterfalls, including several you can walk behind. Oregon's largest state park offers one of the best waterfall hikes in the country.",
    bestSeason: [
      "Year-Round (best in spring for water flow)",
      "Winter",
      "Spring",
      "Fall",
      "Summer"
    ],
    safetyNotes: [
      "Trails behind waterfalls can be slippery",
      "Wear waterproof clothing in wet seasons",
      "Watch for falling rocks near cliff areas",
      "Some sections have steep drop-offs",
    ],
    stewardshipTips: [
      "Stay on paved or maintained trails",
      "Do not climb on or around waterfalls",
      "Respect closure signs during hazardous conditions",
    ],
    featured: false,
    crowdLevel: "High",
    imageUrl:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    reviews: [],
  },
  {
    id: "mailbox-peak",
    name: "Mailbox Peak",
    location: "North Bend, Washington",
    region: "Washington",
    difficulty: "Hard",
    distance: 10.7,
    distanceBucket: "Extreme",
    elevationGain: 4028,
    elevationBucket: "Extreme",
    description:
      "One of the most challenging day hikes near Seattle. The relentless climb is rewarded with stunning views and the famous mailbox at the summit where hikers leave notes.",
    bestSeason: [
      "Late Spring to Fall (June - October)",
      "Spring",
      "Summer",
      "Fall"
    ],
    safetyNotes: [
      "Extremely steep - not for beginners",
      "Bring plenty of water (at least 2-3 liters)",
      "Start early to avoid heat and afternoon thunderstorms",
      "Old trail is steeper; new trail is longer but less punishing",
    ],
    stewardshipTips: [
      "Use the new trail to reduce erosion",
      "Pack out anything you pack in (including mailbox notes)",
      "Respect other hikers - step aside for faster traffic",
    ],
    featured: false,
    crowdLevel: "High",
    imageUrl:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    reviews: [],
  },
  {
    id: "saddle-mountain",
    name: "Saddle Mountain",
    location: "Seaside, Oregon",
    region: "Oregon",
    difficulty: "Hard",
    distance: 4.9,
    distanceBucket: "Medium",
    elevationGain: 1796,
    elevationBucket: "High",
    description:
      "The highest peak in the Northern Coast Range offers breathtaking ocean views and unique wildflowers. This challenging hike features steep switchbacks and exposed ridges.",
    bestSeason: [
      "Late Spring to Early Fall (May - September)",
      "Spring",
      "Summer"
    ],
    safetyNotes: [
      "Very exposed - dangerous in high winds",
      "Trail is narrow with steep drop-offs",
      "Can be foggy - bring navigation tools",
      "Not recommended for those with fear of heights",
    ],
    stewardshipTips: [
      "Rare wildflowers present - stay on trail",
      "Park only in designated areas",
      "Arrive early - limited parking",
    ],
    featured: false,
    crowdLevel: "Medium",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    reviews: [],
  },
  {
    id: "twin-falls",
    name: "Twin Falls",
    location: "North Bend, Washington",
    region: "Washington",
    difficulty: "Moderate",
    distance: 2.6,
    distanceBucket: "Low",
    elevationGain: 580,
    elevationBucket: "Medium",
    description:
      "A family-friendly trail leading to a beautiful two-tiered waterfall. Well-maintained path through old-growth forest makes this perfect for beginner hikers.",
    bestSeason: [
      "Year-Round (best in spring)",
      "Winter",
      "Spring",
      "Summer",
      "Fall"
    ],
    safetyNotes: [
      "Trail can be muddy in winter",
      "Bridge near falls can be slippery",
      "Keep children close near waterfall viewpoints",
    ],
    stewardshipTips: [
      "Stay on boardwalks and maintained trails",
      "Discover Pass required for parking",
      "Keep dogs on leash",
    ],
    featured: false,
    crowdLevel: "High",
    imageUrl:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    reviews: [
      {
        id: "r5",
        author: "Jennifer T.",
        rating: 4,
        date: "2024-09-05",
        comment:
          "Perfect trail for families! My kids loved it. Can get crowded on weekends.",
      },
    ],
  },
  {
    id: "little-si",
    name: "Little Si",
    location: "North Bend, Washington",
    region: "Washington",
    difficulty: "Moderate",
    distance: 4,
    distanceBucket: "Medium",
    elevationGain: 1171,
    elevationBucket: "Medium",
    description:
      "A shorter alternative to the famous Mount Si, offering great views with less commitment. Popular training hike for mountaineers and a great workout close to Seattle.",
    bestSeason: [
      "Year-Round",
      "Winter",
      "Spring",
      "Summer",
      "Fall"
    ],
    safetyNotes: [
      "Boulder field at top requires scrambling",
      "Trail can be icy in winter - bring microspikes",
      "Rocky sections - watch your footing",
    ],
    stewardshipTips: [
      "Discover Pass required",
      "Stay on main trail to prevent erosion",
      "Parking lot fills early on weekends - carpool if possible",
    ],
    featured: false,
    crowdLevel: "High",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    reviews: [],
  },
  {
    id: "poo-poo-point",
    name: "Poo Poo Point",
    location: "Issaquah, Washington",
    region: "Washington",
    difficulty: "Moderate",
    distance: 6.8,
    distanceBucket: "Medium",
    elevationGain: 1797,
    elevationBucket: "High",
    description:
      "A popular training hike with rewarding views of the Issaquah Valley and Cascade Mountains. Famous for watching paragliders launch from the summit.",
    bestSeason: [
      "Year-Round",
      "Winter",
      "Spring",
      "Summer",
      "Fall"
    ],
    safetyNotes: [
      "Can be crowded on weekends",
      "Stay clear of paraglider launch area",
      "Trail is wide but relentlessly uphill",
      "Bring plenty of water",
    ],
    stewardshipTips: [
      "Discover Pass required",
      "Stay on main trail",
      "Respect paragliders - give them space to launch",
    ],
    featured: false,
    crowdLevel: "High",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    reviews: [],
  },
];

/**
 * HELPER FUNCTIONS
 * These make it easier to work with trail data
 */

// Get only featured trails (for homepage)
function getFeaturedTrails() {
  return trails.filter((trail) => trail.featured);
}

// Get a single trail by its ID
function getTrailById(id) {
  return trails.find((trail) => trail.id === id);
}

// Get difficulty badge color
function getDifficultyClass(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "badge-green";
    case "Moderate":
      return "badge-yellow";
    case "Hard":
      return "badge-red";
    default:
      return "";
  }
}

// Get crowd level text and color
function getCrowdInfo(crowdLevel) {
  switch (crowdLevel) {
    case "Low":
      return { text: "Less Crowded", class: "text-emerald-700" };
    case "Medium":
      return { text: "Moderate Traffic", class: "text-yellow-600" };
    case "High":
      return { text: "Popular Trail", class: "text-stone-600" };
    default:
      return { text: "", class: "" };
  }
}
