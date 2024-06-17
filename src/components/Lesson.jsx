import { Box, Icon, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { EXAMPLE_BOX_COLOR, L_SPACING, M_SPACING, SECONDARY_COLOR, S_SPACING, XL_SPACING, XS_SPACING } from '../const/colors'
import Text from './Text'
import CodeEditor from './CodeEditor'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import useDialog from '../hooks/useDialog'

function Lesson({lesson}) {
    const {title,sections,idx} = lesson
  
    

  return (
    <Box paddingBlock={S_SPACING}  >
        <Box paddingLeft={S_SPACING}>
        <Text variant="h5">{`Bài ${idx}: ${title}`}</Text>
        </Box>
        {sections?.map((section,idx)=><Section num={idx+1} key={section.title} section={section}/>)}
        <Box height="50px">
        <p>{' '}</p>
      </Box>
    </Box>
  )
}

export default Lesson

function Section({section,num}){
    const {title, explanation,examples,excercise} = section
    return <Box textAlign='left' paddingInline={XL_SPACING} paddingBlock={S_SPACING}>
        <Text variant="h6" >{`${num}. ${title}`}</Text>
        <Text>{explanation}</Text>
        {examples && examples.length && examples.map((exp)=><Box marginBlock={XS_SPACING} textAlign='left' key={exp}>
            <Text>Ví dụ: </Text>
            <Box marginBlock={S_SPACING} paddingBlock={S_SPACING} paddingInline={M_SPACING} sx={{backgroundColor:SECONDARY_COLOR,borderRadius:XS_SPACING}} >
                <Stack direction="row" alignItems='start' justifyContent="space-between">
           <Stack>
           {exp.split('\n').map(line=>
            <Text key={line}>{line}</Text>
            )}
           </Stack>
            <IconButton onClick={()=>navigator.clipboard.writeText(exp)}>
                <ContentPasteIcon/>
            </IconButton>
                </Stack>
        </Box>
        </Box>)}
        {excercise &&
        <CodeEditor question={excercise}/>
    }
    </Box>
}