import { VideoContent } from "./VideoContent";
import { useVideo } from "./VideoContext";

export const VideoContainer = () => {
  const {
    state: { videoList }
  } = useVideo();

  return (
    <div className="video-container">
      {videoList.map((item) => (
        <VideoContent key={item.id} item={item} />
      ))}
    </div>
  );
};
