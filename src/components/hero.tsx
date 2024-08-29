import {
  HeaderBlob,
  HeroLeftMild,
  HeroMainBlob,
  HeroMidMild,
  HeroRightMild,
} from '../constants/vectors';

const Hero = () => {
  return (
    <section>
      <div className='globalContainer overflow-hidden'>
        <div className='min-h-[900px] flex items-center justify-center'>
          <HeroRightMild className='absolute right-[10%] top-[50%] w-full max-w-[432px] max-h-[329px]' />
          <HeroMidMild className='absolute right-2/4 translate-x-2/4 top-[18%] w-full max-w-[337px] max-h-[266px]' />
          <HeroLeftMild className='absolute left-0 top-2/4 w-full max-w-[198px] max-h-[351px]' />
          <HeaderBlob className='absolute top-0 left-0 w-full max-w-[497px] max-h-[309px]' />
          <HeroMainBlob className='absolute right-0 top-2/4 -translate-y-2/4 w-full max-w-[344px] max-h-[535px]' />
          <div className='max-w-2xl w-full space-y-5 relative'>
            <h1 className='text-6xl leading-[96px] uppercase font-bold'>
              Lorem Ipsum <br /> dolor sit amit.
            </h1>
            <button className='globalButton !text-lg font-semibold'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
