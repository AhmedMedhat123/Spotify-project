import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/*"
          element={
            <div className="h-screen text-white p-3 overflow-auto">
              <div className="flex">
                <Sidebar />
                <Display />
              </div>
              <Player />
              <audio ref={audioRef} src={track?.file || ""} preload="auto"></audio>
            </div>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
