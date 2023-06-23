import { useVideo } from "./VideoContext";
import { useToast } from "./ToastContext";

export const MenuListItem = ({
  video,
  item: {
    iconClass,
    videoAction,
    itemName,
    toggleAction,
    toastText,
    setTextAction
  }
}) => {
  const { dispatch } = useVideo();
  const { toastDispatch } = useToast();

  return (
    <div
      onClick={() => {
        dispatch({ type: videoAction, payload: video });
        toastDispatch({ type: toggleAction });
        toastDispatch({ type: setTextAction, payload: toastText });
        setTimeout(() => {
          toastDispatch({ type: toggleAction });
        }, 3000);
      }}
      className="menu-listbox__item"
    >
      <i className={iconClass}></i>
      {itemName}
    </div>
  );
};
