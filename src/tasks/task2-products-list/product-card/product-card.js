import React, {Fragment} from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PriceTypography from "../../../elements/price-typography";

const ProductCard = ({productsData}) => {

    let products;
    console.log(productsData);
    if (productsData) {
        products = (productsData.map((item) => (
            <Grid key={item.id} item xs={4} md={3} sm={6}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.img}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.desc}
                            </Typography>
                            <PriceTypography price={item.price} currency='$'/>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="primary">
                            Add To Cart
                        </Button>

                    </CardActions>
                </Card>
            </Grid>
        )))
    }





    return (
        <Fragment>
        {products}
        </Fragment>
    );
};

export default ProductCard;