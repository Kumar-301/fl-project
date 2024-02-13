import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 py-[10px]">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-5 gap-5 grid-cols-2 sm:grid-cols-3">
        <div className="">
 
          <a href="#" className="text-white font-medium text-[20px] block mb-4">Stack Overflow</a>
    
         <ul className="">
         <li className="text-white mb-2 cursor-pointer">
                Questions
            </li>
            <li className="text-white mb-2 cursor-pointer">
                Help
            </li>
         </ul>
        </div>
        <div>
          <a href="#" className="text-white font-medium text-[20px] block mb-4">Products</a>
          <ul>
          <li className="text-white mb-2 text-[14px] cursor-pointer">
                Teams
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Advertising
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Collectives
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Talent
            </li>
            </ul>
        </div>
        <div>
          <a href="#" className="text-white font-medium text-[20px] block mb-4">Company</a>
          <ul>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                About
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Press
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Work here
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Legal
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Privacy Policy
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Terms and services
            </li>
            <li className="text-white text-[14px] cursor-pointer">
                Contact us
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className="text-white font-medium text-[20px] block mb-4">Stack Exchange Network</a>
          <ul>
          <li className="text-white mb-2 text-[14px] cursor-pointer">
                Technology
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Science
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Profissional
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Bussiness
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                API
            </li>
            <li className="text-white text-[14px] cursor-pointer">
                Data
            </li>
            </ul>
        </div>
        <div>
          <a href="#" className="text-white font-medium text-[20px] block mb-4">Contact us</a>
          <ul>
          <li className="text-white mb-2 text-[14px] cursor-pointer">
                Facebook
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                linkedIn
            </li>
            <li className="text-white mb-2 text-[14px] cursor-pointer">
                Inatagram
            </li>
            <li className="text-white text-[14px] cursor-pointer">
                Twitter
            </li>
          
            </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
