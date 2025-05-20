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
        <div className="max-w-2xl mx-auto p-4 rounded-lg bg-white mt-[-20px] ">
            
            <form onSubmit={handleSubscribe}>
                <div className="flex flex-col items-start space-x-2 space-y-3">
                <p className="text-xs text-black mb-1">
                Subscribe to receive updates and important<br/>announcements
                 directly to your email.
            </p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example123@example.com"
                        required
                        className="w-[250px] px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm text-white bg-[#487ad6] hover:bg-blue-500 hover:text-black rounded-md transition"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SchoolUpdatesSubscriptionForm;
