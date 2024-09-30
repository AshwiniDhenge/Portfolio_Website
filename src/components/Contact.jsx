


// import React from 'react';
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <div className="bg-black text-white py-20" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
//           Contact Me
//         </h2>
//         <div className="flex flex-col md:flex-row items-start md:space-x-12">
//           <div className="flex-1">
//             <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
//               Let's Talk
//             </h3>
//             <div className='mb-4 mt-8 flex items-center'>
//               <FaEnvelope className='text-green-400 mr-2 text-2xl' />
//               <a href="mailto:youremail@example.com" className='hover:underline'>
//                 ashwinidhenge121@gmail.com
//               </a>
//             </div>
//             <div className='mb-4 flex items-center'>
//               <FaPhone className='text-green-400 mr-2 text-2xl' />
//               <span>+91 7264851913</span>
//             </div>
//             <div className='mb-4 flex items-center'>
//               <FaMapMarkedAlt className='text-green-400 mr-2 text-2xl' />
//               <span>Nagpur, Maharashtra, India</span>
//             </div>
//           </div>
//           <div className='flex-1 w-full'>
//             <form className='space-y-4'>
//               <div>
//                 <label htmlFor="name" className='block mb-2 text-lg'>Your Name</label>
//                 <input
//                   type="text"
//                   className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 shadow-lg transition duration-200'
//                   placeholder='Enter Your Name'
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className='block mb-2 text-lg'>Email</label>
//                 <input
//                   type="email"
//                   className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 shadow-lg transition duration-200'
//                   placeholder='Enter Your Email'
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className='block mb-2 text-lg'>Message</label>
//                 <textarea
//                   className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 shadow-lg transition duration-200'
//                   rows="5"
//                   placeholder='Enter Your Message'
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-full shadow-lg'
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// ------------------------------------------------------------------------------------------


import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Function to handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '3988f4d8-47d0-4375-a9f3-884e5d45c73a', // Replace with your Web3Forms access key
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          <div className="flex-1">
            <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Let's Talk
            </h3>
            <div className='mb-4 mt-8 flex items-center'>
              <FaEnvelope className='text-green-400 mr-2 text-2xl' />
              <a href="mailto:youremail@example.com" className='hover:underline'>
                ashwinidhenge121@gmail.com
              </a>
            </div>
            <div className='mb-4 flex items-center'>
              <FaPhone className='text-green-400 mr-2 text-2xl' />
              <span>+91 7264851913</span>
            </div>
            <div className='mb-4 flex items-center'>
              <FaMapMarkedAlt className='text-green-400 mr-2 text-2xl' />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            {/* Form Section */}
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block mb-2 text-lg'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 shadow-lg transition duration-200'
                  placeholder='Enter Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2 text-lg'>Email</label>
                <input
                  type="email"
                  name="email"
                  className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 shadow-lg transition duration-200'
                  placeholder='Enter Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2 text-lg'>Message</label>
                <textarea
                  name="message"
                  className='w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 shadow-lg transition duration-200'
                  rows="5"
                  placeholder='Enter Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-full shadow-lg'
              >
                Send
              </button>
              {/* Display status message */}
              {status && <p className='mt-4 text-green-400'>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
