import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Components/Services/Services';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';
import Hislider from './Components/Hislider/Hislider';
import Signup from './Components/Signuppage/Signup';
import Cards from './Components/Cards/Cards';
import Payment from './Components/Payment/Payment';
import Success from './Components/Success/Success';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hislider />
      {children}
      <Services />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Layout><Home /></Layout>} />
       <Route path="/services" element={<Services />} />
      <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
      <Route path="/contact" element={<Layout><Footer/></Layout>} /> 
      <Route path="/cards" element={<Cards />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main;


