import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectPages from './pages/ProjectPages';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop />
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectPages />} />
        <Route path="/contacts" element={ <Contacts />} />
     </Routes>
     <Footer />
     </Router>
   
    </div>
  );
}

export default App;
