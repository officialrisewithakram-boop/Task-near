const services = {
  carpenter: {
    title: "Professional Carpenter Services",
    image: "images/carpenter.jpg"
  },
  plumber: {
    title: "Fast & Trusted Plumber Near You",
    image: "images/plumber.jpg"
  },
  electrician: {
    title: "Expert Electrician Services",
    image: "images/electrician.jpg"
  },
  painter: {
    title: "Professional Painter Near You",
    image: "images/painter.jpg"
  },
  welder: {
    title: "Skilled Welder Services",
    image: "images/welder.jpg"
  }
};

const params = new URLSearchParams(window.location.search);
const service = params.get("service") || "carpenter";

const hero = document.getElementById("hero");
const heroTitle = document.getElementById("hero-title");
const whatsappBtn = document.getElementById("whatsappBtn");

if (services[service]) {
  hero.style.background =
    `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${services[service].image}') center/cover no-repeat`;

  heroTitle.innerText = services[service].title;

  whatsappBtn.href =
    `https://wa.me/919756468154?text=Hi, I want to book ${service} service`;
}
