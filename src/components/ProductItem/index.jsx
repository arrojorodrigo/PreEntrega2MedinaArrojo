import * as React from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductItem({ product }) {
  return (
  <Container sx={{ mt: 5 }}>
    <Card sx={{ minWidth: 175 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2">
          {product.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   </Container>
  );
}
