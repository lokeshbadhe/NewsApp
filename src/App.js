import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs';
function App() {
  return (
      <>
          <div>


    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<News key="general" country="in" category="general"/>}/>
    {/* <Route exact path="/home" element={<News key="general" country="in" category="general"/>} /> */}
        <Route  path="/newsapes" element={<News key="general" country="in" category="general"/>} />
        <Route exact path="/sports" element={<News key="sports" country="in" category="sports"/>} />
        <Route exact path="/science" element={<News key="science" country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News key="business" country="in" category="business"/>} />
        <Route exact path="/technology" element={<News key="technology" country="in" category="technology"/>} />
        <Route exact path="/health" element={<News key="health" country="in" category="health"/>} />
        <Route exact path='/about' element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>

    </div>

    </>
  );
}

export default App;
