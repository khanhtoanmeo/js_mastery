import { Editor } from '@monaco-editor/react'
import { Stack ,Box, Button, ButtonGroup, Typography, CircularProgress,InputLabel,MenuItem,Select,FormControl} from '@mui/material'
import React, { useState } from 'react'
import { fetchAPI } from '../helpers/helper'
import { EXAMPLE_BOX_COLOR, L_SPACING, M_SPACING, S_SPACING, TEXT_COLOR, XL_SPACING } from '../const/colors'
import Text from './Text'
import { lessons } from '../data/lessons'
import { DONE, PENDING } from '../const/submissionStatus'
import { Pending } from '@mui/icons-material'

function CodeEditor({height = "300px",question="",showSubmit=true,showGenerate=false,onSubmit,status = null,submissionData,submissions,setSubmissons}) {
    const [excercise,setExcercise] = useState(question)
    const [code, setCode] = useState(submissionData?.code || '')
    const [output,setOutput] = useState("")
    const [loading,setLoading] = useState(false)
    const [topic,setTopic] = useState("Ngẫu nhiên");
    const [excerciseStatus,setExcerciseStatus] = useState(status)

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
            if(data.success) setOutput(JSON.parse(data.data))
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

    const submitCode = async ()=>{
      try {
          setLoading(true)
          console.log(submissionData);
          const data = await fetchAPI("/submissions",{method:"POST",body:{...submissionData,code}})
          console.log("DATA ::: ",data);
          if(data.success) setExcerciseStatus(PENDING)
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
      <Box sx={{width:"100%", backgroundColor:"#dbdbdb"}}>
    <Stack direction='row' alignItems="center" gap={L_SPACING} justifyContent={showSubmit ? "space-between" :"left"}>
    <ButtonGroup disabled={loading} sx={{margin:S_SPACING}}>
          <Button disabled={!code.trim()} onClick={()=>executeCode()}>Chạy code</Button>
          {showGenerate && 
          <Button onClick={()=>generateQuestion()}>Tạo câu hỏi</Button>
        }
          <Button disabled={!excercise || !code.trim()} onClick={()=>analyzeCode()}>Phân tích</Button>
          {showSubmit && <Button  onClick={()=>submitCode()} disabled={!code.trim() || excerciseStatus === DONE}>{excerciseStatus === PENDING ? "Sửa bài":"Nộp bài"} </Button> }
      </ButtonGroup>
      {showSubmit && !loading && (!excerciseStatus ? <Badge>Chưa nộp bài</Badge> :<Badge status={excerciseStatus} point={submissionData?.point}>{excerciseStatus === PENDING ? "Chờ chấm bài" : `${submissionData?.point} điểm` }</Badge>)}
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
      <Box textAlign='left' padding={M_SPACING} width="100%" flexGrow={1} overflow="auto">
          {output && <Output output={output}/>}
      </Box>
  </Stack>
</Box>
      </Stack>
     </Stack>
)
}

export default CodeEditor

function Badge({children,sx,status,point=0}){
  const color = ()=>{
    switch(status){
      case DONE:
        return point >=5 ? "#30a530" :"#c73333";
        case PENDING:
          return "#bfbf48";
        default:
          return "#676464"
    }
  }
    return <Box marginRight={M_SPACING}  height="28px" sx={{background:color,paddingInline:L_SPACING,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px",...sx}}>
      <Text sx={{color:"#fef3f3"}}>{children}</Text>
    </Box>
}

function Output({output}){

  if(typeof output === 'object' && ['good','bad',"improvement"].every(key=>output.hasOwnProperty(key))){
    const {good, bad,improvement} = output
    return <Stack gap={S_SPACING}>
      <Text>- Điểm tốt: {good}</Text>
      <Text>- Điểm chưa tốt: {bad}</Text>
      <Text>- Cách cải thiện: {improvement}</Text>
    </Stack>
  }
  if(typeof output !== 'string') return ""
  return output.split('\n').map((line)=><Text key={line} color="#090909" >
  {line}
</Text>)
}