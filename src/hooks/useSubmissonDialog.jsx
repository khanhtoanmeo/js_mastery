import { useState, useCallback, useRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, CircularProgress, Box, Stack, IconButton, Slider } from '@mui/material';
import { fetchAPI } from '../helpers/helper';
import Text from '../components/Text';
import { EXAMPLE_BOX_COLOR, M_SPACING, SECONDARY_COLOR, S_SPACING, XS_SPACING } from '../const/colors';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { DONE } from '../const/submissionStatus';


const useSubmissionDialog = ({setSubmissons}) => {
      const [loading,setLoading] = useState(false)
      const [open, setOpen] = useState(false);
      const [submission,setSubmisson] = useState({})
      const pointRef = useRef(null)

      const  actions = [
          { label: 'Chấm bài', onClick:()=> givePoint()}
        ]
        async function givePoint(){
            try {
              const point = pointRef.current.value || 0
                setLoading(true)
                const {lessonId,studentId,excerciseId} = submission
                console.log("READY :: ",submission);
                const data = await fetchAPI("/submissions",{method:"POST",body:{lessonId,studentId,excerciseId,status:DONE,point}})
                if(data.success) setSubmissons(prev=>({...prev, [excerciseId]:prev[excerciseId].map(sub=>sub.studentId === studentId ? {...sub,point,status:DONE} : sub)}))
            } catch (error) {
             console.log(error);
            }
            finally{
                setLoading(false)
                setOpen(false)
            }
        }

  const handleOpen = useCallback((sub) => {
    setSubmisson(sub)
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const DialogComponent = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{`Bài làm của ${submission.name}`}</DialogTitle>
      <DialogContent>
        <DialogContentText>{loading ?<CircularProgress size="20px"/> :<Content submission={submission} /> }</DialogContentText>
        <Slider ref={pointRef} step={1} max={10} min={0} onChange={(e=>{
          pointRef.current.value = e.target.value
        })} marks={new Array(11).fill(1).map((_,idx)=>({value:idx,label:idx}))}/>
      </DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button disabled={loading} key={index} onClick={action.onClick || handleClose} color="primary">
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );

  return {
    open,
    handleOpen,
    handleClose,
    DialogComponent,
  };
};

export default useSubmissionDialog;


function Content({submission:{content},point,setPoint}){
    return <Box textAlign="left">
        <Box  marginBlock={S_SPACING} paddingBlock={S_SPACING} paddingInline={M_SPACING} sx={{backgroundColor:EXAMPLE_BOX_COLOR,borderRadius:XS_SPACING,minWidth:500}} >
                <Stack direction="row" alignItems='start' justifyContent="space-between">
           <Stack>
           {content.split("\n").map(line=>
            <Text key={line}>{line}</Text>
            )}
           </Stack>
            <IconButton onClick={()=>navigator.clipboard.writeText(content)}>
                <ContentPasteIcon/>
            </IconButton>
                </Stack>
        </Box>
    </Box>
}