import { FunctionComponent } from "react";
import { Button, Chip, Box, Typography, Divider } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { blue } from '@mui/material/colors';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TrainIcon from '@mui/icons-material/Train';
import Label from "../../../components/Label/Label";
import SalesWidget from "../../../components/SalesWidget/SalesWidget";
import InfoWidget from "../../../components/InfoWidget/InfoWidget";
import DeliveryList from "./DeliveryList";

interface BookOrderDetailsProps {
  
}
 
const BookOrderDetails: FunctionComponent<BookOrderDetailsProps> = () => {
  return ( 
    <Grid2 container rowSpacing={2} columnSpacing={0}>
      <Grid2 container xs={12} spacing={1}>
        <Grid2>
          <Typography variant='h5'>$270</Typography>
        </Grid2>
        <Grid2>
          <Chip label="Sales" color="primary" size="small" sx={{ borderRadius: '5px' }} />
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Label color="green">
          <LocalShippingIcon fontSize='small'/>
          <Typography variant='body2'>In stock</Typography>
        </Label>
        <Label color="gray">
          <Typography variant='body2' component='li'>Paper book</Typography>
        </Label>
      </Grid2>
      <Grid2 container xs={12}>
        <SalesWidget title='Second book as a gift' endDate="2023-06-01" />
      </Grid2>
      <Grid2 container spacing={1} xs={12}>
        <Grid2 xs={12}>
          <Button color="primary" variant="contained" fullWidth>Buy now</Button>
        </Grid2>
        <Grid2 xs={12}>
          <Button color="warning" variant="contained" fullWidth>Cart</Button>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={1} xs={12}>
        <InfoWidget  
          iconBg={blue[500]}
          title='Activate delivery'
          description='Free sheeping for $111'
        >
          <ToggleOffIcon />
        </InfoWidget>
      </Grid2>
      <Grid2 container spacing={1} xs={12}>
        <InfoWidget  
          iconBg={blue[500]}
          title='Specify address'
          description='Track your delivery'
        >
          <DeliveryDiningIcon />
        </InfoWidget>
      </Grid2>
      <Grid2 container spacing={1} xs={12}>
        <DeliveryList deliveries={deliveries} />
      </Grid2>
      <Divider light sx={{ width: '100%'}}/>
      <Grid2 px={2} container spacing={2} xs={12}>
        <Grid2 xs={6} display='flex' flexDirection='column'>
          <Typography variant='subtitle2'>Seller</Typography>
          <Typography variant='caption'>Ababahalamaga</Typography>
        </Grid2>
        <Grid2 xs={6} display='flex' flexDirection='column' alignItems='end'>
          <Typography variant='subtitle2'>Code</Typography>
          <Typography variant='caption'>11212</Typography>
        </Grid2>
      </Grid2>
    </Grid2>
   );
}
 
export default BookOrderDetails;

// Mocked data for delivery
const deliveries = [
  {
    type: 'Post',
    priceRange: '0-10$',
    icon: LocalPostOfficeIcon,
    options: [
      {
        label: 'Curier',
        price: '10$'
      },
      {
        label: 'Self-delivery',
        price: 'free'
      }
    ]
  },
  {
    type: 'Air-delivery',
    priceRange: '0-80$',
    icon: AirplanemodeActiveIcon,
    options: [
      {
        label: 'Local',
        price: '30$'
      },
      {
        label: 'International',
        price: '80$'
      }
    ]
  },
  {
    type: 'Train',
    priceRange: '0-30$',
    icon: TrainIcon,
    options: [
      {
        label: 'Local',
        price: '10$'
      },
      {
        label: 'International',
        price: '30$'
      }
    ]
  }
]