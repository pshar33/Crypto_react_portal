import React from 'react'
import './App.css';


const Sidebar = () => {
    
    const viewHeight = window.outerHeight;
    return (
    
       
        <div style={{ height: viewHeight }} className="Sidebar">
         <p>Home</p>
         <p>About Us</p>
         <p>Contact</p>
         <p>Blog</p>
         <p>Careers</p>
        </div> 
   
    )};

export default Sidebar