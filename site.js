const services = [
  { title: "Signature Henna Services", description: "Luxury, long-lasting henna designs for brides, events, and photoshoots crafted with precision and elegance.", price: "Starting from ₦10,000", duration: "45-180 mins", active: true },
  { title: "Nails", description: "Manicure, pedicure, and nail styling — coming soon to the studio.", price: "Coming soon", duration: "-", active: false },
  { title: "Skincare", description: "Facial treatments and gentle renewal — coming soon to the studio.", price: "Coming soon", duration: "-", active: false },
  { title: "Massage", description: "Relaxing massage sessions for reset and wellness — coming soon to the studio.", price: "Coming soon", duration: "-", active: false },
  { title: "Lash Extensions", description: "Soft glam and full lash looks — coming soon to the studio.", price: "Coming soon", duration: "-", active: false }
];

const testimonials = [
  { quote: "My henna design was so clean and elegant. It felt artistic and luxurious from start to finish.", author: "Amina T.", role: "Henna Client" },
  { quote: "The brand feels like it is growing into something special. Professional service, beautiful results, and great energy.", author: "Deborah O.", role: "Returning Client" },
  { quote: "I love the vision behind Henna_by_ruffy. It already feels like more than a service, it feels like a beauty experience.", author: "Chioma E.", role: "Beauty Client" }
];

const navItems = [
  ["Home", "index.html", "home"],
  ["About", "about.html", "about"],
  ["Services", "services.html", "services"],
  ["Booking", "booking.html", "booking"],
  ["Education", "education.html", "education"],
  ["Gallery", "gallery.html", "gallery"],
  ["Contact", "contact.html", "contact"]
];

const currentPage = document.body.dataset.page;
renderHeader();
renderFooter();
renderServicePreview();
renderServicesPage();
renderBookingOptions();
renderTestimonials();
setupRevealAnimations();
setupForms();

function renderHeader() {
  const headerHost = document.getElementById("site-header");
  if (!headerHost) return;
  headerHost.innerHTML = `<header class="site-header"><div class="container nav-shell"><a class="brand" href="index.html" aria-label="Henna_by_ruffy home"><img src="assets/logo.jpeg" alt="Henna_by_ruffy logo"><div class="brand-copy"><strong>Henna_by_ruffy</strong><span>Beauty Studio & Academy</span></div></a><button class="nav-toggle" id="nav-toggle" aria-label="Open navigation" aria-expanded="false"><span class="nav-toggle-icon" aria-hidden="true"><span></span><span></span><span></span></span><span class="nav-toggle-label">Menu</span></button><nav class="nav-links" id="nav-links">${navItems.map(([label, href, key]) => `<a href="${href}" class="${currentPage === key ? "active" : ""}">${label}</a>`).join("")}</nav></div></header>`;
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
}

function renderFooter() {
  const footerHost = document.getElementById("site-footer");
  if (!footerHost) return;
  footerHost.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-card"><div><p class="eyebrow">Henna_by_ruffy</p><h3>Signature henna services rooted in artistry and built for expansion.</h3><p>Luxury, long-lasting henna designs, professional beauty training, and premium henna tools under one elegant brand direction.</p></div><div><h3>Pages</h3><div class="footer-links">${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div></div><div><h3>Contact</h3><div class="footer-contact"><a href="tel:+2349038456155">+234 903 845 6155</a><a href="mailto:hello@hennabyruffy.com">hello@hennabyruffy.com</a><a href="https://www.instagram.com/henna_by_ruffy?igsh=MnNqcXNjbXp4NzF3&utm_source=qr" target="_blank" rel="noopener">Instagram</a><a href="https://www.tiktok.com/@henna_by_ruffy?_r=1&_t=ZS-95AZsRQnbZx" target="_blank" rel="noopener">TikTok</a></div></div></div></div></footer>`;
}

function renderServicePreview() {
  const host = document.getElementById("service-preview");
  if (!host) return;
  host.innerHTML = services.slice(0, 3).map(createServiceCard).join("");
}

function renderServicesPage() {
  const host = document.getElementById("services-list");
  if (!host) return;
  host.innerHTML = services.map(createServiceCard).join("");
}

function createServiceCard(service) {
  const isActive = service.active !== false;
  return `
    <article class="service-card reveal ${isActive ? "" : "service-inactive"}">
      <div class="service-card-content">
        <p class="eyebrow">${service.title}</p>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <div class="service-meta">
          <span>${service.price}</span>
          ${isActive ? `<span>${service.duration}</span>` : ""}
        </div>
        ${isActive 
          ? `<a class="button button-primary" href="booking.html">Book this service</a>` 
          : `<span class="coming-soon-label">Coming Soon</span>`}
      </div>
    </article>`;
}

function renderBookingOptions() {
  const select = document.getElementById("booking-service");
  if (!select) return;
  select.innerHTML = ['<option value="">Select a service</option>', ...services.map((service) => `<option>${service.title}</option>`)].join("");
}

function renderTestimonials() {
  const host = document.getElementById("testimonial-carousel");
  if (!host) return;
  host.innerHTML = testimonials.map((item, index) => `<article class="testimonial-card ${index === 0 ? "active" : ""}"><p class="testimonial-quote">“${item.quote}”</p><p class="testimonial-meta">${item.author} · ${item.role}</p></article>`).join("");
  const cards = Array.from(host.querySelectorAll(".testimonial-card"));
  const prev = document.getElementById("testimonial-prev");
  const next = document.getElementById("testimonial-next");
  let activeIndex = 0;
  const showCard = (index) => cards.forEach((card, cardIndex) => card.classList.toggle("active", cardIndex === index));
  prev?.addEventListener("click", () => { activeIndex = (activeIndex - 1 + cards.length) % cards.length; showCard(activeIndex); });
  next?.addEventListener("click", () => { activeIndex = (activeIndex + 1) % cards.length; showCard(activeIndex); });
  setInterval(() => { activeIndex = (activeIndex + 1) % cards.length; showCard(activeIndex); }, 6000);
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  items.forEach((item) => observer.observe(item));
}

function setupForms() {
  const formConfigs = [
    ["booking-form", "booking-feedback", "Your booking request has been received. Connect this form to email, Formspree, or WhatsApp for live submissions."],
    ["interest-form", "interest-feedback", "Your interest has been noted. You can connect this form to a mailing list or CRM later."],
    ["contact-form", "contact-feedback", "Your message has been captured. Add a backend endpoint or form service to make it fully live."]
  ];
  formConfigs.forEach(([formId, feedbackId, message]) => {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    if (!form || !feedback) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      feedback.textContent = message;
      form.reset();
    });
  });
}
