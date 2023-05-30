import React, { FunctionComponent, PropsWithChildren } from "react";
import { Box, styled } from "@mui/material";
import { shouldForwardProp } from '../../utils/custom-component-props';

type LabelProps = PropsWithChildren<{ color: string }>;

const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => shouldForwardProp<any>(['color'], prop),
})<any>(({ theme, color }) => ({
  color,
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingRight: '10px'
}));
 
const Label: FunctionComponent<LabelProps> = ({ children, color }) => {
  return ( 
    <Wrapper color={color}>
      {children}
    </Wrapper>
   );
}
 
export default Label;