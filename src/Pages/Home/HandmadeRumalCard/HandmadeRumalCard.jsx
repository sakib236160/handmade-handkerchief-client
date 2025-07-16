import handmadeRumalCard from "../../../assets/home/handmadeRumalCard2.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import handmadeRumalCard from "../../../assets/home/handmadeRumalCard.webp";

const HandmadeRumalCard = () => {
  return (
    <>
     {/* <SectionTitle
  heading="Handmade Rumals"
  subHeading="Elegance in every stitch"
/> */}
    <div
      className="bg-cover bg-center py-24 px-4 mb-16 mt-15"
      style={{ backgroundImage: `url(${handmadeRumalCard})` }}
    >
      {/* Dark transparent box */}
      <div className="bg-white/70 text-yellow-800 max-w-4xl mx-auto text-center p-10 rounded shadow-lg">
        <h2 className="text-3xl font-serif uppercase mb-4">Handmade Rumals</h2>
        <p>
          Discover elegance in every stitch. Our handcrafted rumals are designed to reflect your personal style and preserve timeless tradition with a touch of modern flair.
        </p>
      </div>
    </div>
    </>
  );
};

export default HandmadeRumalCard;

