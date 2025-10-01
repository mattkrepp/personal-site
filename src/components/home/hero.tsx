import '../../assets/styles/components/home/hero.scss';
import { ContactButton } from '../common/contact-button';

export const Hero = () => (
  <div className='hero' id='hero'>
    <h1 className='hero__header'>Hi, I’m Matt.</h1>
    <h3 className='hero__subheader'>I’m a full-stack software engineer.</h3>
    <ContactButton className='hero__contact-button' />
  </div>
);
