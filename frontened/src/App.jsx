import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Herosection from './componenet/herosection';
import AboutGenesis from './componenet/AboutPage';
import EventHighlights from './componenet/Eventpage';
import Timeline from './componenet/Timeline';
import Footer from './componenet/Footer';
import RegistrationForm from './componenet/RegistrationForm';
import Admin from './componenet/Admin'
const App = () => {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <AboutGenesis />
              <EventHighlights />
              <Timeline />
              <Footer />
            </>
          }
        />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  );
};

export default App;
