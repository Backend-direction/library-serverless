import { styled, Box, Typography, Chip } from "@mui/material";
import { FunctionComponent } from "react";
import { getRemainTime } from "../../utils/get-remain-time";

const WidgetWrapper = styled(Box)(({ theme }) => {
  return {
    border: `1px solid ${theme.palette.warning.main}`,
    borderRadius: '5px',
    marginTop: '10px',
    padding: '10px 0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }
});

interface SalesWidgetProps {
  title: string;
  endDate: string;
}
 
const SalesWidget: FunctionComponent<SalesWidgetProps> = ({ title, endDate }) => {
  return ( 
    <WidgetWrapper>
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Chip label="Sales" color="warning" size="small" sx={{ borderRadius: '0 5px 5px 0' }} />
        <Typography variant='caption'>
          {getRemainTime(endDate, (days, hours, minutes) => `${days} days ${hours} hours ${minutes} min`)}
        </Typography>
      </Box>
      <Box pl={1}>
        <Typography variant='subtitle2'>
          {title}
        </Typography>
      </Box>
    </WidgetWrapper>
   );
}
 
export default SalesWidget;