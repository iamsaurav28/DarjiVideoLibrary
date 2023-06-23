import "./App.css";
import {Header} from "./Components/Header";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { VideoPlayer } from "./Components/VideoPlayer";
import { NoMatch } from "./Components/NoMatch";
import { Container } from "./Components/Container";
import { WatchLater } from "./Components/WatchLater";
import { LikedVideos } from "./Components/LikedVideos";
import { History } from "./Components/History";
import { SearchVideos } from "./Components/SearchVideos";
import Navbar from "./Navbar/Navbar";
import ProtectedPage from "./Routes.js/ProtectedPage";
import Login from "./Routes.js/Login";
import Register from "./Routes.js/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        
       
        <Route path="/" element={<ProtectedPage />} >
        <Route path="/" element={<Container />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
        <Route path="/searchvideos" element={<SearchVideos />} />

        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;