import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import SignUp from './Components/SignUp';
import Login from "./Components/Login";
import Home from "./Components/Home"
import NavBar from './Components/Navbar';
import AddCars from './Components/AddCars';
import Footer from './Components/Footer';
import ReviewForm from "./Components/ReviewForm"
import AboutUs from './Components/AboutUs';
import Services from './Components/Service';
import ContactUs from './Components/ContactUs';
import FAQ from './Components/FAQ';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        console.log(user); 
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/addcars" element={<AddCars />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/ReviewForm" element={<ReviewForm/>}/>  
          <Route path="/reviews" element={<ReviewForm carRentalId="123" user={user} />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path ="/FAQ" element={<FAQ/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/TermsOfService" element={<TermsOfService/>}/>

       
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
