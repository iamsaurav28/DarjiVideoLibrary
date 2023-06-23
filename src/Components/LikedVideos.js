import { NavigationBar } from "./NavigationBar";
import { useVideo } from "./VideoContext";
import { LikedVideoContent } from "./LikedVideoContent";
import { useToast } from "./ToastContext";

export const LikedVideos = () => {
  const {
    state: { likedVideos }
  } = useVideo();

  const {
    toastState: { likedVideosToastVisibility, likedVideosToastText }
  } = useToast();

  return (
    <div className="container">
      <NavigationBar />
      <div style={{ width: "80%" }}>
        <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Liked videos</div>
        <div className="liked-videos-container">
          {likedVideos.map((item) => (
            <LikedVideoContent key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div style={{ visibility: likedVideosToastVisibility }} className="toast">
        <div className="toast__body">{likedVideosToastText}</div>
      </div>
    </div>
  );
};
