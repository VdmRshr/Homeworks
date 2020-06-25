import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProductCard from "../product-card/product-card";
import Box from "@material-ui/core/Box";
import {products} from '../products-data/products-data';
import Header from "../../../components/header/header";

const ProductsList = () => {
    return (
        <Box>
            <Header/>
            <Box mt={4} component='main'>
            <Grid container justify='center' spacing={2}>
                <ProductCard productsData={products}/>
            </Grid>
            </Box>
        </Box>
    );
};

export default ProductsList;