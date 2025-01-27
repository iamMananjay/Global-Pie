

 import React, { useState } from 'react';
 
 const choose = () => {
    return (<>
     <section className="py-12 bg-light-blue text-medium-blue text-center">
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

      </section> 
    </>);
 };

 export default choose;


      
