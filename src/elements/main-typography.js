import React from 'react';
import {styled} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const MainTypography = ({text}) => {


    const Main = styled(Typography)({
        fontSize: '18px',
        color: "#131301",
        fontWeight:'bold'
    });

    return (
        <Main>{text}</Main>
    );
};


export default MainTypography;