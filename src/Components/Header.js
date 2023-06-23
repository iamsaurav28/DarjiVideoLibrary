import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useVideo } from "./VideoContext";

export const Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useVideo();

  return (
    <header>
      <Link className="header__link" to="/">
        <div className="logo">
          Video <i className="fas fa-video"></i> Station
        </div>
      </Link>

      <div className="search-container">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="search-container__search-box"
          type="text"
          placeholder="Search"
        />
        <button
          onClick={() => {
            if (searchText.length > 0) {
              dispatch({ type: "SEARCH_VIDEOS", payload: searchText });
              navigate("/searchvideos", { replace: true });
            }
          }}
          className="search-container__button"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
};

