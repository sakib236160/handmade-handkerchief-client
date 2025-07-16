import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularRumalItem from "../../Shared/PopularRumalItem/PopularRumalItem";

const PopularPicks = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('rumal_products.json')
        .then(res => res.json())
        .then(data=> {
            const popularItems = data.filter(item =>item.category === 'embroidered rumal');
            setProducts(popularItems)
        })
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Picks"
                subHeading="PopularPicks"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    products.map(product => <PopularRumalItem key={product._id} product={product}></PopularRumalItem>)
                }
            </div>
        </section>
    );
};

export default PopularPicks;