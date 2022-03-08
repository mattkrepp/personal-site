import { SectionHeader } from '../common/section-header';

import '../../assets/styles/components/home/contact.scss';
import { ContactButton } from '../common/contact-button';

export const Contact = () => (
  <div className='contact'>
    <SectionHeader title='Where to find me' id='contact' />
    <div className=''>
      <h4 className='contact__text'>
        I&#8217;d love to hear from you! Feel free to reach out with any comments,
        questions or feedback. I&#8217;ll do my best to get back to you as soon as possible.
      </h4>
      <ContactButton className='contact__button' text='Email' />
      <a className='contact__button' type='link' href='https://github.com/mattkrepp'>Github</a>
      <a className='contact__button' type='link' href='https://www.linkedin.com/in/mattkrepp/'>LinkedIn</a>
    </div>
  </div>
);
