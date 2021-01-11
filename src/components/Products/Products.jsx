import React from 'react';
import { Grid } from '@material-ui/core' ;
import Product from './Product/Product';
import useStyles from './styles'

const products = [
  {id: 1, name:'Shoes', description: 'Running shoes. ', price: '$5', image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ba1361b6-335d-4224-a1ff-b71b685507a2/precision-4-basketball-shoe-N8ZKrT.jpg"},
  {id: 2, name:'Shoes', description: 'Running shoes. ', price: '$5', image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ba1361b6-335d-4224-a1ff-b71b685507a2/precision-4-basketball-shoe-N8ZKrT.jpg"}

]
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((products) => (
          <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Product products={products} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}
export default Products;