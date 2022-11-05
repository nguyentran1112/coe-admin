import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Lottie from "lottie-react";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#53CEF4', boxShadow: "1px 2px 9px #53CEF4", borderRadius: 4 }}>
      <CardActionArea style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <CardContent>
          <Typography style={{ color: 'white', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
            {props.quantity}
          </Typography>
          <Typography variant="body2" color="white">
            {props.title}
          </Typography>
        </CardContent>
        <Lottie style={{ width: 150, height: 150 }} animationData={props.img} loop={true} />
      </CardActionArea>
    </Card>
  );
}
