import { useState } from "react";
import { Link } from "react-router-dom";
import { watchLaterContentMenuItemData } from "./MenuListItemData";
import { MenuListBox } from "./MenuListBox";

export const WatchLaterContent = ({ item }) => {
  const [visibililty, setVisibility] = useState("hidden");
  const [listBoxDisplay, setListBoxDisplay] = useState("none");
  const listBoxStyle = { display: listBoxDisplay };

  const iconStyle = { visibility: visibililty };

  return (
    <div>
      <div
        onMouseOver={() => setVisibility("visible")}
        onMouseLeave={() => setVisibility("hidden")}
        className="watch-later-content"
        key={item.id}
      >
        <div>
          <Link to={`/video/${item.id}`}>
            <img
              className="watch-later-content__img"
              src={item.thumbnail}
              alt="thumbnail"
            />
          </Link>
        </div>
        <Link className="content__link" to={`/video/${item.id}`}>
          <div style={{ width: "40rem", textAlign: "left" }}>{item.title}</div>
        </Link>
        <MenuListBox
          items={watchLaterContentMenuItemData}
          video={item}
          listBoxStyle={listBoxStyle}
          className="wl-menu menu-listbox"
        />
        <button
          onClick={() => {
            if (listBoxDisplay === "block") {
              setListBoxDisplay("none");
            } else {
              setListBoxDisplay("block");
            }
          }}
          className="watch-later-content__menu-button"
        >
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>

      <hr style={{ width: "75%", margin: "0.5rem 0" }} />
    </div>
  );
};
