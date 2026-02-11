const services = {
  carpenter: {
    title: "Professional Carpenter Services",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
  },
  electrician: {
    title: "Expert Electrician Services",
    image: "https://images.unsplash.com/photo-1581091870627-3f7c6d2f2c2b?auto=format&fit=crop&w=1400&q=80"
  },
  plumber: {
    title: "Trusted Plumber Services",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
  },
  painter: {
    title: "Professional Painter Services",
    image: "https://images.unsplash.com/photo-1598300053651-2b1c1c9b8d1d?auto=format&fit=crop&w=1400&q=80"
  },
  welder: {
    title: "Skilled Welder Services",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80"
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
