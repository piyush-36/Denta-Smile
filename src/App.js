import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Servicespage from './pages/Servicespage';
import BlogsPage from './pages/BlogsPage';
import Contactus from './pages/Contact/Contactus';
import Service from './components/Service/Service';
import Services from './sections/Services/Services';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/servicespage" element={<Servicespage />} />
    </Routes>
  );
}

export default App;
