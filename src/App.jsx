import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home"
import Topbar from "./Components/topbar/Topbar";
import Videos from "./Components/video/Video"
import Team from "./Components/team/Team"
import Membership from "./Components/membsership/Membership"
import News from "./Components/news/News"
import AboutUs from "./Components/aboutUs/AboutUs"

const App = () => {
    //appContainer style inside index.css
  return (
    <div className="appContainer">
      <Topbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element = {<Videos/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
};

export default App;
