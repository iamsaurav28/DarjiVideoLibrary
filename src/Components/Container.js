import { NavigationBar } from "./NavigationBar";
import { VideoContainer } from "./VideoContainer";
import { useToast } from "./ToastContext";

export const Container = () => {
  const {
    toastState: { videoToastVisibility, videoToastText }
  } = useToast();

  return (
    <div className="container">
      <NavigationBar />
      <VideoContainer />
      <div style={{ visibility: videoToastVisibility }} className="toast">
        <div className="toast__body">{videoToastText}</div>
      </div>
    </div>
  );
};
