import library from '../../library.svg';

const Logo = ({ width }: { width: string}) => {
  return (
    <img
      src={library}
      alt='logo'
      width={width+'px'}
    />
  );
}
 
export default Logo;