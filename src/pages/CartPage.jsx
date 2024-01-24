import React from 'react'

const CartPage = () => {
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold mb-4 text-center">Your Shopping Cart</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Product Card 1 --> */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                    <img src="product1.jpg" alt="Product 1" className="w-32 h-32 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold mb-2">Product 1</h2>
                    <p className="text-gray-600">Brand: XYZ</p>
                    <label className="text-gray-600 mt-2">Quantity:</label>
                    <div className="flex items-center mt-1">
                        <button className="text-gray-500 focus:outline-none">-</button>
                        <p className="w-8 text-center border border-gray-300 mx-2">6</p>
                        <button className="text-gray-500 focus:outline-none" >+</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between w-full">
                        <p className="text-lg font-semibold text-blue-600">$19.99</p>
                        <button className="text-red-500">Remove</button>
                    </div>
                </div>

                {/* <!-- Product Card 2 --> */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                    <img src="product2.jpg" alt="Product 2" className="w-32 h-32 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold mb-2">Product 2</h2>
                    <p className="text-gray-600">Brand: ABC</p>
                    <label className="text-gray-600 mt-2">Quantity:</label>
                    <div className="flex items-center mt-1">
                        <button className="text-gray-500 focus:outline-none">-</button>
                        <p className="w-8 text-center border border-gray-300 mx-2">6</p>
                        <button className="text-gray-500 focus:outline-none" >+</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between w-full">
                        <p className="text-lg font-semibold text-blue-600">$24.99</p>
                        <button className="text-red-500">Remove</button>
                    </div>
                </div>

                {/* <!-- Add more product cards as needed --> */}
            </div>

            {/* <!-- Subtotal Section --> */}
            <div className="m-8 flex flex-row sm:flex-row justify-between">
                <p className="text-xl font-semibold mb-2 sm:mb-0">Subtotal:</p>
                <p className="text-lg font-semibold text-blue-600 ml-4">$44.98</p>
            </div>

            <div className="flex justify-center flex-col space-y-4">
                <button className="bg-blue-800 text-white px-6 py-2 mt-4 w-auto rounded-md sm:w-full sm:mt-0 sm:mx-0" >Checkout</button>
                <p className="text-center text-blue-600 cursor-pointer">Continue Shopping</p>
            </div>

        </div>
    )
}

export default CartPage