import { FunctionComponent } from "react";
import { grey } from '@mui/material/colors';
import { Avatar, Box, Typography, styled } from '@mui/material';

interface InfoWidgetProps {
  iconBg: string,
  title: string,
  description: string,
  children: string | JSX.Element | JSX.Element[]
}

const WidgetWrapper = styled(Box)`
  background-color: ${grey[200]};
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
`
const InfoWidget: FunctionComponent<InfoWidgetProps> = ({ iconBg, title, description, children }) => {
  return ( 
    <WidgetWrapper p={1}>
      <Avatar sx={{ bgcolor: iconBg, marginRight: '10px' }}>
        {children}
      </Avatar>
      <Box>
        <Typography variant='subtitle2'>
          { title }
        </Typography>
        <Typography variant='caption' color={grey[700]}>
          { description }
        </Typography>
      </Box>
    </WidgetWrapper>
   );
}
 
export default InfoWidget;