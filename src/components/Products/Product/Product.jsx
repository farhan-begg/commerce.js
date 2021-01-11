import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles';


const Product = ({products, onAddToCart}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={products.media.source} title={products.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {products.name}
          </Typography>
          <Typography variant="h5">
            {products.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html: products.description}} variant="body2" color="textSecondary"/>
 
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton arial-label="Add to Cart" onClick={() => onAddToCart(products.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
      

  )
}

export default Product
