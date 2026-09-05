// ---- Sample inventory data. Replace with real vehicles, prices, and photos. ----
const CARS = [
  { make: "Honda", model: "Accord Sport", year: 2021, price: 24900, mileage: "31,200", category: "sedan", badge: "Certified", icon: "🚘", gradient: "linear-gradient(135deg,#3a3f47,#1c1e22)" },
  { make: "Toyota", model: "RAV4 XLE", year: 2022, price: 27500, mileage: "18,400", category: "suv", badge: "Low Miles", icon: "🚙", gradient: "linear-gradient(135deg,#4a5a4a,#1c1e22)" },
  { make: "Ford", model: "F-150 XLT", year: 2020, price: 32900, mileage: "42,100", category: "truck", badge: "Certified", icon: "🛻", gradient: "linear-gradient(135deg,#5a3a3a,#1c1e22)" },
  { make: "BMW", model: "3 Series 330i", year: 2021, price: 31900, mileage: "24,700", category: "luxury", badge: "Luxury", icon: "🚗", gradient: "linear-gradient(135deg,#3a3f5a,#1c1e22)" },
  { make: "Chevrolet", model: "Equinox LT", year: 2022, price: 23400, mileage: "20,900", category: "suv", badge: "New Arrival", icon: "🚙", gradient: "linear-gradient(135deg,#4a4a5a,#1c1e22)" },
  { make: "Mercedes-Benz", model: "C300", year: 2020, price: 34900, mileage: "29,300", category: "luxury", badge: "Luxury", icon: "🚗", gradient: "linear-gradient(135deg,#5a4a3a,#1c1e22)" },
];

function formatPrice(n) {
  return "$" + n.toLocaleString("en-US");
}

function renderCars(filter) {
  const grid = document.getElementById("carGrid");
  if (!grid) return;
  const items = filter === "all" ? CARS : CARS.filter(c => c.category === filter);

  grid.innerHTML = items.map(car => `
    <div class="car-card" data-category="${car.category}">
      <div class="car-media" style="background:${car.gradient}">
        <span class="car-badge">${car.badge}</span>
        <span>${car.icon}</span>
      </div>
      <div class="car-body">
        <h4>${car.year} ${car.make} ${car.model}</h4>
        <div class="car-meta">
          <span>${car.mileage} mi</span>
          <span>&middot;</span>
          <span>${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
        </div>
        <div class="car-price">
          <strong>${formatPrice(car.price)}</strong>
          <a href="#contact">Inquire →</a>
        </div>
      </div>
    </div>
  `).join("");
}

function initFilters() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCars(btn.dataset.filter);
  });
}

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: "name", check: v => v.trim().length > 0 },
      { id: "phone", check: v => v.trim().length > 0 },
      { id: "email", check: v => emailRe.test(v.trim()) },
      { id: "message", check: v => v.trim().length > 0 },
    ];

    fields.forEach(({ id, check }) => {
      const input = document.getElementById(id);
      const field = input.closest(".form-field");
      const ok = check(input.value);
      field.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      success.classList.remove("show");
      return;
    }

    // No backend wired up yet — this is where you'd POST to your API or an
    // email service (Formspree, Netlify Forms, etc.) once you have one.
    success.classList.add("show");
    form.reset();
  });
}

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCars("all");
  initFilters();
  initNavToggle();
  initContactForm();
  initYear();
});
