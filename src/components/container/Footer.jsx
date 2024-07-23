import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-white text-xs leading-7">
          Our platform offers personalized mental health resources curated specifically for women, addressing their unique needs and experiences.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
            Tailored Resources
            </a>
            <a href="" className="text-sm hover:underline">
            Supportive Community:
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              Expert Guidance
            </a>
            <a href="" className="text-sm hover:underline">
            Wellness Tools
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">empowerher@gmail.com</div>
          <div className="text-sm">+918279762451</div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/i/flow/login" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="https://in.pinterest.com/" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
