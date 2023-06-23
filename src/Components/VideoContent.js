import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuListBox } from "./MenuListBox";
import { videoContentMenuItemData } from "./MenuListItemData";
import { useVideo } from "./VideoContext";

export const VideoContent = ({ item }) => {
  const [visibililty, setVisibility] = useState("hidden");
  const [listBoxDisplay, setListBoxDisplay] = useState("none");

  const { dispatch } = useVideo();

  const iconStyle = { visibility: visibililty };
  const listBoxStyle = { display: listBoxDisplay };

  return (
    <div
      onMouseOver={() => setVisibility("visible")}
      onMouseLeave={() => setVisibility("hidden")}
      tabIndex="0"
      className="content"
    >
      <Link className="content__link" to={`/video/${item.id}`}>
        <img
          onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: item })}
          className="img-responsive"
          src={item.thumbnail}
          alt="video"
        />
      </Link>
      <div className="content__details">
        <Link className="content__link" to={`/video/${item.id}`}>
          <div
            onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: item })}
            className="content__details__title"
          >
            {item.title}
          </div>
        </Link>
        <MenuListBox
          items={videoContentMenuItemData}
          video={item}
          listBoxStyle={listBoxStyle}
          className="vid-menu menu-listbox"
        />
        <button
          onClick={() => {
            if (listBoxDisplay === "block") {
              setListBoxDisplay("none");
            } else {
              setListBoxDisplay("block");
            }
          }}
          className="content__details__menu-button"
        >
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};
