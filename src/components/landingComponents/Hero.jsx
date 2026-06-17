import React from 'react'
import CustomButton from '../shared/CustomButton';


const Hero = () => {
  return (
    <section className='relative top-18'>
      <div className='h-[90vh] overflow-hidden flex items-center'>
        <img src=' /hero.jpg' alt='wanderwise hero' className='w-full' />
      </div>

      <div className='bg-black opacity-40 h-[90vh] w-full absolute top-0'></div>

      <div className='absolute top-0'>
        <div className='w-1/2 mx-auto mt-40 text-center'>
          <h1 className='text-5xl text-white font-bold'>Plan ur trip with WanderWise</h1>
          <p className='text-xl text-white my-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Blanditiis deleniti aut commodi sed tempore, 
            minus eaque nesciunt fuga sit odio amet sapiente possimus eligendi accusamus vel quas quos.
            Nihil, unde.
          </p>
          <div className='flex justify-center'>
            <CustomButton text="Get Started" link="/login" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero



