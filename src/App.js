// App.js
import React, { useState } from 'react';
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import Navigation from './Navigation';

import Home from './Home.js';
function App() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
  const [currentPage, setCurrentPage] = useState('Home');


  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  

  return (
    <div>
        {currentPage==='Home' && <Home onNavigate={() => handleNavigation('SignUp')}/>}
      {currentPage === 'SignUp' && <SignUp formData={formData} setFormData={setFormData}  onNavigate={() => handleNavigation('LoginPage')} />}
      

      {currentPage === 'LoginPage' && <LoginPage userData={formData}
      onNavigate={
        () => {handleNavigation('Navigation')
        console.log('Its inside the navigation function after login')}
        } />}
      {console.log("Current page value: ",currentPage)}
      {console.log("ready for navigation page")}
      {currentPage=='Navigation' && <Navigation/>}
    </div>
  );
}

export default App;