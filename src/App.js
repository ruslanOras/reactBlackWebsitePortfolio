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
       <Route path="/" >
					<Route index element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/contacts" element={<Contacts />} />
					</Route>
     </Routes>
     <Footer />
     </Router>
   
    </div>
  );
}

export default App;
