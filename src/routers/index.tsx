import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutMe } from '../pages/AboutMe';
import { Contact } from '../pages/Contact';
import { Extra } from '../pages/Extra';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home/" />} />
      <Route path="/home/" element={<Home />} />
      <Route path="/sobre/" element={<AboutMe />} />
      <Route path="/projetos/" element={<Projects />} />
      <Route path="/contato/" element={<Contact />} />
      <Route path="/extra/" element={<Extra />}/>
    </Routes>
  );
};
