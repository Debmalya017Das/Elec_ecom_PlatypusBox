import Featured from "./sections/Featured";
import Hero from "./sections/Banner";
import ProductGrid from "./sections/Products";
import Bestselling from "./sections/Bestselling";
import Categories from "./sections/Categories";
import FlashSale from "./sections/Flashsale";

function Homepage (){
    return (
        <>
            <Hero/>
            <FlashSale/>
            <div className="my-2 mx-24"><hr /></div>
            <Categories/>
            <div className="my-2 mx-24"><hr /></div>
            <Bestselling/>
            <ProductGrid/>
            <Featured/>
        </>
        
    )
}

export default Homepage;