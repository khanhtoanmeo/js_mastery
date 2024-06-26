import { Box, IconButton, LinearProgress, Paper, Stack } from '@mui/material'
import { useContext } from 'react'
import {  M_SPACING, PRIMARY_COLOR, SUBDDUED_COLOR, S_SPACING, XL_SPACING, XS_SPACING } from '../const/colors'
import Text from './Text'
import CodeEditor from './CodeEditor'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import useFetchApi from '../hooks/useFetchApi'
import StudentContext from '../contexts/StudentContext'
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useSubmissionDialog from '../hooks/useSubmissonDialog'
import { PENDING } from '../const/submissionStatus'

function Lesson({lesson}) {
    const {title,sections,idx,uniqueKey} = lesson
    const {student:{
      isAdmin
    }} = useContext(StudentContext)
    console.log("IS ADMIN ::: ",isAdmin);

    if(!isAdmin && isAdmin !== false) return;
    if(isAdmin) return <AdminLesson lesson={lesson}/>
    return (
   <StudentLesson lesson={lesson}/>
  )
}

export default Lesson

function Section({section,num,lessonId,studentId,submissions,setSubmissons}){
    const {title, explanation,examples,excercise,uniqueKey} = section
    const submission = submissions.find(sub=>sub.excerciseId === uniqueKey)
    return <Box textAlign='left' paddingInline={XL_SPACING} paddingBlock={S_SPACING}>
        <Text variant="h6" >{`${num}. ${title}`}</Text>
        <Text>{explanation}</Text>
        {examples && examples.length && examples.map((exp)=><Box marginBlock={XS_SPACING} textAlign='left' key={exp}>
            <Text>Ví dụ: </Text>
        <Box marginBlock={S_SPACING} paddingBlock={S_SPACING} paddingInline={M_SPACING} sx={{backgroundColor:"#efefef",borderRadius:XS_SPACING,

        }} >
                <Stack direction="row" alignItems='start' justifyContent="space-between">
           <Stack>
           {exp.split('\n').map(line=>
            <Text key={line}>{line}</Text>
            )}
           </Stack>
            <IconButton onClick={()=>navigator.clipboard.writeText(exp)}>
                <ContentPasteIcon sx={{fill:PRIMARY_COLOR}}/>
            </IconButton>
                </Stack>
        </Box>
        </Box>)}
        {excercise &&
        <CodeEditor question={excercise} status={submission?.status} submissionData={{
          excerciseId:uniqueKey,
          lessonId,
          studentId,
          point:submission?.point,
          code:submission?.content
        }} />
    }
    </Box>
}

function StudentLesson({lesson}){
  const {title,sections,idx,uniqueKey} = lesson
  const {student:{
    _id:studentId
  }} = useContext(StudentContext)

  const {data:submissions,setData:setSubmissons,loading} = useFetchApi({url:`/submissions?studentId=${studentId || JSON.parse(localStorage.getItem("student"))._id}&lessonId=${uniqueKey}`})
    if(loading) return <LinearProgress/>
    return (
    <Box paddingBlock={S_SPACING}  >
        <Box paddingLeft={S_SPACING}>
        <Text variant="h5">{`Bài ${idx}: ${title}`}</Text>
        </Box>
        {sections?.map((section,idx)=><Section num={idx+1} key={section.title} section={section} studentId={studentId} lessonId={uniqueKey} submissions={submissions}/>)}
        <Box height="50px">
        <p>{' '}</p>
      </Box>
    </Box>
  )
}

function AdminLesson({lesson}){
  const {title,sections,idx,uniqueKey} = lesson
  const excercises = sections.map(sec=>({excerciseId:sec.uniqueKey,excercise:sec.excercise})).filter(sec=>sec.excercise)
  const {data:submissions,setData:setSubmissons,loading} = useFetchApi({url:`/admin/submissions/${uniqueKey}`})
  console.log("EX ::: ",excercises,submissions);

  if(loading) return <LinearProgress/>
  return submissions ? (<Box padding={S_SPACING}>
    <Box paddingLeft={S_SPACING}>
    <Text variant="h5">{`Bài ${idx}: ${title}`}</Text>
    <Text variant='h6' sx={{marginTop:S_SPACING}}>Danh sách bài tập:</Text>
    <Stack>
      {excercises.map(({excerciseId, excercise},idx)=>{
        const submissionsData = submissions[excerciseId];
        return <Box padding={S_SPACING} sx={{textAlign:"left"}} key={excerciseId}>
        <Text sx={{fontSize:"17px"}}>{`Bài tập ${idx+1}: ${excercise}`}</Text>
        {!submissionsData || !submissionsData?.length ? <Box margin={S_SPACING} marginLeft={M_SPACING}> <Text color={SUBDDUED_COLOR}>Chưa có ai nộp bài.</Text></Box> : <Stack padding={M_SPACING}>
                <Text>Sinh viên đã nộp bài:</Text>
                <DataTable submissions={submissionsData} setSubmissons={setSubmissons}/>
            </Stack>}
           
        </Box>
      })}
    </Stack>
       <Box height="50px">
        <p>{' '}</p>
      </Box>
      </Box>

    </Box>):(<></>)
}



function DataTable({submissions,setSubmissons}) {
  const rows = submissions.map(sub=>({...sub,id:sub._id,point: sub.point || "null" ,sId:sub.studentUniqueId,status:sub.status === PENDING ? "Chưa chấm" :"Đã chấm"}))
  const columns = [
    { field: 'sId', headerName: 'MSSV', width: 200 },
    { field: 'name', headerName: 'Họ và tên', width: 300 },
    {
      field: 'status',
      headerName: 'Trạng thái',
      width: 100,
    },
    { field: 'createdAt', headerName: 'Ngày nộp', width: 100 },
    { field: 'point', headerName: 'Điểm số', width: 100 },
    { field: 'action', headerName: 'Bài làm', width: 200,renderCell:({row})=>{
      return <IconButton onClick={()=>handleOpen(row)}>
        <VisibilityIcon/>
      </IconButton>
    } }
  ];
  const {handleOpen,DialogComponent} = useSubmissionDialog({setSubmissons})
  
  return (
    <div style={{ width: '85%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableColumnSorting
        disableColumnMenu
        disableRowSelectionOnClick
      />
      <DialogComponent/>
    </div>
  );
}