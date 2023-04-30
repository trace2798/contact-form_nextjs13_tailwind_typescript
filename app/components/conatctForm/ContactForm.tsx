"use client";
import Image from "next/image";
import React from "react";

export const ContactForm: React.FC = () => {
  return (
    <section>
      <div className="relative flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
        <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center">
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="text-4xl text-black">Let's get started!</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Complete the details below so I can process your request and
                  then schedule a time to discuss your goals.
                </p>
              </div>
            </div>
            {/* Formspree end point goes here */}
            <form action="https://formspree.io/f/xjvdlkjv" method="POST">
              <div className="mt-4 space-y-6">
                <div>
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    htmlFor="name"
                  >
                    First name
                  </label>
                  <input
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Your name"
                    name="name"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    htmlFor="company"
                  >
                    What is the name of your company / organisation?
                  </label>
                  <input
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Company name"
                    name="company name"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    htmlFor="email"
                  >
                    How shall we contact you?
                  </label>
                  <input
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="email@example.com"
                    autoComplete="off"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <div>
                    <label
                      className="block mb-3 text-sm font-medium text-gray-600"
                      htmlFor="message"
                      //   name="message"
                    >
                      Project details
                    </label>
                    <div className="mt-1">
                      <textarea
                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="What are you working on?"
                        rows={4}
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <button
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    type="submit"
                  >
                    Submit your request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden bg-white lg:block lg:flex-1 lg:relative sm:contents">
          <div className="absolute inset-0 object-cover w-full h-full bg-white">
            <Image
              className="object-center w-full h-auto bg-gray-200"
              src="/images/undraw_contact.png"
              alt=""
             fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};
