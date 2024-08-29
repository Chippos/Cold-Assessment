import { socialIcons } from '../constants/images';
import { FooterBlob } from '../constants/vectors';

const Footer = () => {
  return (
    <section className='p-4 sm:p-10 lg:px-16 lg:pt-60 pb-16 relative'>
      <FooterBlob className='hidden lg:block absolute bottom-0 w-full left-0 max-w-[585px] max-h-[469px]' />
      <div className='relative'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20'>
          <div className='lg:col-span-2 max-w-[450px] space-y-4'>
            <h2 className='text-4xl leading-[54px] font-bold uppercase lg:text-white'>
              Chilled Grape
            </h2>
            <p className='text-xl lg:text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <FooterLinks title={'Company'} />
          <FooterLinks title={'Products'} />
          <div className='space-y-6'>
            <h5 className='textGradient text-xl font-medium'>Follow Us</h5>
            <div className='grid grid-cols-3 gap-9'>
              {socialIcons.map((item, index) => (
                <div
                  key={index}
                  className='w-11 h-11 flex items-center justify-center globalGradient rounded-lg'>
                  <img src={item} className='w-6 h-6' alt='' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterLinks = ({ title }: { title: string }) => {
  return (
    <div className='space-y-6'>
      <h5 className='textGradient text-xl font-medium'>{title}</h5>
      <ul className='space-y-3 [&>li]:text-lg [&>li]:leading-7 [&>li:hover]:translate-x-1 [&>li]:transition [&>li]:duration-300 [&>li]:will-change-transform'>
        <li>About</li>
        <li>Career</li>
        <li>Our Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Footer;
