import React from "react";

interface Props {
  videoUrl: string; // Update the prop name to reflect that it's a video URL
  title: string;
  description: string;
}

const PodcastCard = ({ videoUrl, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {/* Embed YouTube video */}
      <div className="w-full h-56">
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
