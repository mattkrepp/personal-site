import '../../assets/styles/components/home/section.scss';
import SVGDividerPrimary from '../../assets/images/svgs/divider-primary.svg';
import SVGDividerSecondary from '../../assets/images/svgs/divider-secondary.svg';

interface Props {
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  withDivider?: boolean;
  dividerSvgZoomLevel?: number; // 100-300, defaults to 150
}

export const Section = ({
  color = 'primary',
  withDivider = true,
  children,
  dividerSvgZoomLevel = 150,
}: Props) => {
  const sectionDivider = color === 'primary'
    ? <SVGDividerPrimary className='section__divider-image' style={{ width: `${dividerSvgZoomLevel}%` }} />
    : <SVGDividerSecondary className='section__divider-image' style={{ width: `${dividerSvgZoomLevel}%` }} />;

  return (
    <div className={`section section--${color}`}>
      <div className='section__container'>{children}</div>
      {withDivider && sectionDivider}
    </div>
  );
};
