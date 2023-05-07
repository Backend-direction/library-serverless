import library from '../../images/library.svg';

type Props = {
  width: string
}

const Logo = ({ width }: Props) => {
  return (
    <img
      src={library}
      alt='logo'
      width={width+'px'}
    />
  );
}
 
export default Logo;