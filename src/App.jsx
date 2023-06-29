import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.styled.jsx";
import { StreamerList } from "./Pages/StreamerList/StreamerList.jsx";
import { StreamerDescription } from "./Pages/SreamerDescription/StreamerDescription.jsx";

function App() {
  return (
    <BrowserRouter basename="taskinterview">
      <Routes>
        <Route path="/streamers" element={<StreamerList />} />
        <Route
          path="/streamers/:streamerId"
          element={<StreamerDescription />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
