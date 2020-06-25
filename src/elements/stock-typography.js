import React from 'react';
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



const StockTypography = ({stock}) => {


    const Stock = styled(Typography)({

        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        color: "#3f51b5",
        textTransform:'uppercase'

    });

    return (
        <Stock>stock: {stock}</Stock>
    );
};


export default StockTypography;