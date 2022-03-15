import './App.css';
import Header from './MyComponents/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import FAQ  from './MyComponents/FAQ/FAQ';
import {Route, Routes} from "react-router-dom";
import SupportEngine from './MyComponents/Chat/SupportEngine'
import SupportAdmin from './MyComponents/Chat/SupportAdmin'

function App() {
  const path = window.location.pathname
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/faq" element={<FAQ />}/>
      <Route exact path="/support" element={<SupportAdmin />}/>
    </Routes>
    {/* <SupportEngine /> */}
    { path.indexOf('/support') === -1 ? <SupportEngine /> : '' }
    </>
  );
}

export default App;
