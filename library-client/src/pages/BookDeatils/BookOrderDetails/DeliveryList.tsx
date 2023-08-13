import { FunctionComponent } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';
import { IDelivery } from "../../../interfaces/IDelivery";


interface DeliveryListProps {
  deliveries: IDelivery[]
}
 
const DeliveryList: FunctionComponent<DeliveryListProps> = ({ deliveries }) => {
  return (
    <>
      {
        deliveries.map(delivery => {
          return (
          <Accordion disableGutters elevation={0} sx={{ background: 'transparent', width: '100%'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={delivery.type}
            >
              <Box sx={{ display: 'flex' , alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ display: 'flex' }}>
                  <delivery.icon />
                  <Typography sx={{ marginLeft: '5px'}} variant="subtitle2">{delivery.type}</Typography>
                </Box>
                <Typography variant="caption">{delivery.priceRange}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {
                delivery.options.map(option => {
                  return (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <Typography variant="body2">{option.label}</Typography>
                      <Typography variant="caption" color={grey[700]}>{option.price}</Typography>
                    </Box>
                  )
                })
              }
            </AccordionDetails>
          </Accordion>
          )
        })
      }
    </>
  );
}
 
export default DeliveryList;