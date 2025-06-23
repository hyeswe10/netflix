import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainLayout from './Component/MainLayout';
import Main from './Component/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
