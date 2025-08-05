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
        <form onSubmit={handleSubscribe} className="flex border border-white p-1 rounded-md overflow-hidden">
  {/* Your input field */}
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-grow p-2 bg-transparent text-white focus:outline-none"
    value={email}
    onChange={e => setEmail(e.target.value)}
    required
  />
  {/* Your subscribe button */}
  <button
    type="submit"
    className="bg-white hover:bg-blue-700 rounded-2xl text-black px-4 py-2 transition-colors duration-200"
  >
    Subscribe
  </button>
</form>
    );
};

export default SchoolUpdatesSubscriptionForm;
