import { createContext, useContext, useReducer } from "react";
import { videos } from "./db";

const VideoContext = createContext();

const reduceFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCH_LATER": {
      let flag = false;
      const video = action.payload;
      for (const item of state.watchLater) {
        if (item.id === video.id) {
          flag = true;
          break;
        }
      }
      if (flag) return state;

      return { ...state, watchLater: [...state.watchLater, video] };
    }

    case "REMOVE_FROM_WATCH_LATER": {
      const video = action.payload;
      const watchLaterVideos = state.watchLater;
      const arr = watchLaterVideos.filter((item) => item.id !== video.id);
      return { ...state, watchLater: arr };
    }

    case "TOGGLE_LIKE_VIDEO": {
      const video = action.payload;
      const videoList = state.videoList;
      const videoArr = videoList.map((item) => {
        if (item.id === video.id) {
          return { ...item, isLiked: !item.isLiked };
        } else return item;
      });

      if (!video.isLiked) {
        return {
          ...state,
          videoList: videoArr,
          likedVideos: [...state.likedVideos, video]
        };
      } else {
        const likedList = state.likedVideos;
        const likedArr = likedList.filter((item) => item.id !== video.id);
        return { ...state, videoList: videoArr, likedVideos: likedArr };
      }
    }

    case "REMOVE_FROM_LIKED_VIDEOS": {
      const video = action.payload;
      const likedVideos = state.likedVideos;
      const videoList = state.videoList;
      const arr = likedVideos.filter((item) => item.id !== video.id);
      const videoArr = videoList.map((item) => {
        if (item.id === video.id) {
          return { ...item, isLiked: false };
        } else return item;
      });

      return { ...state, likedVideos: arr, videoList: videoArr };
    }

    case "ADD_TO_HISTORY": {
      const video = action.payload;
      let flag = false;
      for (const item of state.history) {
        if (item.id === video.id) {
          flag = true;
          break;
        }
      }
      if (flag) return state;

      return { ...state, history: [...state.history, video] };
    }

    case "SEARCH_VIDEOS": {
      let searchArr = [];
      for (let video of state.videoList) {
        if (
          video.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
        )
          searchArr = [...searchArr, video];
      }

      return { ...state, searchVideos: searchArr };
    }

    default:
      return state;
  }
};

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduceFunc, {
    videoList: videos,
    watchLater: [],
    likedVideos: [],
    history: [],
    searchVideos: []
  });
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
