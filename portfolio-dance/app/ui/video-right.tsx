type VideoProps = {
    videoId: string;
    title: string;
    description: string;
  };

const RightVideo: React.FC<VideoProps> = ({ videoId, title, description }) => (
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
      <div className="md:w-1/2 w-full">
        <iframe
          className="w-full rounded-lg shadow-lg"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:w-1/2 md:pr-6 mt-4 md:mt-0 text-center md:text-left">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
  
  export default RightVideo;