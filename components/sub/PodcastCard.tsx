import React from "react";

interface Props {
  videoUrl: string;
  title: string;
  description: string;
  totalCarsNumber: number;
}

const PodcastCard = ({ videoUrl, title, description, totalCarsNumber }: Props) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-gray-900"
      style={{ width: totalCarsNumber <= 1 ? '60%' : '100%' }} // Adjust width based on totalCarsNumber
    >
      {/* Container for video */}
      <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Content section */}
      <div className="p-4">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
