# How to use: Add classes to your HTML elements. Multiple classes can be combined:

<div class="container flex justify-between items-center gap-2">...</div>

## CONTAINERS & LAYOUT

.container – Centers content, horizontal padding, max-width 1280px.

<div class="container">Centered content with padding</div>

.container-wide – Max-width 1536px.

<div class="container-wide">Wide container</div>

.container-narrow – Max-width 768px.

<div class="container-narrow">Narrow container</div>

.section – Adds vertical padding of 3rem.

<section class="section">Section with spacing</section>

.section-lg – Vertical padding of 4rem.

<section class="section-lg">Large section</section>

## GRID SYSTEM

.grid – Enable grid layout.

<div class="grid">
  <div>1</div>
  <div>2</div>
</div>

.grid-cols-1 – 1 column.

<div class="grid grid-cols-1">
  <div>Item</div>
</div>

.grid-cols-2 – 2 columns.

<div class="grid grid-cols-2">
  <div>1</div><div>2</div>
</div>

.grid-cols-3 – 3 columns.

<div class="grid grid-cols-3">
  <div>1</div><div>2</div><div>3</div>
</div>

.grid-cols-4 – 4 columns.

<div class="grid grid-cols-4">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>

## FLEXBOX UTILITIES

.flex – Turns container into flex.

<div class="flex">
  <div>Flex item</div>
</div>

.flex-col – Flex direction column.

<div class="flex flex-col">
  <div>Top</div>
  <div>Bottom</div>
</div>

.flex-wrap – Items wrap onto new line.

<div class="flex flex-wrap">
  <div>Item 1</div><div>Item 2</div><div>Item 3</div>
</div>

.items-center – Vertical align center.

<div class="flex items-center" style="height: 100px;">
  <div>Centered</div>
</div>

.items-start – Vertical align top.

<div class="flex items-start" style="height: 100px;">
  <div>Top</div>
</div>

.justify-between – Space between horizontally.

<div class="flex justify-between">
  <div>Left</div><div>Right</div>
</div>

.justify-center – Center horizontally.

<div class="flex justify-center">
  <div>Centered</div>
</div>

.gap-1 – Space between items: 0.5rem.

<div class="flex gap-1">
  <div>A</div><div>B</div>
</div>

.gap-2 – Gap 1rem.

<div class="flex gap-2">
  <div>A</div><div>B</div>
</div>

.gap-3 – Gap 1.5rem.

<div class="flex gap-3">
  <div>A</div><div>B</div>
</div>

.gap-4 – Gap 2rem.

<div class="flex gap-4">
  <div>A</div><div>B</div>
</div>

## COLORS

### Background Colors:

.bg-white – White background
.bg-stone-50 – Very light gray
.bg-stone-100 – Light gray
.bg-stone-800 – Dark gray/stone
.bg-emerald-50 – Light green
.bg-emerald-700 – Medium green
.bg-emerald-800 – Dark green
.bg-amber-50 – Light yellow

<div class="bg-emerald-50 p-2">Light green background</div>

### Text Colors:

.text-white – White text
.text-stone-600 – Medium gray
.text-stone-700 – Darker gray
.text-stone-800 – Very dark gray
.text-emerald-100 – Very light green
.text-emerald-700 – Green
.text-emerald-800 – Dark green
.text-amber-700 – Dark yellow
.text-green-800 – Dark green
.text-yellow-800 – Dark yellow
.text-red-800 – Dark red

<p class="text-red-800">Red text</p>

## TYPOGRAPHY

### Headings:

<h1>Largest heading</h1>
<h2>Second largest</h2>
<h3>Medium heading</h3>
<h4>Smaller heading</h4>

### Text Sizes:

.text-xl – 1.25rem
.text-lg – 1.125rem
.text-sm – 0.875rem
.text-xs – 0.75rem

<p class="text-xl">Large text</p>
<p class="text-sm">Small text</p>

## Text Alignment:

.text-center – Center

<p class="text-center">Centered text</p>

Font Weight:
.font-bold – Bold
.font-semibold – Semi-bold

## BUTTONS

.btn – Base button style

<button class="btn">Button</button>

.btn-primary – Green button with white text
.btn-secondary – White button with green border
.btn-block – Full width
.btn-lg – Larger padding and font

<button class="btn btn-primary btn-lg">Primary Large</button>
<button class="btn btn-secondary btn-block">Secondary Block</button>

## CARDS

.card – White box with padding and border

<div class="card">Card content</div>

.card-image – Image inside card

<img src="image.jpg" class="card-image" />

.card-title – Card heading
.card-text – Card paragraph

<div class="card">
  <h3 class="card-title">Title</h3>
  <p class="card-text">Text</p>
</div>

## BADGES

.badge – Pill-shaped label
.badge-green, .badge-yellow, .badge-red, .badge-emerald – Colors

<span class="badge badge-green">Easy</span>

## FORMS

.form-group – Wrapper for label + input
.form-label – Label
.form-control – Input, textarea, select

<div class="form-group">
  <label class="form-label">Name</label>
  <input class="form-control" type="text" />
</div>

## NAVIGATION

.navbar – Top navigation bar
.navbar-container – Flex wrapper
.navbar-brand – Logo + name
.navbar-nav – List of links
.nav-link – Individual link
.navbar-toggle – Mobile menu button

<nav class="navbar">
  <div class="navbar-container">
    <a href="#" class="navbar-brand">Logo</a>
    <button class="navbar-toggle">☰</button>
    <ul class="navbar-nav">
      <li><a href="#" class="nav-link">Home</a></li>
    </ul>
  </div>
</nav>

## HERO SECTION

.hero – Big top banner
.hero-overlay – Overlay behind text
.hero-content – Text container
.hero-title, .hero-text – Heading + paragraph

<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Welcome</h1>
    <p class="hero-text">Subtitle text</p>
  </div>
</section>

## FOOTER

.footer – Footer container
.footer-links – List of links
.footer-bottom – Bottom copyright

<footer class="footer">
  <ul class="footer-links">
    <li><a href="#">Home</a></li>
  </ul>
  <div class="footer-bottom">&copy; 2026</div>
</footer>

## UTILITY CLASSES

Margins: .m-0, .mt-1 → .mt-4, .mb-1 → .mb-4, .my-2 → .my-4

Padding: .p-0, .p-1 → .p-4, .py-2 → .py-4

Borders: .border, .border-emerald, .border-amber

Rounded corners: .rounded, .rounded-full

Shadows: .shadow, .shadow-lg

Display: .hidden, .block, .inline-block

Width: .w-full

Icon sizes: .icon, .icon-lg, .icon-xl

Alerts: .alert, .alert-success, .alert-info, .alert-warning
