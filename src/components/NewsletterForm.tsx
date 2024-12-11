import React from 'react';

const NewsletterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', (e.target as HTMLFormElement).email.value);
    // Add your logic to handle the form submission here
  };

  return (
    <div className="hidden lg:flex  bg-white mt-8 py-12 px-4 sm:px-6 lg:px-8 border border-gray-300">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
     
        <p className="mt-3 text-lg text-gray-500 whitespace-nowrap">
        Trade Alert - Delivering the latest product trends and industry news straight to your inbox.        </p>
        <form onSubmit={handleSubmit} className="mt-5 flex ">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="rounded-sm appearance-none w-[40vw]  border border-gray-300 px-4 py-4 text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button
            type="submit"
            className="rounded-sm items-center w-[8vw] ml-2 px-4 py-2 border border-transparent text-xl font-semibold  text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;