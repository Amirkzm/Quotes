import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllQuoets from "./pages/AllQuoets";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllQuoets />} />
      </Routes>
    </>
  );
}

export default App;
