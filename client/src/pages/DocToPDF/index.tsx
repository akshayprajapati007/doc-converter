import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import InfoContainer from 'components/InfoContainer'
import UploadContainer from 'components/UploadContainer'
import { fileTypeChecker } from 'utility/helper'
import { docToPdfservice } from 'services/convert-services'

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100vh',
  },
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
    border: '2px solid rgb(61, 153, 245)',
    borderRadius: '0.5em',
    height: '20em',
    width: '28em',
    backgroundColor: 'rgb(61, 153, 245)',
    boxShadow: '7px 7px 8px #d6d6d6',
  },
  uploadButton: {
    padding: '0.6em !important',
    backgroundColor: '#ffffff !important',
    color: '#000000 !important',
  },
  documentLogo: {
    height: '75px',
    width: '90px',
    marginBottom: '0.8em',
  },
  loader: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: '9',
  },
})

const DocToPDF = () => {
  const classes = useStyles()
  const [loader, setLoader] = useState(false)

  console.log('Demo')

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files !== null && event.target.files.length > 0) {
      const fileData = event.target.files[0]
      const isValid = fileTypeChecker(fileData?.name, 'doc')
      if (isValid) {
        let data = new FormData()
        await data.append('file_attachment', fileData)
        const result = await docToPdfservice(data)
      } else {
        alert('Invalid file type!')
      }
    }
  }

  return (
    <div className={classes.mainContainer}>
      {loader && <CircularProgress className={classes.loader} />}
      <InfoContainer title="Word to PDF" />
      <UploadContainer
        isLoading={loader}
        acceptTypes=".doc, .docx"
        handleFileChange={handleFileChange}
      />
    </div>
  )
}

export default DocToPDF
