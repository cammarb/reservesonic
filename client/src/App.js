import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/home/Home";
// import Studio from "./pages/studio/Studio";
// import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/studios" element={<List />} /> */}
        {/* <Route path="/studios/:id" element={<Studio />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;