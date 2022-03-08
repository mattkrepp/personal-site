import '../../assets/styles/components/home/hero.scss';
import { ContactButton } from '../common/contact-button';

export const Hero = () => (
  <div className='hero' id='hero'>
    <h1 className='hero__header'>Hi, I&#8217;m Matt Krepp.</h1>
    <h3 className='hero__subheader'>I&#8217;m a full-stack software engineer who brings ideas to life on the internet.</h3>
    <ContactButton className='hero__contact-button' />
  </div>
);
