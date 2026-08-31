import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    setFormStatus("sending");

    try {
      const formData = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      console.error("Estimate form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0d1f16] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0">
        <img
          src="/assets/images/MapleSummit-Hero.png"
          alt="Maple Summit Landscape"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#08150f]/75" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0d1f16]/50 to-[#0d1f16]" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">

        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl text-center"
          >
            {/* Logo / Brand */}
            <div className="mb-8">
              <img
                src="/assets/images/MapleSummit_Logo_White.svg"
                alt="Maple Summit Landscape logo"
                className="w-[320px] md:w-[440px] lg:w-[520px] h-auto mx-auto mb-4"
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              We’re Building Something
              <span className="block text-green-300">
                Beautiful.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-green-50/90 leading-relaxed mb-10">
              Our new website is currently being built. In the meantime,
              Maple Summit Landscape is fully available for estimates,
              landscaping projects, garden work, hedge care and outdoor
              improvements.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#estimate"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 transition px-8 py-4 rounded-full font-semibold text-lg shadow-xl"
              >
                Request an Estimate
              </a>

              <a
                href="tel:+16723895771"
                className="w-full sm:w-auto border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/15 transition px-8 py-4 rounded-full font-semibold text-lg backdrop-blur"
              >
                Call Us
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 text-left mb-12">
              {/* Services */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                <p className="text-green-300 text-sm uppercase tracking-wider mb-2">
                  Services
                </p>

                <p className="text-white font-medium leading-relaxed">
                  Landscape maintenance, hedge care, planting, garden
                  improvements and outdoor projects.
                </p>
              </div>

              {/* Service Area */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                <p className="text-green-300 text-sm uppercase tracking-wider mb-2">
                  Service Area
                </p>

                <p className="text-white font-medium leading-relaxed">
                  South Surrey, Langley and surrounding Lower Mainland
                  communities.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                <p className="text-green-300 text-sm uppercase tracking-wider mb-2">
                  Contact
                </p>

                <a
                  href="mailto:info@maplesummitlandscape.ca"
                  className="text-white font-medium hover:text-green-300 transition break-all"
                >
                  info@maplesummitlandscape.ca
                </a>
              </div>
            </div>

            <p className="text-sm text-green-100/70">
              Full website coming soon.
            </p>
          </motion.div>
        </section>

        {/* Estimate Form */}
        <section
          id="estimate"
          className="px-6 pb-24 pt-8 scroll-mt-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-[#10251a]/90 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

              {/* Form Header */}
              <div className="px-6 sm:px-10 pt-9 pb-7 border-b border-white/10">
                <p className="text-green-300 text-sm uppercase tracking-[0.2em] mb-3">
                  Free Estimate
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                  Tell Us About Your Project
                </h2>

                <p className="text-green-50/75 leading-relaxed max-w-2xl">
                  Share a few details about the work you’re looking to have
                  done. We’ll review your request and get back to you to
                  discuss the next steps.
                </p>
              </div>

              {/* Form */}
              <form
                name="estimate-request"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="px-6 sm:px-10 py-9 space-y-6"
              >
                {/* Required by Netlify */}
                <input
                  type="hidden"
                  name="form-name"
                  value="estimate-request"
                />

                {/* Spam honeypot */}
                <p
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: 0,
                    border: 0,
                  }}
                >
                  <label>
                    Don’t fill this out:
                    <input
                      name="bot-field"
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </label>
                </p>

                {/* Name / Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-green-50/90 mb-2"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-green-50/90 mb-2"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="604-555-1234"
                      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-50/90 mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-green-50/90 mb-2"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/15 bg-[#13281d] px-4 py-3.5 text-white outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="hedge-care">
                      Hedge Care & Trimming
                    </option>

                    <option value="tree-pruning">
                      Tree Pruning
                    </option>

                    <option value="planting">
                      Planting & Garden Improvements
                    </option>

                    <option value="landscape-installation">
                      Landscape Installation
                    </option>

                    <option value="pavers">
                      Pavers & Outdoor Projects
                    </option>

                    <option value="maintenance">
                      Landscape Maintenance
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-green-50/90 mb-2"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell us what you'd like done, the approximate size of the area, and any other useful details..."
                    className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition resize-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-green-50/90 mb-2"
                  >
                    Project Location

                    <span className="text-white/40 font-normal ml-1">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="location"
                    type="text"
                    name="location"
                    autoComplete="address-level2"
                    placeholder="South Surrey, Langley, etc."
                    className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/35 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  {formStatus === "success" ? (
                    <div
                      className="rounded-2xl border border-green-400/30 bg-green-400/10 px-6 py-7 text-center"
                      role="status"
                    >
                      <div className="text-green-300 text-3xl mb-3">
                        ✓
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        Estimate Request Sent
                      </h3>

                      <p className="text-green-50/70 leading-relaxed">
                        Thanks for reaching out. We’ll review your project
                        and contact you shortly.
                      </p>

                      <button
                        type="button"
                        onClick={() => setFormStatus("idle")}
                        className="mt-5 text-sm font-semibold text-green-300 hover:text-green-200 transition"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        type="submit"
                        disabled={formStatus === "sending"}
                        className="w-full bg-green-600 hover:bg-green-500 active:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition px-8 py-4 rounded-full font-semibold text-lg shadow-xl"
                      >
                        {formStatus === "sending"
                          ? "Sending Request..."
                          : "Request My Free Estimate"}
                      </button>

                      {formStatus === "error" && (
                        <div
                          role="alert"
                          className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-center text-sm text-red-100"
                        >
                          Something went wrong while sending your request.
                          Please try again or email us at{" "}
                          <a
                            href="mailto:info@maplesummitlandscape.ca"
                            className="underline hover:text-white"
                          >
                            info@maplesummitlandscape.ca
                          </a>
                          .
                        </div>
                      )}

                      <p className="text-center text-xs sm:text-sm text-green-100/50 mt-4">
                        No obligation. We’ll contact you to discuss your project.
                      </p>
                    </>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 text-center px-6 pb-10">
          <p className="text-xs text-green-100/50">
            © {new Date().getFullYear()} Maple Summit Landscape. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}