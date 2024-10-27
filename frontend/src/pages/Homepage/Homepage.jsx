import Featured from "./sections/Featured";
import Hero from "./sections/Banner";
import ProductGrid from "./sections/Products";
import Bestselling from "./sections/Bestselling";
import Categories from "./sections/Categories";

function Homepage (){
    return (
        <>
            <Hero/>
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