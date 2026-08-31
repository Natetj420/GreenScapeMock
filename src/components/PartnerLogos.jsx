// PartnerLogos.jsx
import { motion } from 'framer-motion/dom';
import { PARTNER_LOGOS } from '../constants';

export default function PartnerLogos() {
  return (
    <section className="bg-green-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-2xl font-bold text-green-800 mb-10">
          Trusted&nbsp;by&nbsp;Local&nbsp;Partners & Certified&nbsp;Experts
        </h4>

        <div className="flex flex-wrap justify-center gap-12 items-center">
          {PARTNER_LOGOS.map(({ src, alt }, i) => (
            <motion.div
              key={alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <img
                src={src}                /* e.g. '/assets/images/bclna.webp' */
                alt={alt}
                loading="lazy"
                decoding="async"
                className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
