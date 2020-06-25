import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Link from "@material-ui/core/Link";
import Hr from "../../elements/hr";
import SecondaryTypography from "../../elements/secondary-typography";
import MainTypography from "../../elements/main-typography";

const PrivateAccount = () => {
    return (
        <Box display='flex' justifyContent='center' >
            <Box style={{maxWidth: '1440px', width: '100%'}}>
                <Grid container>
                    <Grid item lg={2} md={2} sm={12} xs={12} style={{borderRight: '1px solid #E2E7EE'}} >
                        <Box pt={4}>
                            <Typography component='h6' variant='h5'>Profile info</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={10} md={10} sm={12} xs={12}>
                        <Box pt={4} pl={3}>
                            <MainTypography text='Profile photo'/>
                            <Box mt={3} display='flex' alignItems='center'>
                                <Box borderRadius="50%" >
                                    <Avatar alt='avatar' src='' style={{width: '74px', height: '74px'}}/>
                                </Box>
                                <Box ml={3} display='flex' justifyContent='center'
                                     style={{flexDirection: 'column', width: '100%'}}>
                                    <Box mb={2} display='flex'>
                                        <Box flexGrow={1}>
                                            <Button variant="outlined">Upload photo</Button>
                                        </Box>
                                        <Box display='flex' alignItems='center'>
                                            <Button variant="outlined" color="secondary">Delete photo </Button>
                                        </Box>
                                    </Box>
                                    <SecondaryTypography text='At least 256px x 256px PNG or JPG.file' />
                                </Box>
                            </Box>
                            <Hr/>
                            <Box mb={3}>
                                <MainTypography text='General Info'/>
                                                            </Box>
                            <Box>
                                <form>
                                    <Box mb={2}>
                                        <TextField
                                            label="Name"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            style={{width: '440px'}}
                                        />
                                    </Box>
                                    <Box mb={2}>
                                        <TextField
                                            label="Last Name"
                                            id="outlined-size-small"
                                            variant="outlined"
                                            size="small"
                                            style={{width: '440px'}}
                                        />
                                    </Box>
                                </form>
                            </Box>
                            <Box mt={2}>
                                <MainTypography text='Role'/>

                            </Box>
                            <Box mt={2}>
                                <Typography>Customer</Typography>

                            </Box>
                            <Hr/>
                            <MainTypography text='Security'/>

                            <Box mb={3} mt={3}>
                                <Button variant="outlined">Change password</Button>

                            </Box>
                            <Hr/>
                            <Box display='flex' alignItems='center' mb={6.375}>
                                <Box mr={2} display='flex' alignItems='center'>

                                </Box>
                                <Link path='#' text='Delete account' underline='none' color='#DC2E2E'/>
                            </Box>
                            <Button variant="outlined">Save changes</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default PrivateAccount;