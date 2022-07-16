import { Route, Routes } from 'react-router-dom';
import { AboutMe } from '../pages/AboutMe';
import { Certificates } from '../pages/Certificates';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';

export const Routers = () => {
  return (
    <Routes>
      <Route path ="/home/" element ={<Home/>}/>
      <Route path ="/sobre/" element ={<AboutMe/>}/>
      <Route path ="/certificados/" element ={<Certificates/>}/>
      <Route path ="/projetos/" element ={<Projects/>}/>
      <Route path ="/contato/" element ={<Contact/>}/>
    </Routes>
  );
};
