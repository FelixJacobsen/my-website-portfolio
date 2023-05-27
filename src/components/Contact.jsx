import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/2a39005d-36d3-47b8-b9cd-7c6c8df9aca5"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-text-red text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email
            <HiArrowNarrowRight className="inline" />
            felix.jacobsen@iths.se
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-text-red hover:border-text-red px-4 py-3 my-8 mx-auto flex items-center ">
          Let's connect!
        </button>
      </form>
    </div>
  );
};

export default Contact;
