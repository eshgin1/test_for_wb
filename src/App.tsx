import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
    </Routes>
  );
}

export default App;
