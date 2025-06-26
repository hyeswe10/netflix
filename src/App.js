import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./Component/MainLayout";
import Main from "./Component/Main";
import Login from "./Component/Login";
const App = () => {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      </HashRouter>
    // </BrowserRouter>
  );
};

export default App;