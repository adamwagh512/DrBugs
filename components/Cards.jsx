import React from 'react';
import Image from 'next/image';

const Cards = ({ imageSrc, title, description }) => {
    return (
        <div className="w-full md:w-1/3 p-4">
          <div className="border border-gray-300 rounded-lg p-4">
            {/* Use the next/image component */}
            <Image
              src={imageSrc}
              alt={title}
              width={400} // Set the desired width
              height={300} // Set the desired height
              layout="responsive" // Make the image responsive
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      );
    };

export default Cards;
