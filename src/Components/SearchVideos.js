import { NavigationBar } from "./NavigationBar";
import { useVideo } from "./VideoContext";
import { SearchVideoContent } from "./SearchVideoContent";
import { useToast } from "./ToastContext";

export const SearchVideos = () => {
  const {
    state: { searchVideos }
  } = useVideo();

  const {
    toastState: { searchVideosToastVisibility, searchVideosToastText }
  } = useToast();

  return (
    <div className="container">
      <NavigationBar />
      {searchVideos.length === 0 && (
        <div style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
          No search results found!!!
        </div>
      )}
      {searchVideos.length > 0 && (
        <div style={{ width: "80%" }}>
          <div className="search-videos-container">
            {searchVideos.map((item) => (
              <SearchVideoContent key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
      <div
        style={{ visibility: searchVideosToastVisibility }}
        className="toast"
      >
        <div className="toast__body">{searchVideosToastText}</div>
      </div>
    </div>
  );
};
