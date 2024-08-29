const Header = () => {
  const links = ['Home', 'About', 'Blog', 'Pricing'];
  return (
    <div className='absolute inset-x-0 top-0 z-50'>
      <nav className='flex items-center justify-between p-4 sm:p-10 lg:px-16'>
        <div className='flex lg:flex-1'>
          <a href='#'>
            <span className='text-4xl font-bold uppercase text-white'>
              Chilled Grape
            </span>
          </a>
        </div>
        <div className='flex items-center space-x-20'>
          <div className='hidden lg:flex lg:gap-x-12'>
            {links.map((item, index) => (
              <a
                key={index}
                href='#'
                className='text-base font-semibold leading-6 text-black relative linkUnderline hover:after:opacity-100 after:transition after:duration-300 hover:after:translate-y-0'>
                {item}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <button className='globalButton'>Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
