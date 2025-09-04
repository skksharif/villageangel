
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";

function App() {
  return (
    <>
 
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/privacy-policy" element={<Privacy/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
