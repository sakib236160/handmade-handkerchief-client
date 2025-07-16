

// const PopularRumalItem = ({product}) => {
//     const { name, description, image, price } = product;
//     return (
//         <div className='flex space-x-2 mt-15'>
//             <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px] h-[100px]' src={image} alt="" />
//             <div>
//                 <h3 className='uppercase'>{name}----------</h3>
//                 <p>{description}</p>
//             </div>
//             <p className='text-yellow-800'>${price}</p>
//         </div>
//     );
// };

// export default PopularRumalItem;


import { motion } from "framer-motion";

const PopularRumalItem = ({ product }) => {
  const { name, description, image, price } = product;

  return (
    <motion.div
      className="flex space-x-4 items-center mt-8 bg-white p-4 rounded-md shadow-md"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image slide from left */}
      <motion.img
        src={image}
        alt={name}
        className="w-[100px] h-[100px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Text slide from top */}
      <motion.div
        className="flex-1"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="uppercase font-bold text-gray-800 mb-1">
          {name} <span className="text-yellow-600">----------</span>
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </motion.div>

      {/* Price slide from bottom */}
      <motion.p
        className="text-yellow-800 font-medium whitespace-nowrap"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        ${price}
      </motion.p>
    </motion.div>
  );
};

export default PopularRumalItem;
