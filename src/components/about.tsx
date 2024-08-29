import aboutImage from '../assets/pngwing 1.png';
import { AboutBlob } from '../constants/vectors';

const About = () => {
  return (
    <section className='py-20'>
      <div className='globalContainer'>
        <div className='grid lg:grid-cols-2 gap-x-6 gap-y-16 items-center'>
          <div className='space-y-8'>
            <h2 className='text-4xl font-bold uppercase'>
              Lorem ipsum dolor sit amet.
            </h2>
            <p className='text-2xl leading-9'>
              Lorem ipsum dolor sit amet, consectetur adipisc
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <button className='globalButton'>Read More</button>
          </div>
          <div className='relative'>
            <AboutBlob className='absolute max-w-[566px] max-h-[516px] w-full bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/3' />
            <img
              src={aboutImage}
              alt='about'
              className='max-w-[524px] w-full h-auto mx-auto lg:ml-auto relative'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
