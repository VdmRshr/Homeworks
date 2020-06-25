import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const Header = () => {
    return (
        <AppBar position="static" >
            <Toolbar>

                <Typography variant="h2" component='h3' >
                  Online Store
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Header;