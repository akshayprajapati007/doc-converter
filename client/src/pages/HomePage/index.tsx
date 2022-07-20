import { wordSvg, pdfSvg, imageSvg, pptSvg } from 'assests/images'
import ServiceContainer from 'components/ServiceContainer'
import { makeStyles } from '@mui/styles'
import { Typography, Box } from '@mui/material'
import { AppRoutings } from 'utility/enums/app-routings'

const useStyles = makeStyles({
  mainContainer: {
    marginLeft: '5rem',
    marginRight: '5rem',
    marginTop: '10%',
    display: 'flex',
    justifyContent: 'space-between',
    height: '60vh',
    width: '80vw',
  },
  mainHeading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
    '& > h3': {
      margin: '0',
      fontSize: '2.8rem',
      fontFamily: '"Montserrat", "Poppins", sans-serif !important',
    },
    '& > span': {
      color: 'rgb(26,26,26)',
      fontWeight: 400,
      marginTop: '1em',
    },
  },
  servicesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    minWidth: '700px',
    border: '2px solid rgb(220, 220, 220)',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '2px 2px 3px rgb(220, 220, 220)',
  },
})

interface IServices {
  title: string
  path: string
  description: string
  pageName: string
  underDevelopment: boolean
}

const HomePage: React.FC = () => {
  const classes = useStyles()

  const services: IServices[] = [
    {
      title: 'Word to PDF',
      description: 'Convert editable word document to PDF',
      path: pdfSvg,
      pageName: AppRoutings.DocToPDF,
      underDevelopment: false,
    },
    {
      title: 'PDF to Word',
      description: 'Convert PDF to editable word document',
      path: wordSvg,
      pageName: AppRoutings.PDFToDoc,
      underDevelopment: true,
    },
    {
      title: 'Image to PDF',
      description:
        'Transform image file to PDF and share without quality issue',
      path: imageSvg,
      pageName: AppRoutings.ImageToPDF,
      underDevelopment: true,
    },
    {
      title: 'PDF to PPT',
      description: 'Convert PDF to Powerpoint presentation',
      path: pptSvg,
      pageName: AppRoutings.PDFToPPT,
      underDevelopment: true,
    },
  ]

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.mainHeading}>
        <Typography variant="h3">WELCOME</Typography>
        <Typography variant="h3">TO</Typography>
        <Typography variant="h3" color={'#1976d2'}>
          DOC CON
        </Typography>
        <span>Convert your documents with easy steps.</span>
      </Box>
      <Box className={classes.servicesContainer}>
        {services?.map(
          ({
            title,
            path,
            description,
            pageName,
            underDevelopment,
          }: IServices) => {
            return (
              <ServiceContainer
                key={title}
                title={title}
                path={path}
                description={description}
                pageName={pageName}
                isUnderDevelopment={underDevelopment}
              />
            )
          }
        )}
      </Box>
    </Box>
  )
}

export default HomePage
