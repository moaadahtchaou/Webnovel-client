import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";
import Rightbarlayout from "./components/Rightbar";
import Home from "./pages/Home";



function App() {

  return (
  <BrowserRouter>
    <div className="global font-Messiri m-0 p-0 box-border leading-[1.15]">
      <NavBar/>
        <section className="cocontainer mt-24">
          <Routes>
              <Route path="/" element={<Rightbarlayout/>}>
                <Route index element={<Home/>}/>
              </Route>

          </Routes>


        </section>

    </div>
  </BrowserRouter>
  )
}

export default App
