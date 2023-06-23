import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuListBox } from "./MenuListBox";
import { likedVideoContentMenuItemData } from "./MenuListItemData";

export const LikedVideoContent = ({ item }) => {
  const [visibililty, setVisibility] = useState("hidden");
  const [listBoxDisplay, setListBoxDisplay] = useState("none");
  const listBoxStyle = { display: listBoxDisplay };

  const iconStyle = { visibility: visibililty };
  return (
    <div>
      <div
        onMouseOver={() => setVisibility("visible")}
        onMouseLeave={() => setVisibility("hidden")}
        className="liked-video-content"
        key={item.id}
      >
        <Link to={`/video/${item.id}`}>
          <img
            className="liked-video-content__img"
            src={item.thumbnail}
            alt="thumbnail"
          />
        </Link>
        <Link className="content__link" to={`/video/${item.id}`}>
          <div style={{ width: "40rem", textAlign: "left" }}>{item.title}</div>
        </Link>
        <MenuListBox
          items={likedVideoContentMenuItemData}
          video={item}
          listBoxStyle={listBoxStyle}
          className="lv-menu menu-listbox"
        />
        <button
          onClick={() => {
            if (listBoxDisplay === "block") {
              setListBoxDisplay("none");
            } else {
              setListBoxDisplay("block");
            }
          }}
          className="liked-video-content__menu-button"
        >
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>

      <hr style={{ width: "75%", margin: "0.5rem 0" }} />
    </div>
  );
};
