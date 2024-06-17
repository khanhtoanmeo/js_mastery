import {useContext, useEffect} from 'react'
import PageLayout from '../../components/PageLayout'
import { Typography ,Box, Stack} from '@mui/material'
import StudentContext from '../../contexts/StudentContext'
import CodeEditor from '../../components/CodeEditor'
import Text from '../../components/Text'
import { S_SPACING } from '../../const/colors'

function AITutor() {
  const {student} = useContext(StudentContext)

  console.log("STUDENT ::: ",student);

  // useEffect(()=>{
  //   setStudent(JSON.parse(localStorage.getItem("student")))
  // },[])

  return (
    <PageLayout>
     <Stack flexDirection='column' height="100%">
     <Box padding={S_SPACING}>
      <Text variant='h5'>Góc lập trình: </Text>
      </Box>
      <Box sx={{flexGrow:1}}>
      <CodeEditor height='100%' showSubmit={false} showGenerate/>
      </Box>
     </Stack>
    </PageLayout>
  )
}

export default AITutor