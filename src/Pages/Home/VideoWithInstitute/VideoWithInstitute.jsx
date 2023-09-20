import React, { useRef } from "react";

const VideoWithMadrasah = () => {
  const videoRefs = useRef([]);

  const videos = [
    {
      src: "https://www.youtube.com/embed/_r58G5iM_NU",
      title: "বাংলাদেশের জাতীয় সংগীত, আমার সোনার বাংলা, আমি তোমায় ভালোবাসি",
    },
    {
      src: "https://www.youtube.com/embed/_r58G5iM_NU",
      title: "বাংলাদেশের জাতীয় সংগীত, আমার সোনার বাংলা, আমি তোমায় ভালোবাসি",
    },
    {
      src: "https://www.youtube.com/embed/_r58G5iM_NU",
      title: "বাংলাদেশের জাতীয় সংগীত, আমার সোনার বাংলা, আমি তোমায় ভালোবাসি",
    },
  ];

  const handleVideoPlay = (index) => {
    const iframe = videoRefs.current[index];

    if (iframe) {
      const player = new window.YT.Player(iframe, {
        events: {
          onReady: (event) => {
            const isPlaying = event.target.getPlayerState() === window.YT.PlayerState.PLAYING;
            if (isPlaying) {
              event.target.pauseVideo();
            } else {
              event.target.playVideo();
            }
          },
        },
      });
    }
  };

  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="w-full lg:w-6/12 mx-auto py-3 mb-10 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Video GALLERY</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div className="md:col-span-1" key={index}>
            <div className="bg-gray-200 p-4 rounded-lg">
              <iframe
                title={video.title}
                width="100%"
                height="200"
                src={video.src}
                ref={(el) => (videoRefs.current[index] = el)}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <h3
                className="hover:underline hover:cursor-pointer hover:text-red-500 mt-2"
                onClick={() => handleVideoPlay(index)}
              >
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoWithMadrasah;
