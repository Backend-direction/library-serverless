import { Typography, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import { FunctionComponent, useState } from "react";

interface DescriptionProps {
  description: string;
}

const CustomizedTypography = styled(Typography)`
  position: relative;

  &.description--short {
    overflow: hidden;
    max-height: 130px;
  }

  &.description--short:before {
    content: '';
    position: absolute;
    display: block;
    top: 120px;
    left: 0;
    right: 0;
    height: 20px;
    z-index: 1;
    background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, #fff));
    background: -webkit-linear-gradient(transparent 0%, #fff 70%);
    background: -o-linear-gradient(transparent 0%, #fff 70%);
    background: linear-gradient(transparent 0%, #fff 70%);
  }
`;
 
const Description: FunctionComponent<DescriptionProps> = ({ description }) => {
  const [isOpen, setOpen] = useState(false);

 const handleClick = () => {
    setOpen(prev => !prev);
  }

  return (
    <>
      <CustomizedTypography variant="body2" className={isOpen ? 'description--full' : 'description--short'}>
        { description }
      </CustomizedTypography>
      <Link
        component="button"
        variant="subtitle2"
        underline="none"
        onClick={handleClick}
        sx={{'margin-top': '10px'}}
      >
        { isOpen ? 'Show less' :  'Show more' }
      </Link>
    </>
   );
}
 
export default Description;