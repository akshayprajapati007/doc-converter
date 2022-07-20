import { Button } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFileOutlined'
import { documentLogo } from 'assests/images'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  subContainer: {
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed black',
    borderRadius: '0.5em',
    height: '20em',
    width: '28em',
  },
  innerContainer: {
    padding: '12px',
    borderRadius: '0.5em',
    backgroundColor: 'rgb(61, 153, 245)',
    boxShadow: '7px 7px 8px #d6d6d6',
  },
  uploadButton: {
    padding: '0.6em !important',
    backgroundColor: '#ffffff !important',
    color: '#000000 !important',
    fontSize: '14px !important',
  },
  documentLogo: {
    height: '95px',
    width: '100px',
    marginBottom: '0.8em',
  },
  loader: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: '9',
  },
})

interface IUploadContainer {
  isLoading: boolean
  acceptTypes: string
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const UploadContainer = ({
  isLoading,
  acceptTypes,
  handleFileChange,
}: IUploadContainer) => {
  const classes = useStyles()

  return (
    <div className={classes.subContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.uploadContainer}>
          <img
            className={classes.documentLogo}
            src={documentLogo}
            alt="document"
          />
          <Button
            variant="contained"
            component="label"
            className={classes.uploadButton}
            disabled={isLoading}
          >
            <AttachFileIcon />
            Upload File
            <input
              type="file"
              accept={acceptTypes}
              onChange={handleFileChange}
              hidden
            />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UploadContainer
