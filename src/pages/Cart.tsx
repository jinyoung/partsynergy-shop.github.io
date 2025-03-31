
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Trash2, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const { items, total } = state;

  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={items.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="pb-4">Product</th>
                        <th className="pb-4 text-center">Quantity</th>
                        <th className="pb-4 text-right">Price</th>
                        <th className="pb-4 w-10"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="py-4">
                            <div className="flex items-center">
                              <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden mr-4 shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <Link 
                                  to={`/product/${item.id}`}
                                  className="font-medium text-gray-800 hover:text-ask-blue"
                                >
                                  {item.name}
                                </Link>
                                <p className="text-sm text-gray-500">{item.category}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center justify-center">
                              <button
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="mx-3 w-8 text-center">{item.quantity}</span>
                              <button
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                aria-label="Increase quantity"
                                disabled={item.quantity >= item.stock}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 text-right">
                            <div>
                              <p className="font-medium">₩{(item.price * item.quantity).toLocaleString()}</p>
                              <p className="text-sm text-gray-500">₩{item.price.toLocaleString()} each</p>
                            </div>
                          </td>
                          <td className="py-4 pl-4">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-ask-blue hover:underline"
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4 pb-2 border-b">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₩{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>₩3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>₩{Math.round(total * 0.1).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₩{(total + 3000 + Math.round(total * 0.1)).toLocaleString()}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-ask-blue text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-ask-blue/90 transition-colors"
                >
                  <ShoppingBag size={20} />
                  <span>Proceed to Checkout</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link 
                to="/products"
                className="inline-flex items-center space-x-2 bg-ask-blue text-white px-6 py-3 rounded-lg hover:bg-ask-blue/90 transition-colors"
              >
                <span>Browse Products</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
