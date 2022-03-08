import { ExperienceItem as ExperienceItemType } from '../../../constants/experience';

interface Props {
  experienceItem: ExperienceItemType;
}

export const ExperienceItem = ({
  experienceItem: {
    role,
    company,
    date,
    location,
    description,
  },
}: Props) => {
  const roleCompanyString = `${role} | ${company}`;
  const dateLocationString = `${date} | ${location}`;

  return (
    <div className='experience-item'>
      <div className='experience-item__info-container'>
        <div className='experience-item__role-company'>{roleCompanyString}</div>
        <div className='experience-item__date-location'>{dateLocationString}</div>
      </div>
      <ul className='experience-item__description-list'>
        {description.map(descriptionItem => (
          <li className='experience-item__description-row'>{descriptionItem}</li>
        ))}
      </ul>
    </div>
  );
};
