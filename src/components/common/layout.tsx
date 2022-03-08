import '../../assets/styles/base/defaults.scss';
import '../../assets/styles/base/colors.scss';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <div>
    {children}
  </div>
);

