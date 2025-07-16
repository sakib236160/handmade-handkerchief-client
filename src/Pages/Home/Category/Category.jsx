import { useEffect, useRef } from 'react';
import slide1 from '../../../assets/home/embroidered rumal2 (2).jpg';
import slide2 from '../../../assets/home/plainsolidrumal.png';
import slide3 from '../../../assets/home/monogranmmedrumal.png';
import slide4 from '../../../assets/home/custommessage.png';
import slide5 from '../../../assets/home/borderdesignrumal.png';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false); // Track hover pause

  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (!isPausedRef.current && container) {
        container.scrollLeft += 1;

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // reset to beginning
        }
      }

      rafRef.current = requestAnimationFrame(scroll);
    };

    scroll(); // start scroll

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Hover handlers
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  const images = [slide1, slide2, slide3, slide4, slide5, slide1, slide2]; // repeat for looping

  return (
    <section className="my-12">
      <SectionTitle
        heading="Shop by Category"
        subHeading="Explore Our Handcrafted Rumals"
      />

      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-6 overflow-x-scroll no-scrollbar px-4 py-6 scroll-smooth mt-12"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-60 flex-shrink-0 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
          >
            <img src={img} alt={`Rumal ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
