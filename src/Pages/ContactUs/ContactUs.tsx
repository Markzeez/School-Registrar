// ContactForm.tsx
import React from 'react';
import { Facebook, Twitter, Linkedin, PhoneCall } from 'lucide-react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';

const ContactForm: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white text-black px-6 py-12 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mt-[50px] mb-2">CONTACT US</h2>
        <p className="mb-8 text-gray-400">We are looking forward to hearing from you soon</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Address and Socials */}
          <div>
            <div className="mb-6">
              <p className="font-semibold mb-1">ADDRESS</p>
              <p className="text-gray-400">
                ClassPulse<br />
                22 Kosoko street<br />
                Keke Agege<br />
                Lagos, State<br />
                Nigeria
              </p>
            </div>

            <div className="flex space-x-4 mt-4">
              <Facebook className="text-black hover:text-blue-500 cursor-pointer" />
              <Twitter className="text-black hover:text-blue-400 cursor-pointer" />
              <Linkedin className="text-black hover:text-blue-300 cursor-pointer" />
              <PhoneCall className="text-black hover:text-green-400 cursor-pointer" />
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-blue-100 p-3 rounded text-black" />
              <input type="email" placeholder="Email" className="bg-blue-100 p-3 rounded text-black" />
              <input type="text" placeholder="Phone" className="bg-blue-100 p-3 rounded text-black" />
              <input type="text" placeholder="Address" className="bg-blue-100 p-3 rounded text-black" />
            </div>
            <textarea placeholder="Message" className="bg-blue-100 p-3 rounded w-full h-32 text-black"></textarea>
            <button type="submit" className="bg-blue-300 text-white px-6 py-2 rounded hover:bg-blue-500">DONE</button>
          </form>
        </div>

       
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;
