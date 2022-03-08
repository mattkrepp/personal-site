import '../../assets/styles/components/common/contact-button.scss';

interface Props {
  text?: string;
  className?: string;
}

export const ContactButton = ({ text, className }: Props) => (
  <a
    className={`contact-button${className ? ` ${className}` : ''}`}
    href='mailto:hello@mattkrepp.me'
  >
    {text ?? 'Say hello'}
  </a>
);
