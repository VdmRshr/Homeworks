import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Header from "../../../components/header/header";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PriceTypography from "../../../elements/price-typography";
import StockTypography from "../../../elements/stock-typography";

const SingleProduct = () => {
    return (
        <Box>
            <Header/>
            <Box mt={4} component='main'>
                <Grid container justify='center' spacing={2}>
                    <Grid item sm={12} md={6}>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <img src="https://i2.rozetka.ua/goods/7566772/53913132_images_7566772512.jpg" alt=""/>
                        </Box>
                    </Grid>


                    <Grid item sm={12} md={6}>
                        <Box mb={3}>
                            <Typography component='h1' variant='h1'>Product 1</Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                eu,
                                pretium quis, sem. Nulla consequat massa quis enim.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                eu,
                                pretium quis, sem. Nulla consequat massa quis enim.
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <PriceTypography price='250' currency='$'/>
                        </Box>
                        <Box mb={3}>
                            <StockTypography stock='666'/>
                        </Box>
                        <Button color="primary" variant="contained">
                            Add To Cart
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SingleProduct;