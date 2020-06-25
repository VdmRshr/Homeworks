import React from 'react';
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



const PriceTypography = ({price, currency}) => {


    const Price = styled(Typography)({

        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '22px',
        color: "#227426",

    });

    return (
        <Price>{price} {currency}</Price>
    );
};

export default PriceTypography;