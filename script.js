function book() {
  alert("Booking feature coming soon 🚀");
}
/* ================= SERVICE DATA ================= */
const services = {
  carpenter: {
    title: "Professional Carpenter Services",
    area: "Noida • Delhi • Ghaziabad",
    banner: "images/carpenter.jpg",
    whatsapp: "Hello, I want to book a Carpenter service"
  },
  plumber: {
    title: "Fast & Trusted Plumber Services",
    area: "Noida • Delhi • Ghaziabad",
    banner: "images/plumber.jpg",
    whatsapp: "Hello, I want to book a Plumber service"
  },
  electrician: {
    title: "Certified Electrician Services",
    area: "Noida • Delhi • Ghaziabad",
    banner: "images/electrician.jpg",
    whatsapp: "Hello, I want to book an Electrician service"
  },
  painter: {
    title: "Professional Painter Services",
    area: "Noida • Delhi • Ghaziabad",
    banner: "images/painter.jpg",
    whatsapp: "Hello, I want to book a Painter service"
  },
  welder: {
    title: "Expert Welding Services",
    area: "Noida • Delhi • Ghaziabad",
    banner: "images/welder.jpg",
    whatsapp: "Hello, I want to book a Welder service"
  }
};

/* ================= LOAD SERVICE ================= */
function loadService(serviceName) {
  const service = services[serviceName];
  if (!service) return;

  // Change title text
  document.getElementById("serviceTitle").innerText = service.title;
  document.getElementById("serviceArea").innerText = service.area;

  // Change banner background
  document.querySelector(".hero").style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${service.banner}')`;

  // Update WhatsApp message
  document.getElementById("whatsappBtn").onclick = function () {
    bookWhatsApp(service.whatsapp);
  };
}

/* ================= WHATSAPP BOOKING ================= */
function bookWhatsApp(message) {
  const phone = "919756468154"; // apna number
  const url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

/* ================= CALL NOW ================= */
function callNow() {
  window.location.href = "tel:+919756468154";
}

/* ================= AUTO LOAD DEFAULT ================= */
window.onload = function () {
  loadService("carpenter"); // default service
};
