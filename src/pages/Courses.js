import React from "react";
import Layout from "../compoents/Layout";
import coursesData from '../resources/courses'
import AOS from 'aos';
AOS.init({
  duration:1000
});
function Courses() {
  return (
    <Layout>
      <div>
        <div>
          <div className="h-screen relative">
            <div className="h-3/4 pt-20 bg-theme">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute left-0 right-0 -bottom-34">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#2a2a2a"
                  fill-opacity="1"
                  d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,192C672,203,768,149,864,106.7C960,64,1056,32,1152,53.3C1248,75,1344,149,1392,186.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-5">
        <p className="text-xl font-semibold text-center">
          “I can’t teach people everything they need to know. The best I can do
          is position them where they can find what they need to know when they
          need to know .”
        </p>
        <h1 className="text-4xl text-center font-bold mt-5">Because</h1>
      </div>
      <div className="font-bold text-center bg-gray-500 m-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5">
        <h1 className="text-8xl md:text-3xl" data-aos='slide-down'>LEARNING IS...</h1>
        <h1 className="text-8xl md:text-3xl" data-aos='slide-up'>CONTINIUOS</h1>
      </div>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
            {coursesData.map((cource=>{
              return <div>
                  <div className='relative border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                     <img src={cource.image}  className='w-full h-60 text-center rounded-tr-3xl rounded-bl-3xl'/>

                     <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl'>
                        <h1 className='text-4xl font-semibold text-white'>{cource.title}</h1>
                        <button className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>DEMO</button>
                     </div>
                  </div>
              </div>
            }))}
      </div>
    </Layout>
  );
}

export default Courses;
