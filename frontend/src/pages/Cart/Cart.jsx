import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link,useLocation } from 'react-router-dom';

function CartPage() {
  const location = useLocation();
  const pathNames = location.pathname.split('/').filter(x => x);
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Classic White T-Shirt",
      price: 29.99,
      discountedPrice: 24.99,
      image: "/api/placeholder/100/100",
      quantity: 1
    },
    {
      id: 2,
      title: "Denim Jeans",
      price: 89.99,
      discountedPrice: 79.99,
      image: "/api/placeholder/100/100",
      quantity: 1
    }
  ]);

  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1
  });

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setQuantities(prev => ({ ...prev, [id]: quantity }));
  };

  const subtotal = cart.reduce((acc, item) => {
    return acc + (item.discountedPrice || item.price) * (quantities[item.id] || 1);
  }, 0);

  const deliveryFee = subtotal >= 500 ? 0 : 20;
  const total = subtotal + deliveryFee;

  // Breadcrumb component
  const Breadcrumb = () => (
   <div className="text-gray-600 mb-6  font-montserrat px-12 ">
        <span 
          className="hover:text-gray-800 cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          Home
        </span>
        {pathNames.map((name, index) => (
          <React.Fragment key={name}>
            <span className="mx-2">/</span>
            <span 
              className={`hover:text-gray-800 cursor-pointer`}
              onClick={() => {
                const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
                window.location.href = routeTo;
              }}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
          </React.Fragment>
        ))}
      </div>
  );

  return (
    <div className="container mx-auto p-4 lg:px-12 my-12 font-montserrat">
      <Breadcrumb />
      
      <table className="w-full mb-8">
        <thead>
          <tr className="border-b">
            <th className="text-left pb-2">Product</th>
            <th className="text-left pb-2">Price</th>
            <th className="text-left pb-2">Quantity</th>
            <th className="text-right pb-2">Subtotal</th>
            <th className="text-right pb-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">Your cart is empty</td>
            </tr>
          ) : (
            cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 mr-4 object-cover" />
                  <span>{item.title}</span>
                </td>
                <td>${item.discountedPrice || item.price}</td>
                <td>
                  <select
                    className="border p-1 rounded"
                    value={quantities[item.id] || 1}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </td>
                <td className="text-right">
                  ${((item.discountedPrice || item.price) * (quantities[item.id] || 1)).toFixed(2)}
                </td>
                <td className="text-right">
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-between mb-8">
       <Link to="/"><button className="border border-black px-4 py-2 rounded hover:bg-gray-100">
          Return To Shop
        </button></Link> 
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex">
            <input 
              type="text" 
              placeholder="Coupon Code" 
              className="border p-2 mr-2 rounded" 
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="border border-gray-200 rounded p-4 w-full md:w-1/3 shadow-sm">
          <h2 className="font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery fee:</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mb-4 pt-2 border-t">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/billing">
            <button 
            className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition-colors"
            onClick={() => alert('Proceeding to checkout...')}
          >
            Proceed to checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;