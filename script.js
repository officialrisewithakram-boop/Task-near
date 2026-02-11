const slides = [
  {
    title: "Professional Carpenter Services",
    text: "Noida • Delhi • Ghaziabad",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Expert Electrician Services",
    text: "Fast • Reliable • Affordable",
    image: "https://images.unsplash.com/photo-1581091870627-3f7c6d2f2c2b?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Trusted Plumber Services",
    text: "24/7 Available",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
  }
];

let index = 0;
const hero = document.getElementById("hero");
const title = document.getElementById("hero-title");
const text = document.getElementById("hero-text");

function changeSlide() {
  const slide = slides[index];
  hero.style.background =
    `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${slide.image}') center/cover no-repeat`;
  title.innerText = slide.title;
  text.innerText = slide.text;

  index = (index + 1) % slides.length;
}

changeSlide();
setInterval(changeSlide, 4000);
