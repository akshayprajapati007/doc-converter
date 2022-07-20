import { Typography, Paper, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  mainContainer: {
    height: '4.8em',
    display: 'flex',
    border: '1px solid rgb(232, 232, 232)',
    borderRadius: '0.5em',
    padding: '0.3em',
    background: 'rgb(250,250,250)',
    cursor: 'pointer',
    maxWidth: '18rem',
    minWidth: '18rem',
  },
  imageContainer: {
    backgroundColor: 'rgb(250,250,250)!important',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '35px',
    marginTop: '0.7em',
    marginLeft: '0.2em',
  },
  contentContainer: {
    margin: '0.5em 0.7em',
    backgroundColor: 'rgb(250,250,250)!important',
  },
  titleBox: {
    marginBottom: '0 !important',
    fontWeight: '600 !important',
  },
  descriptionBox: {
    maxWidth: '85%',
    wordBreak: 'break-word',
    marginBottom: '0',
  },
})

interface ISelectionContainerProps {
  title: string
  path: string
  description: string
  pageName: string
  isUnderDevelopment: boolean
}

const ServiceContainer = ({
  title,
  path,
  description,
  pageName,
  isUnderDevelopment,
}: ISelectionContainerProps) => {
  const navigate = useNavigate()
  const classes = useStyles()

  const handleServiceRedirect = (pathName: string) => {
    navigate(pathName)
  }

  return (
    <Box
      className={classes.mainContainer}
      onClick={() => {
        !isUnderDevelopment && handleServiceRedirect(pageName)
      }}
    >
      <Paper elevation={0} className={classes.imageContainer}>
        <img className={classes.image} src={path} alt="icon" />
      </Paper>
      <Paper elevation={0} className={classes.contentContainer}>
        <Typography
          variant="h5"
          className={classes.titleBox}
          sx={{ fontSize: 20 }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          className={classes.descriptionBox}
          sx={{ fontSize: 14 }}
        >
          {description}
        </Typography>
        {isUnderDevelopment && (
          <Typography variant="h6" sx={{ fontSize: 10, color: '#A9A9A9' }}>
            (Under Development)
          </Typography>
        )}
      </Paper>
    </Box>
  )
}

export default ServiceContainer
