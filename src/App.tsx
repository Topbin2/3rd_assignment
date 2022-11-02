import { Route, Routes } from "react-router-dom";

import { CarDetail, CarList } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CarList />} />
      <Route path="/car/*" element={<CarDetail />} />
    </Routes>
  );
};

export default App;
