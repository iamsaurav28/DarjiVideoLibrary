import { NavigationBar } from "./NavigationBar";
import { useVideo } from "./VideoContext";
import { HistoryContent } from "./HistoryContent";
import { useToast } from "./ToastContext";

export const History = () => {
  const {
    state: { history }
  } = useVideo();

  const {
    toastState: { historyToastVisibility, historyToastText }
  } = useToast();

  return (
    <div className="container">
      <NavigationBar />
      <div style={{ width: "80%" }}>
        <div style={{ fontSize: "1.5rem", margin: "2rem auto" }}>History</div>
        <div className="history-container">
          {history.map((item) => (
            <HistoryContent key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div style={{ visibility: historyToastVisibility }} className="toast">
        <div className="toast__body">{historyToastText}</div>
      </div>
    </div>
  );
};
