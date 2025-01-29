import React, { useState, useEffect } from 'react';
import bgimg from '../images/backgroundimg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        color: "white",
        padding: "20px",
        backgroundColor: "rgb(34 84 137 / 60%)", 
        borderRadius: "10px",
        maxWidth: "800px",
        marginBottom:"200px",
        fontSize:"bold"
      }}
    >
      {/* marginBottom: "210px" */}
      <h1 style={{ fontSize: "20px",  fontWeight: "bold" }}>
        Welcome to Global Pie Import & Export
      </h1>
    
    </div>
  </section>
</div>



    </div>
  );
};

export default Home;

