import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const CellUs = () => {
  return (
    <section className="bg-black py-10 px-4 mb-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-4 text-white"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Call or Message Us Today
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-500 text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Have a custom request or need help? Reach out to us directly and we’ll assist you right away.
        </motion.p>

        {/* Call Button */}
        <motion.a
          href="tel:+880123456789"
          className="inline-flex items-center gap-3 bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {/* Bouncing Icon with Green Circle */}
          <motion.div
            className="bg-green-500 p-2 rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <PhoneCall className="text-white w-5 h-5" />
          </motion.div>
          Call Us: +880 1780 619346
        </motion.a>
      </div>
    </section>
  );
};

export default CellUs;
