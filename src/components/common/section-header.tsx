import '../../assets/styles/components/common/section-header.scss';

interface Props {
  title: string;
  id?: string;
}

export const SectionHeader = ({ title, id }: Props) => (
  <h2 className='section-header' id={id}>{title}</h2>
);
