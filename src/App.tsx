import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";
import Rightbarlayout from "./components/Rightbar";
import Home from "./pages/Home";
import Novel from "./pages/Novel";



function App() {

  return (
  <BrowserRouter>
    <div className="global font-Cairo m-0 p-0 box-border leading-[1.15]">
      <NavBar/>
        <section className="mt-24">
          <Routes>
              <Route path="/" element={<Rightbarlayout/>}>
                <Route index element={<Home/>}/>
              </Route>
              <Route path="/solo" element={<Novel/>}/>
          </Routes>


        </section>

    </div>
  </BrowserRouter>
  )
}

export default App
