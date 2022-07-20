import { makeStyles } from '@mui/styles'
import SmileIcon from '@mui/icons-material/SentimentSatisfiedAltRounded'
import SpeedIcon from '@mui/icons-material/OfflineBoltOutlined'
import SecureIcon from '@mui/icons-material/ShieldOutlined'
import { Typography, Paper } from '@mui/material';

const useStyles = makeStyles({
    subContainer: {
        padding: '2em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    pointsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    keyPoints: {
        display: 'flex',
        alignItems: 'center',
        margin: '0.1em'
    },
})

interface IInfoContainer {
    title: string
}

const InfoContainer = ({ title }: IInfoContainer) => {
    const classes = useStyles()
    return (
        <Paper elevation={0} className={classes.subContainer}>
            <Typography variant='h3' gutterBottom>{title}<br />Converter</Typography>
            <Paper elevation={0} className={classes.pointsContainer}>
                <span className={classes.keyPoints}><SmileIcon />&nbsp;No login or installation required</span>
                <span className={classes.keyPoints}><SpeedIcon />&nbsp;Convert your file quickly</span>
                <span className={classes.keyPoints}><SecureIcon />&nbsp;Safe and secure</span>
            </Paper>
        </Paper>
    )
};

export default InfoContainer;
