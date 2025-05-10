import axios from 'axios';
import React, { useState } from 'react';

const SchoolUpdatesSubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/subscribe", { email });
            alert("You have successfully subscribed to school updates!");
            setEmail('');
        } catch (error) {
            console.error("Error subscribing: ", error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4 rounded-lg bg-white ">
            
            <form onSubmit={handleSubscribe}>
                <div className="flex flex-row items-center space-x-2">
                <p className="text-xs text-gray-700 mb-3">
                Subscribe to receive updates and important announcements directly to your email.
            </p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example123@example.com"
                        required
                        className="w-[320px] px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SchoolUpdatesSubscriptionForm;
