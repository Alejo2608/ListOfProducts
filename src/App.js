import './App.css';
import "boxicons"
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavP from './components/Nav/Nav';
import List from './components/List/List';
import { DataProvider } from './context/DataProvider';
import Footer from './components/Footer/Footer';
import Paginated from './components/Paginated/Paginated';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <NavP/>
        <List/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        <Footer/>

      </div>
    </DataProvider>
  );
}

export default App;
