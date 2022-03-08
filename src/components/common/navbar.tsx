import { useState, useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../../assets/styles/components/common/navbar.scss';

export const Navbar = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  const onScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > 0) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`navbar${isPageScrolled ? ' navbar--scrolled' : ''}`}>
      <div className='navbar__max-width-container'>
        <div className='navbar__left-content'>
          <AnchorLink className='navbar__logo-link' to='/'>
            <div className='navbar__logo'>
              M
            </div>
          </AnchorLink>
        </div>
        <div className='navbar__right-content'>
          <AnchorLink to='#about' className='navbar__link'>About</AnchorLink>
          <AnchorLink to='#experience' className='navbar__link'>Experience</AnchorLink>
          <AnchorLink to='#contact' className='navbar__link'>Contact</AnchorLink>
        </div>
      </div>
    </div>
  );
};
