import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bclnaLogo from "./assets/images/bclna-logo.png";
import redSealLogo from "./assets/images/Red-Seal-logo.jpg";
import arboristLogo from "./assets/images/certified-arborist-logo.png";


export default function Home() {
  const services = [
    { title: "Lawn Care", desc: "Weekly mowing, edging & maintenance.", icon: "🌱" },
    { title: "Garden Design", desc: "Custom landscaping and planting layouts.", icon: "🌼" },
   { title: "Hardscaping", desc: "Patios, retaining walls, and walkways.", icon: "🧱" }

  ];

  return (
    <div className="bg-green-50 text-green-900 font-sans">


         {/* Navbar */}
<nav className="relative sticky top-0 z-50 bg-gradient-to-r from-green-100 via-green-200 to-green-100 shadow-md animate-navbar-shimmer bg-[length:400%_100%]">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex items-center space-x-3">
     <img
  src="src/assets/images/GreenscapeLogo.png"
  alt="GreenScape Logo"
  className="h-10 w-auto object-contain"
/>

      <span className="text-2xl font-bold text-green-800 drop-shadow-sm">GreenScape</span>
    </div>
    <div className="space-x-6 text-green-800 font-medium">
      <Link to="/" className="hover:text-green-600 transition">Home</Link>
      <Link to="/services" className="hover:text-green-600 transition">Services</Link>
      <Link to="/portfolio" className="hover:text-green-600 transition">Portfolio</Link>
      <Link to="/about" className="hover:text-green-600 transition">About</Link>
      <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
    </div>
  </div>
</nav>

     {/* Hero Section */}
<section
  className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/src/assets/images/Landscapehero.jpg')" }}
>
  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-green-900/40 z-0" />

  {/* Animated Text Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 text-center px-6 max-w-3xl"
  >
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-xl tracking-tight leading-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
        Transforming Outdoor Spaces
      </span>
    </h1>
    <p className="text-xl md:text-2xl text-green-100 mb-8 drop-shadow-md font-medium">
      Professional landscaping for a greener tomorrow.
    </p>

    <Link
      to="/contact"
      className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Get a Free Estimate
    </Link>
  </motion.div>
</section>

{/* Services Summary Cards */}
<section className="bg-gradient-to-b from-green-100 to-green-50 py-24 px-6">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h3 className="text-5xl font-extrabold text-green-800 mb-6 tracking-tight drop-shadow-md">
      Our Services
    </h3>
    <p className="text-green-700 text-lg font-medium max-w-2xl mx-auto">
      From lush gardens to precision stonework, we transform your outdoor spaces with care, creativity, and craftsmanship.
    </p>
  </div>

  <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
    {services.map((service, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="group relative bg-white/90 backdrop-blur-lg border border-green-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Optional: Replace icon with real image if needed */}
        <div className="text-5xl mb-5 text-green-700 drop-shadow-md">{service.icon}</div>

        <h4 className="text-2xl font-bold text-green-900 mb-3 group-hover:text-green-600 transition">
          {service.title}
        </h4>

        <p className="text-green-800 text-base font-medium leading-relaxed">
          {service.desc}
        </p>

        {/* Optional badge */}
        <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
          Learn More
        </div>
      </motion.div>
    ))}
  </div>
</section>

   {/* About Brief with Enhanced Background Image */}
<section
  className="relative bg-cover bg-center py-28 px-6 text-white"
  style={{ backgroundImage: "url('/src/assets/images/Landscapeabout.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl mx-auto text-center backdrop-blur-sm bg-black/30 p-10 rounded-xl"
  >
    <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
      About GreenScape
    </h3>
    <p className="text-lg md:text-xl mb-6 leading-relaxed text-white drop-shadow-md">
      At GreenScape, we’ve been crafting beautiful, sustainable landscapes for over a decade.
      Whether you need maintenance or a full transformation, we bring passion, experience,
      and care to every project.
    </p>
    <Link
      to="/about"
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
    >
      Learn More →
    </Link>
  </motion.div>
</section>


      {/* Call To Action */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Let’s Bring Your Outdoor Vision to Life</h3>
        <p className="mb-6">Request a free consultation and see how we can transform your space.</p>
        <Link to="/contact" className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-green-100 transition">Contact Us</Link>
      </section>

      {/* Why Choose Us */}
<section className="bg-gradient-to-b from-green-50 to-white py-24 px-6">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h3 className="text-4xl font-extrabold text-green-800 mb-4 tracking-tight drop-shadow-sm">
      Why Choose GreenScape?
    </h3>
    <p className="text-green-700 text-lg font-medium max-w-2xl mx-auto">
      Discover what sets us apart in delivering premium outdoor experiences.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        icon: "🎯",
        title: "Precision & Detail",
        desc: "Every cut, plant, and stone placed with expert care.",
      },
      {
        icon: "🌿",
        title: "Eco-Friendly",
        desc: "Sustainable materials and native plant designs.",
      },
      {
        icon: "🤝",
        title: "Reliable Team",
        desc: "Friendly professionals committed to your vision.",
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="group bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
      >
        <div className="text-5xl mb-6 text-green-700 drop-shadow-md">
          {item.icon}
        </div>
        <h4 className="text-2xl font-bold mb-3 text-green-800 group-hover:text-green-600 transition">
          {item.title}
        </h4>
        <p className="text-green-700 text-base font-medium leading-relaxed">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* Testimonials */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-green-800 mb-12">What Our Clients Say</h3>
    <div className="relative overflow-hidden">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-50%"] }} // animate halfway through 2 sets
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...Array(2)].flatMap(() =>
          [
            {
              name: "Sophie M.",
              quote: "GreenScape turned our backyard into a dream space.",
              location: "Surrey, BC",
              rating: 5,
            },
            {
              name: "Daniel R.",
              quote: "Professional, on-time, and exceeded expectations.",
              location: "Vancouver, BC",
              rating: 5,
            },
            {
              name: "Karen T.",
              quote: "Every detail was perfect. Highly recommend!",
              location: "Burnaby, BC",
              rating: 5,
            },
            {
              name: "Aman G.",
              quote: "They brought our garden vision to life beautifully.",
              location: "Langley, BC",
              rating: 5,
            },
            {
              name: "Leah N.",
              quote: "Affordable and high-quality work from a caring crew.",
              location: "Coquitlam, BC",
              rating: 5,
            },
          ].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="min-w-[300px] bg-green-100 text-green-900 p-6 rounded-xl shadow-md flex-shrink-0"
            >
              <div className="mb-3">
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-green-700">{t.location}</p>
                <div className="flex justify-center mt-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic text-sm">“{t.quote}”</p>
            </div>
          ))
        )}
      </motion.div>
    </div>
  </div>
</section>


     {/* Partners */}
<section className="bg-green-100 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h4 className="text-2xl font-bold text-green-800 mb-10">
      Trusted by Local Partners & Certified Experts
    </h4>
    <div className="flex flex-wrap justify-center gap-12 items-center">
      {[ 
        { src: bclnaLogo, alt: "BCLNA" },
        { src: redSealLogo, alt: "Red Seal Certified" },
        { src: arboristLogo, alt: "Certified Arborist" }
      ].map((logo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>


     {/* Enhanced Footer */}
<footer className="bg-green-900 text-white pt-16 pb-8 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Company Overview */}
    <div>
      <h4 className="text-xl font-bold mb-4">GreenScape</h4>
      <p className="text-green-100 text-sm mb-4">
        Crafting sustainable and beautiful outdoor spaces for over a decade.
      </p>
      <div className="flex space-x-4">
        <a href="#" aria-label="Instagram" className="hover:text-green-300">
          <svg className="h-5 w-5 fill-current" /* Instagram Icon */ />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-green-300">
          <svg className="h-5 w-5 fill-current" /* Facebook Icon */ />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-green-300">
          <svg className="h-5 w-5 fill-current" /* LinkedIn Icon */ />
        </a>
      </div>
    </div>

    {/* Services */}
    <div>
      <h4 className="text-xl font-bold mb-4">Services</h4>
      <ul className="space-y-2 text-green-100 text-sm">
        <li><Link to="/services#lawncare" className="hover:underline">Lawn Care</Link></li>
        <li><Link to="/services#gardendesign" className="hover:underline">Garden Design</Link></li>
        <li><Link to="/services#hardscaping" className="hover:underline">Hardscaping</Link></li>
        <li><Link to="/services#maintenance" className="hover:underline">Maintenance</Link></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h4 className="text-xl font-bold mb-4">Company</h4>
      <ul className="space-y-2 text-green-100 text-sm">
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
        <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
        <li><Link to="/blog" className="hover:underline">Blog</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h4 className="text-xl font-bold mb-4">Subscribe</h4>
      <p className="text-green-100 text-sm mb-4">
        Get the latest landscaping tips and updates.
      </p>
      <form className="flex flex-col space-y-2">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded bg-green-800 text-white placeholder-green-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-green-700 mt-12 pt-6 text-center text-sm text-green-100">
    <p>© {new Date().getFullYear()} GreenScape. All rights reserved.</p>
    <div className="mt-2 space-x-4">
      <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
      <Link to="/terms" className="hover:underline">Terms of Service</Link>
    </div>
  </div>
</footer>

      {/* Scroll to Top */}
      <a
        href="#"
        className="fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition z-50"
        aria-label="Scroll to top"
      >
        ↑
      </a>
    </div>
  );
}
