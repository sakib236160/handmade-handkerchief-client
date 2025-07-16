import featuredImg from "../../../assets/home/handmadeRumalCard.webp";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="mb-16 mt-12">
      <section className="featured-item bg-fixed text-white py-20">
        <div className="md:flex justify-center items-center bg-slate-500/40 pb-20 pt-12 px-36">
          <div>
            <img  className="w-[1200px] h-[200px]" src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where Can i get some?</p>
            <p>
              🧵 Not just a handkerchief — it’s a timeless expression of style,
              culture, and heritage. Crafted by skilled hands with unmatched
              precision, our featured rumal is more than just fabric — it’s a
              story woven through every thread. From intricate embroidery to
              premium materials, it captures the essence of traditional
              craftsmanship while embracing a modern, elegant flair. Whether you
              gift it or wear it, this rumal speaks volumes about your
              appreciation for artistry and authenticity.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
