import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { documentConvertLogo } from '../../assests/images/index'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: '40px',
        width: '40px',
        margin: 'auto 10px'
    }
})

const Navbar = () => {
    const classes = useStyles()

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img
                            className={classes.logo}
                            src={documentConvertLogo} />DOC CON
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
