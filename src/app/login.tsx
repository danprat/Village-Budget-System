import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="username">Username/Email</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="username" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="password" id="password" required />
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Login</button>
                </form>
                <p className="text-center mt-4">
                    <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
