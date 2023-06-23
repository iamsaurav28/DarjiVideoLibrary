import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <NavLink
        end
        style={{ textDecoration: "none", color: "inherit", width: "inherit" }}
        activeStyle={{ backgroundColor: "grey" }}
        to="/"
      >
        <div className="navigation-bar__item">
          <i className="icon fas fa-home"></i>Home
        </div>
      </NavLink>

      <div className="navigation-bar__item">
        <i className="icon fas fa-compass"></i>Explore
      </div>
      <hr style={{ margin: "0.5rem 0" }} />

      <div className="navigation-bar__item">
        <i className="icon fas fa-photo-video"></i>Library
      </div>

      <NavLink
        style={{ textDecoration: "none", color: "inherit", width: "inherit" }}
        activeStyle={{ backgroundColor: "grey" }}
        to="/history"
      >
        <div className="navigation-bar__item">
          <i className=" icon fas fa-history"></i>History
        </div>
      </NavLink>

      <NavLink
        style={{ textDecoration: "none", color: "inherit", width: "inherit" }}
        activeStyle={{ backgroundColor: "grey" }}
        to="/watchlater"
      >
        <div className="navigation-bar__item">
          <i className="icon fas fa-clock"></i>Watch later
        </div>
      </NavLink>

      <NavLink
        style={{ textDecoration: "none", color: "inherit", width: "inherit" }}
        activeStyle={{ backgroundColor: "grey" }}
        to="/likedVideos"
      >
        <div className="navigation-bar__item">
          <i className="icon fas fa-thumbs-up"></i>Liked videos
        </div>
      </NavLink>

      <hr style={{ margin: "0.5rem 0" }} />
    </div>
  );
};



