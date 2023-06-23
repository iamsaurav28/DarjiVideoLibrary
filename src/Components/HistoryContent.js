import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuListBox } from "./MenuListBox";
import { historyContentMenuItemData } from "./MenuListItemData";

export const HistoryContent = ({ item }) => {
  const [visibililty, setVisibility] = useState("hidden");
  const [listBoxDisplay, setListBoxDisplay] = useState("none");
  const listBoxStyle = { display: listBoxDisplay };

  const iconStyle = { visibility: visibililty };

  return (
    <div>
      <div
        onMouseOver={() => setVisibility("visible")}
        onMouseLeave={() => setVisibility("hidden")}
        className="history-content"
        key={item.id}
      >
        <Link to={`/video/${item.id}`}>
          <img
            className="history-content__img"
            src={item.thumbnail}
            alt="thumbnail"
          />
        </Link>
        <Link className="content__link" to={`/video/${item.id}`}>
          <div style={{ width: "25rem", marginRight: "0.5rem" }}>
            {item.title}
          </div>
        </Link>
        <MenuListBox
          items={historyContentMenuItemData}
          video={item}
          listBoxStyle={listBoxStyle}
          className="h-menu menu-listbox"
        />
        <button
          onClick={() => {
            if (listBoxDisplay === "block") {
              setListBoxDisplay("none");
            } else {
              setListBoxDisplay("block");
            }
          }}
          className="history-content__menu-button"
        >
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};
