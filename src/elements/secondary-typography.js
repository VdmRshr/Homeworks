import React from 'react';
import {styled} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const SecondaryTypography = ({text}) => {


    const Secondary = styled(Typography)({
        fontSize: '12px',
        color: "#bdbdbd",
    });

    return (
        <Secondary>{text}</Secondary>
    );
};


export default SecondaryTypography;