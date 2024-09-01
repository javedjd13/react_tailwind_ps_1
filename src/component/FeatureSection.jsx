import {
  faCameraRetro,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeatureSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#111111] text-white rounded-lg shadow-md hover:shadow-[0_0_40px_#007cfff0] text-center">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon size="2xl" icon={faCameraRetro} />
            </div>

            <h3 className="text-2xl font-bold mb-2">Captivating Videos</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded-full mt-4">
              Learn More
            </button>
          </div>

          <div className="p-8 bg-[#111111] text-white rounded-lg shadow-md hover:shadow-[0_0_40px_#007cfff0] text-center">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon size="2xl" icon={faPenToSquare} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Safe Transactions</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded-full mt-4">
              Learn More
            </button>
          </div>

          <div className="p-8 bg-[#111111] text-white rounded-lg shadow-md hover:shadow-[0_0_40px_#007cfff0] text-center">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon size="2xl" icon={faPenToSquare} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Experience Reality</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded-full mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
