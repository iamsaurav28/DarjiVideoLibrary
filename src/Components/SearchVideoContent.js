import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuListBox } from "./MenuListBox";
import { searchVideoContentMenuItemData } from "./MenuListItemData";

export const SearchVideoContent = ({ item }) => {
  const [visibililty, setVisibility] = useState("hidden");
  const [listBoxDisplay, setListBoxDisplay] = useState("none");
  const listBoxStyle = { display: listBoxDisplay };

  const iconStyle = { visibility: visibililty };

  return (
    <div>
      <div
        onMouseOver={() => setVisibility("visible")}
        onMouseLeave={() => setVisibility("hidden")}
        className="search-content"
        key={item.id}
      >
        <Link to={`/video/${item.id}`}>
          <img
            className="search-video-content__img"
            src={item.thumbnail}
            alt="thumbnail"
          />
        </Link>
        <Link className="content__link" to={`/video/${item.id}`}>
          <div style={{ width: "35rem", marginRight: "0.5rem" }}>
            {item.title}
          </div>
        </Link>
        <MenuListBox
          items={searchVideoContentMenuItemData}
          video={item}
          listBoxStyle={listBoxStyle}
          className="s-menu menu-listbox"
        />
        <button
          onClick={() => {
            if (listBoxDisplay === "block") {
              setListBoxDisplay("none");
            } else {
              setListBoxDisplay("block");
            }
          }}
          className="search-content__menu-button"
        >
          <i style={iconStyle} className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};
