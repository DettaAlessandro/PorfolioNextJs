import LeftVideo from "./video-left";
import RightVideo from "./video-right";


type VideoProps = {
    videoId: string;
    title: string;
    description: string;
  };
  
  type GalleryProps = {
    videos: VideoProps[];
  };
    const VideoGallery: React.FC<GalleryProps> = ({ videos }) => {
    return (
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="space-y-8">
          {videos.map((video, index) =>
            index % 2 === 0 ? (
              <LeftVideo key={video.videoId} {...video} />
            ) : (
              <RightVideo key={video.videoId} {...video} />
            )
          )}
        </div>
      </section>
    );
  };
  export default VideoGallery;