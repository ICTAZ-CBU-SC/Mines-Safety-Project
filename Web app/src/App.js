import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Main';
import NavBar from './components/Headers_and_footers/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <div className=''>
        <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
