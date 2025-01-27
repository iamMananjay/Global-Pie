// import React, { useState,useEffect } from 'react';
// import productImage1 from '../images/marble.png';
// import productImage2 from '../images/cement.jpg';
// import productImage3 from '../images/wheelchair.png';
// import productImage4 from '../images/a.png';
// import productImage5 from '../images/b.jpg';
// import productImage6 from '../images/oil.jpg';
// import bgimg from '../images/p4.jpg';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Home = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState('');

//   const openModal = (imageSrc) => {
//     setModalImage(imageSrc);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage('');
//   };
//   useEffect(() => {
//     AOS.init({
//         duration: 1000, // Animation duration in milliseconds
//         easing: 'ease-in-out',
//         once: true, // Animation happens only once
//     });
// }, []);

//   return (
//     <div>
//       {/* Home Section */}
//       <section
//         id="home"
//         className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center p-5"
//         style={{ backgroundImage: `url(${bgimg})`, paddingTop: '80px' }} // Avoid overlap with navbar
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60 z-9"></div>
//         <div className="relative z-9 text-center">
//           <h1 className="text-5xl md:text-6xl mb-4 animate-fadeInUp font-bold">
//             Welcome to Global Pie Import & Export
//           </h1>
//           <p className="text-2xl mb-6 animate-fadeInUp">
//             Your trusted partner in global trade
//           </p>
//           <p className="text-lg animate-fadeInUp">
//             Looking for the best selection of imported and exported goods and
//             services? Look no further than Global Pie. We bring you the very
//             best from every corner of the world, all at your fingertips. Explore
//             our vast range of products and services today.
//           </p>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="py-12 bg-black bg-opacity-90 text-white text-center overflow-hidden p-10">
//         <h2 className="text-4xl mb-8 animate-fadeIn font-semibold">
//           Our Products
//         </h2>
//         <p className="text-lg mb-8 animate-fadeIn">
//           Explore our diverse range of high-quality products. Each item is
//           carefully selected to meet your needs and preferences.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {[productImage1, productImage2, productImage3, productImage4, productImage5, productImage6].map(
//             (image, index) => (
//               <div
//                 key={index}
//                 className="product-image relative w-full h-80 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
//                 onClick={() => openModal(image)}
//                 data-aos="fade-up"
//                 data-aos-delay={`${index * 100}`} // Staggering the animation
//                 data-aos-duration="1000"
//               >
//                 <img
//                   src={image}
//                   alt={`Product ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )
//           )}
//         </div>
//       </section>

//       {/* Modal for full image */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-30"
//           onClick={closeModal}
//         >
//           <img
//             src={modalImage}
//             alt="Full Product"
//             className="max-w-4/5 max-h-4/5 object-contain"
//           />
//         </div>
//       )}

//       {/* Why Choose Us Section */}
// <section className="py-12 bg-gray-100 text-gray-800 text-center">
//   <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
//     Why Choose Us
//   </h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
//     <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
//       <h3 className="text-2xl font-semibold mb-4">Customized Shipping Options</h3>
//       <p>We can change the shipping options according to your requirements and schedule.</p>
//     </div>
//     <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//       <h3 className="text-2xl font-semibold mb-4">Expert Consultations</h3>
//       <p>Our experts are here in case of any confusion. Just write to us.</p>
//     </div>
//     <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
//       <h3 className="text-2xl font-semibold mb-4">World-Class Service</h3>
//       <p>We guarantee a first-class service and you won't have any complaints.</p>
//     </div>
//     <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
//       <h3 className="text-2xl font-semibold mb-4">Licensed and Insured</h3>
//       <p>Your trust matters. We are fully licensed and insured for your peace of mind.</p>
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import productImage1 from '../images/cement.png';
import productImage2 from '../images/rice.png';
import productImage3 from '../images/SUGAR.png';
import productImage4 from '../images/VEGETABLEOIL.png';
import productImage5 from '../images/rice.png';
import productImage6 from '../images/SUGAR.png';
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

  // <div className="absolute inset-0 bg-black bg-opacity-50 z-9">
  return (
    <div>
      {/* <section
  id="home"
  className="relative h-screen bg-gradient-to-b from-navy-blue to-light-blue text-white flex flex-col justify-center items-center p-5"
  style={{
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'TOP', 
    backgroundRepeat: 'no-repeat', 
    paddingTop: '80px',
  }}
>


<div style={{
 
  background: "rgba(0, 0, 0, 0.7)", // Use rgba for transparency
  height: "auto", // Adjust height to fit content
  width: "100%",
  padding: "20px 10px", // Add padding for spacing
  position: "absolute",
  bottom: "0",
}}>
  <div className="relative z-9 text-center">
    <h1 className="text-5xl md:text-6xl mb-4 font-bold">
      Welcome to Global Pie Import & Export
    </h1>
    <p className="text-2xl mb-6">
      Your trusted partner in global trade
    </p>
    <p className="text-lg">
      Looking for the best selection of imported and exported goods and
      services? Look no further than Global Pie. We bring you the very
      best from every corner of the world, all at your fingertips. Explore
      our vast range of products and services today.
    </p>
  </div>
</div>
  

</section> */}



{/* <section
  id="home"
  className="relative h-screen bg-gradient-to-b from-navy-blue to-light-blue text-white flex flex-col justify-center items-center p-5"
  style={{
    backgroundImage: `url(${bgimg})`,
     backgroundPosition: 'Top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
  }}
> */}
{/* <div className="relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl mb-4 font-bold">
        Welcome 
      </h1>
      </div> */}
  {/* Text Container */}
  {/* <div
    style={{
      background: "rgba(96, 96, 225, 0.8)", // Semi-transparent navy blue background
      height: "auto", // Adjust height to fit content
      width: "100%",
      padding: "20px 10px", // Add padding for spacing
      position: "absolute",
      bottom: "0", // Stick to the bottom
    }}
  >
    <div className="relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl mb-4 font-bold">
        Welcome to Global Pie Import & Export
      </h1>
      <p className="text-2xl mb-6">
        Your trusted partner in global trade
      </p>
      <p className="text-lg">
        Looking for the best selection of imported and exported goods and
        services? Look no further than Global Pie. We bring you the very
        best from every corner of the world, all at your fingertips. Explore
        our vast range of products and services today.
      </p>
    </div>
  </div> */}
{/* </section> */}


--
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



     {/* Product Section */}
{/* <section className="py-12 bg-soft-cement-gray text-black text-center overflow-hidden p-10">
  <h2 className="text-4xl mb-8 font-semibold text-medium-blue">
    Our Products
  </h2>
  <p className="text-lg mb-8">
    Explore our diverse range of high-quality products. Each item is
    carefully selected to meet your needs and preferences.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
    {[productImage1, productImage2, productImage3, productImage4].map(
      (image, index) => {
        const labels = ['Rice', 'Oil', 'Sugar', 'Vegetable Oil']; // Add relevant labels for each product
        return (
          <div
            key={index}
            className="product-container w-full max-w-sm text-center"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="1000"
          >
            <div
              className="product-image relative w-full h-72 overflow-hidden rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={labels[index]}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <p className="mt-4 text-lg font-medium text-gray-700">
              {labels[index]}
            </p>
          </div>
        );
      }
    )}
  </div>
</section> */}

{/* Modal for Full Image */}
{/* {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-30"
    onClick={closeModal}
  >
    <img
      src={modalImage}
      alt="Full Product"
      className="max-w-[50%] max-h-[50%] object-contain rounded-lg shadow-lg"
    />
  </div>
)} */}



      {/* Why Choose Us Section */}
      {/* <section className="py-12 bg-light-blue text-medium-blue text-center">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  <div
    className="p-6 bg-white rounded-lg shadow-lg"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <h3 className="text-2xl font-semibold mb-4">Customized Shipping Options</h3>
    <p>We can change the shipping options according to your requirements and schedule.</p>
  </div>
  <div
    className="p-6 bg-white rounded-lg shadow-lg"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <h3 className="text-2xl font-semibold mb-4">Expert Consultations</h3>
    <p>Our experts are here in case of any confusion. Just write to us.</p>
  </div>
  <div
    className="p-6 bg-white rounded-lg shadow-lg"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <h3 className="text-2xl font-semibold mb-4">World-Class Service</h3>
    <p>We guarantee a first-class service and you won't have any complaints.</p>
  </div>
</div>

      </section> */}
    </div>
  );
};

export default Home;

