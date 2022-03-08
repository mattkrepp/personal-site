interface Props {
  title: string;
  children: React.ReactNode;
}

export const AboutSubsection = ({ title, children }: Props) => (
  <div className='about__subsection'>
    <h6 className='about__subsection-header'>{title}</h6>
    {children}
  </div>
);
