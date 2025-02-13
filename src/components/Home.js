import React, { useState, useEffect } from 'react';
import bgimg from '../images/bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Home.css"; // Import the CSS file


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
  
<div>
  <section
    id="home"
    className="relative h-screen flex flex-col justify-center items-center"
    style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: "cover", 
      backgroundPosition: "Top", 
      backgroundRepeat: "no-repeat",
      paddingTop: "80px",
      position: "relative",
      height: "100vh",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(116, 115, 115, 0.5)", 
        // zIndex: 0.0,
        opacity:"0.1"
        
      }}
    ></div>
    <div
    className="welcome-box"
  style={{
    position: "absolute",
    top: "40%", // Moves the div 40% down from the top
    left: "50%", // Centers horizontally
    // transform: "translate(-50%, -50%)", // Adjusts positioning correctly
    zIndex: 2,
    textAlign: "center",
    color: "white",
    padding: "20px",
    backgroundColor: "rgb(34 84 137 / 60%)",
    borderRadius: "10px",
    maxWidth: "800px",
    fontSize: "bold",
    
  }}
>
  <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
    Welcome to Global Pie Import & Export
  </h1>
</div>

  </section>
</div>



    </div>
  );
};

export default Home;

