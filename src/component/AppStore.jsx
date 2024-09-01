import React from "react";

function AppStore() {
  return (
    <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
      <div className="text-center space-y-6 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray mb-4">
          Get Started with our app
        </h1>
        <p className="text-gray mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Similique magnam harum accusantium odit?
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="#"
            className="bg-gray text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center"
          >
            <img
              src="https://metaverse-tcj.netlify.app/assets/app_store-BqgDInZP.png"
              alt="App Store"
              className="mr-2 max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
          <a
            href="#"
            className="text-black font-bold py-3 px-4 rounded inline-flex items-center"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
              alt="Google Play"
              className="mr-2 max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppStore;
