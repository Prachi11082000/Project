// import Navbar from "./Navbar"
 import{Routes,Route}from'react-router-dom';
 import Home from "./Home"; 
  import Contact from "./Contact";
  import About from "./About";
  import Service from "./Service";
 // import Signup from"./Signup";
  import Booking from './Booking';
  import Img from './Img'; 
  import Vedio from './Vedio';
function App() {
  return (
    <div className="App">
 {/* <Navbar/> */}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Service" element={<Service/>}/>
    {/* <Route path="/" element={<Signup/>}/> */}
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/Kathmandu" element={<Img/>}/>
    <Route path="/manali" element={<Vedio/>}/>
  </Routes>

    </div>
  );
}

export default App;
