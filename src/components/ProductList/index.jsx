import { Grid } from "@mui/material";
import ProductItem from "../ProductItem";

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={3} columns={16}>
      {products.map((product) => (
        <Grid key={product.id} item xs={8}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
