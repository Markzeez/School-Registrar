// ContactForm.tsx
import React from 'react';
import { Facebook, Twitter, Linkedin, PhoneCall } from 'lucide-react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';

const ContactForm: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-[#487ad6] px-6 py-12"> {/* Changed text color to #487ad6 */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mt-[50px] mb-2 text-[#Fb6d39]">Contact US</h2> {/* Changed heading to #Fb6d39 */}
          <p className="mb-8 text-gray-600">We are looking forward to hearing from you soon</p> {/* Kept gray for subtlety */}

          <div className="grid md:grid-cols-2 gap-10">
            {/* Address and Socials */}
            <div>
              <div className="mb-6">
                <p className="font-semibold mb-1 text-[#487ad6]">ADDRESS</p> {/* Changed text color to #487ad6 */}
                <p className="text-gray-600"> {/* Kept gray for subtlety */}
                  ClassPulse<br />
                  22 Kosoko street<br />
                  Keke Agege<br />
                  Lagos, State<br />
                  Nigeria
                </p>
              </div>

              <div className="flex space-x-4 mt-4">
                <Facebook className="text-[#487ad6] hover:text-[#B6FA82] cursor-pointer" /> {/* Changed icon and hover colors */}
                <Twitter className="text-[#487ad6] hover:text-[#B6FA82] cursor-pointer" />
                <Linkedin className="text-[#487ad6] hover:text-[#B6FA82] cursor-pointer" />
                <PhoneCall className="text-[#487ad6] hover:text-[#B6FA82] cursor-pointer" />
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-[#EFEDEE] p-3 rounded text-black" /> {/* Changed input background to #EFEDEE */}
                <input type="email" placeholder="Email" className="bg-[#EFEDEE] p-3 rounded text-black" />
                <input type="text" placeholder="Phone" className="bg-[#EFEDEE] p-3 rounded text-black" />
                <input type="text" placeholder="Address" className="bg-[#EFEDEE] p-3 rounded text-black" />
              </div>
              <textarea placeholder="Message" className="bg-[#EFEDEE] p-3 rounded w-full h-32 text-black"></textarea>
              <button type="submit" className="bg-[#Fb6d39] text-white px-6 py-2 rounded hover:bg-[#B6FA82] hover:text-[#Fb6d39]">DONE</button> {/* Changed button colors */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;