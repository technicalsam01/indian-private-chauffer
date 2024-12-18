import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = () => {
  return (
    <>
      <div className="whate-new-block flex flex-row mt-16">
        <div className="container">
          <div className="heading flex flex-col mb-10">
            {/* Gradient Text */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
              Welcome to Our <strong className='text-primary'>YouTube World!</strong>
            </h1>
            <p className="text-center text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
              Explore captivating videos and stay inspired with our latest content. Join us on an unforgettable journey filled with knowledge, fun, and entertainment!
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 px-4 sm:px-10">
        <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-10">
          {/* Video Section */}
          <div className="flex-shrink-0 w-full sm:w-full md:w-1/2 mt-10 md:mt-0">
            <iframe
              className="w-full h-[315px] sm:h-[315px]"
              src="https://www.youtube.com/embed/VrKwfeikDoo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text Section */}
          <div className="sm:ml-0 md:ml-20 sm:text-base md:text-lg w-full sm:max-w-full md:max-w-lg">
            <h5 className="text-2xl text-black font-bold">Visit our YouTube</h5>
            <p className="text-lg font-medium bg-surface mt-4">
              Don&apos;t miss out! Visit my website to watch my latest YouTube video. Discover exciting content, valuable insights, and engaging entertainment. Click now and join the fun, as I share new ideas and experiences you won&apos;t want to miss!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default YoutubeVideo;
