import ProductCard from "../../../components/Productcard";
import dslr from "../home_assets/dslr.png";
import merc from "../home_assets/merc.png";
import cesar from "../home_assets/cesar.jpg";
import rect from '../home_assets/rect.png';
import asus from "../home_assets/asus.png"
const ProductGrid = () => {
  const products = [
    {
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4,
      reviews: 95,
      image: dslr,
      isNew: false
    },
    {
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 4,
      reviews: 325,
      image: asus,
      isNew: false
    },
    {
      name: "Kids Electric Car",
      price: 960,
      rating: 5,
      reviews: 65,
      image: merc,
      isNew: true,
      colors: ['#FF0000', '#FF6B6B']
    },
      {
      name: "Dog Food",
      price: 960,
      rating: 5,
      reviews: 65,
      image: cesar,
      isNew: false,
      colors: ['#FF0000', '#FF6B6B']
    },
  ];

  return (
    <>
    <div className="w-full max-w-7xl mx-auto p-4 font-montserrat py-12">
        <div className="product-grid"> 
          <div className="inline-flex flex-col">
            <div className='flex items-center'>
                <img src={rect} alt="" className='h-10 w-5'/>
                <span className="text-red-500 font-bold text-xl px-3 py-1 ">
                Our Products
                </span>
            </div>           
            <span className="text-3xl my-8">Explore Our Products</span>
          </div>
        </div>
        <div className="container mx-auto p-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
            <ProductCard key={index} product={product} />
            ))}
        </div>
        <button className="mt-8 mx-auto block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            View All Products
        </button>
        </div>
     </div>
    </>
    
  );
};

export default ProductGrid;
