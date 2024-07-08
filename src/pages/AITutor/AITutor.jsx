import {useContext, useEffect} from 'react'
import PageLayout from '../../components/PageLayout'
import { Typography ,Box, Stack} from '@mui/material'
import StudentContext from '../../contexts/StudentContext'
import CodeEditor from '../../components/CodeEditor'
import Text from '../../components/Text'
import { M_SPACING, S_SPACING } from '../../const/colors'

function AITutor() {
  const {student} = useContext(StudentContext)

  console.log("STUDENT ::: ",student);

  return (
    <PageLayout>
     <Stack flexDirection='column' height="100%">
     <Box padding={S_SPACING}>
      </Box>
      <Box sx={{flexGrow:1, padding:M_SPACING}}>
      <CodeEditor height='100%' showSubmit={false} showGenerate/>
      </Box>
      <Box height="50px">
        <p>{' '}</p>
      </Box>
     </Stack>
    </PageLayout>
  )
}

export default AITutor