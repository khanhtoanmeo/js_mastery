import { Editor } from '@monaco-editor/react'
import { Stack ,Box, Button, ButtonGroup, Typography, CircularProgress,InputLabel,MenuItem,Select,FormControl} from '@mui/material'
import React, { useState } from 'react'
import { fetchAPI } from '../helpers/helper'
import { EXAMPLE_BOX_COLOR, L_SPACING, M_SPACING, S_SPACING, TEXT_COLOR, XL_SPACING } from '../const/colors'
import Text from './Text'
import { lessons } from '../data/lessons'

function CodeEditor({height = "300px",question="",showSubmit=true,showGenerate=false}) {
    const [excercise,setExcercise] = useState(question)
    const [code, setCode] = useState('//Add some code')
    const [output,setOutput] = useState("")
    const [loading,setLoading] = useState(false)
    const [topic,setTopic] = useState("Ngẫu nhiên");

    const executeCode = async ()=>{
        try {
            setLoading(true)
            const data = await fetchAPI("/code/execute",{method:"POST",body:{codeSnippet:code}})
            console.log("DATA ::: ",data);
            if(data.success) setOutput(data.data)
        } catch (error) {
         console.log(error);
        }
        finally{
            setLoading(false)

        }
    }

    const analyzeCode = async ()=>{
        if(!excercise) return;
        try {
            setLoading(true)
            const data = await fetchAPI("/code/analyze",{method:"POST",body:{codeSnippet:code,question:excercise}})
            console.log("DATA ::: ",data);
            if(data.success) setOutput(data.data)
        } catch (error) {
         console.log(error);
        }
        finally{
            setLoading(false)

        }
    }

    const generateQuestion = async ()=>{
        try {
            setLoading(true)
            const data = await fetchAPI("/code/generateQuestion",{method:"POST",body:{topic}})
            console.log("DATA ::: ",data);
            if(data.success) setExcercise(data.data)
        } catch (error) {
         console.log(error);
        }
        finally{
            setLoading(false)
        }
    }

  return (
     <Stack height={height}>
        {excercise && 
      <Text >{`- Bài tập: ${excercise}`}</Text>
    }
       <Stack  direction='row' height={height} sx={{borderRadius:S_SPACING,overflow:"hidden"}}>
  <Editor defaultLanguage='javascript' height="100%" width="50%" onChange={(data)=>setCode(data)} value={code} theme='vs-dark'/>
<Box width="50%" bgcolor={EXAMPLE_BOX_COLOR}>
  <Stack width="100%" alignItems="flex-end" height="100%"> 
      <Box sx={{width:"100%", backgroundColor:"#cbc8c8"}}>
    <Stack direction='row' alignItems="center" gap={L_SPACING}>
    <ButtonGroup disabled={loading} sx={{margin:S_SPACING}}>
          <Button onClick={()=>executeCode()}>Chạy code</Button>
          {showGenerate && 
          <Button onClick={()=>generateQuestion()}>Tạo câu hỏi</Button>
        }
          <Button disabled={!excercise} onClick={()=>analyzeCode()}>Phân tích</Button>
          {showSubmit && <Button>Nộp bài</Button> }
      </ButtonGroup>
      {showGenerate && <FormControl sx={{margin:S_SPACING,maxWidth:"200px"}}>
  <InputLabel id="demo-simple-select-label">Chủ đề</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={topic}
    label="Chủ đề"
    onChange={(v)=>setTopic(v.target.value)}
  >
    {[[...lessons,{title:"Ngẫu nhiên"}].map(({title})=><MenuItem key={title} value={title}>{title}</MenuItem>)]}
  </Select>
</FormControl>}
      {loading && <CircularProgress size="20px"/>}
    </Stack>
      </Box>
      <Box textAlign='left' paddingInlineStart={S_SPACING} width="100%" flexGrow={1} overflow="scroll">
          {output && output.split('\n').map((line)=><Text key={line} color="#090909" >
          {line}
      </Text>)}
   
      </Box>
  </Stack>
</Box>
      </Stack>
     </Stack>
)
}

export default CodeEditor