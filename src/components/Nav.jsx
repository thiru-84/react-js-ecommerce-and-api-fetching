import { useState } from "react";

function Nav({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);
  

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <nav className="py-6 shadow-md">
        <div className="mx-6 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
              <path
                fillRule="evenodd"
                d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="logo font-bold text-lg">
              mystore.<span className="text-yellow-600">co</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="text-gray-700">My Cart ({cart.length})</span>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                // <div className="w-full h-full bg-black">
                //   <div className="absolute right-0 mt-2 w-[375px] bg-white shadow-md rounded-md py-2 border border-gray-200 z-50">
                //     {/* Heading */}
                //     <div className="p-4">
                //       <h5 className="border-b border-slate-300 pb-2">
                //         My Cart ({cart.length})
                //       </h5>
                //     </div>

                //     {/* Card Body */}
                //     <div className="px-4">
                //       {/* if no item */}
                //       {cart.length === 0 ? (
                //         <p className="text-gray-500 text-center">
                //           Your cart is empty
                //         </p>
                //       ) : (
                //         // else
                //         cart.map((cartItem) => (
                //           <div
                //             key={cartItem.id}
                //             className="flex justify-between pt-3 pb-3 border-b border-slate-300"
                //           >
                //             <div className="flex gap-6">
                //               <div className="w-14 h-14 bg-gray-100 rounded-md overflow-hidden">
                //                 <img
                //                   src={cartItem.image}
                //                   alt={cartItem.title}
                //                   width={50}
                //                   height={50}
                //                   className="w-full h-full object-cover"
                //                 />
                //               </div>
                //               <div className="w-[200px]">
                //                 <p className="text-gray-700 font-bold text-sm">
                //                   {cartItem.title}
                //                 </p>
                //                 <p className="text-gray-700 text-green-700 pt-2 text-md font-bold">
                //                   ${cartItem.price}
                //                 </p>
                //               </div>
                //             </div>
                //             <button className="flex h-6 items-center hover:text-red-900 hover:bg-red-100  rounded-full cursor-pointer border border-red-700">
                //               <span
                //                 onClick={() => removeFromCart(cartItem.id)}
                //                 className="text-sm text-red-700 underline px-2 py-1"
                //               >
                //                 Remove
                //               </span>
                //             </button>
                //           </div>
                //         ))
                //       )}
                //     </div>
                //   </div>
                // </div>

                <div className="fixed inset-0 bg-black/80 z-40  flex items-center justify-center">
                  <div className="relative mt-2 w-[400px] h-[375px]  bg-white shadow-md rounded-md py-2 border border-gray-200 z-50 overflow-y-auto">
                    {/* Heading */}
                    <div className="p-4 border-b border-slate-300 pb-2 flex justify-between">
                      <h5 className="">
                        My Cart ({cart.length})
                      </h5>
                      <div onClick={() => setIsOpen(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="px-4">
                      {/* if no item */}
                      {cart.length === 0 ? (
                        <p className="text-gray-500 text-center">
                          Your cart is empty
                        </p>
                      ) : (
                        cart.map((cartItem) => (
                          <div
                            key={cartItem.id}
                            className="flex justify-between pt-3 pb-3 border-b border-slate-300"
                          >
                            <div className="flex gap-6">
                              <div className="w-14 h-14 bg-gray-100 rounded-md overflow-hidden">
                                <img
                                  src={cartItem.image}
                                  alt={cartItem.title}
                                  width={50}
                                  height={50}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="w-[200px]">
                                <p className="text-gray-700 font-bold text-sm">
                                  {cartItem.title}
                                </p>
                                <p className="text-green-700 pt-2 text-md font-bold">
                                  ${cartItem.price}
                                </p>
                              </div>
                            </div>
                            <button className="flex h-6 items-center hover:text-red-900 hover:bg-red-100 rounded-full cursor-pointer border border-red-700">
                              <span
                                onClick={() => removeFromCart(cartItem.id)}
                                className="text-sm text-red-700 underline px-2 py-1"
                              >
                                Remove
                              </span>
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
