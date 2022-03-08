import { SectionHeader } from '../../common/section-header';

import profilePhoto from '../../../assets/images/profile-photo.jpg';
import '../../../assets/styles/components/home/about.scss';
import { AboutSubsection } from './about-subsection';
import { aboutText, education, technologies } from '../../../constants/about';

const EducationContent = () => (
  <div className='about__education-list'>
    {education.map(({
      school,
      degree,
      location,
    }) => (
      <div className='about__education-item'>
        <div className='about__education-degree'>{degree}</div>
        <div className='about__education-school'>{school}</div>
        <div className='about__education-location'>{location}</div>
      </div>
    ))}
  </div>
);

const TechnologyContent = () => (
  <ul className='about__technology-list'>
    {technologies.map(technology => <li className='about__technology-item'>{technology}</li>)}
  </ul>
);

export const About = () => (
  <div className='about'>
    <SectionHeader title='About me' id='about' />
    <div className='about__container'>
      <div className='about__left-content'>
        <p className='about__text'>
          {aboutText.map(paragraph => (
            <>
              {paragraph}
              <br />
              <br />
            </>
          ))}
        </p>
      </div>
      <div className='about__right-content'>
        <img
          className='about__image'
          src={profilePhoto}
          alt='Me'
        />
      </div>
    </div>
    <div className='about__education-tech-container'>
      <AboutSubsection title='Frequently used technologies'>
        <TechnologyContent />
      </AboutSubsection>
      <AboutSubsection title='Education'>
        <EducationContent />
      </AboutSubsection>
    </div>
  </div>
);
