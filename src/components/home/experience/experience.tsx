import { useState } from 'react';
import { ExperienceItem } from './experience-item';
import { experience } from '../../../constants/experience';
import '../../../assets/styles/components/home/experience/experience.scss';
import '../../../assets/styles/components/home/experience/experience-item.scss';
import { SectionHeader } from '../../common/section-header';

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='experience'>
      <SectionHeader title='My work experience' id='experience' />
      <div className='experience__container'>
        <div className='experience__menu'>
          {experience.map(({ role, company }, index) => {
            const classNames = `experience__menu-item${(index === activeIndex) ? ' experience__menu-item--active' : ''}`;
            return (
              <div
                className={classNames}
                onClick={() => setActiveIndex(index)}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    setActiveIndex(index);
                  }
                }}
                role='button'
                tabIndex={index}
              >
                <div className='experience__menu-item-role'>{role}</div>
                <div className='experience__menu-item-company'>{company}</div>
              </div>
            );
          })}
        </div>
        <ExperienceItem experienceItem={experience[activeIndex]} />
      </div>
    </div>
  );
};
