import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { ROUTE_ERROR, ROUTE_HOME } from "./constants/WebPath";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
