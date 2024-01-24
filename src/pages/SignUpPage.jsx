import React from 'react'

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-white bg-opacity-75">
            <div className="max-w-md w-full p-6 bg-transparent rounded-md shadow-2xl">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                    Sign Up
                </h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:shadow-outline-blue mb-4"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-700 text-sm">
                    Already a Member?
                    <button className="text-blue-500 ml-1">Log in</button>
                </p>
            </div>
        </div>
    )
}

export default SignUpPage