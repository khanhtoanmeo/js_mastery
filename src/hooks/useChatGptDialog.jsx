import { useState, useCallback } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, CircularProgress, Box, Stack, IconButton } from '@mui/material';
import { fetchAPI } from '../helpers/helper';
import Text from '../components/Text';
import { EXAMPLE_BOX_COLOR, M_SPACING, SECONDARY_COLOR, S_SPACING, XS_SPACING } from '../const/colors';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import useToast from './useToast';



const useChatGptDialog = () => {
  const {toast,setToast} = useToast()
    const [selected,setSelected] = useState('')
      const  [content,setContent] = useState("")
      const [loading,setLoading] = useState(false)
      const [open, setOpen] = useState(false);
      const  actions = [
          { label: 'Hỏi chatgpt 4.0', onClick:()=> askChatGpt()},
          { label: 'Tra cứu với google', onClick: () =>{ 
            setOpen(false)
            window.open(`https://www.google.com/search?q=${selected.split('+')}+trong+Javascript`)} },
        ]
        const defaultContent = 'Tìm hiểu về văn bản được bôi đen?'
        async function askChatGpt(){
            try {
                setLoading(true)
                const data = await fetchAPI("/code/askGpt",{method:"POST",body:{query:selected}})
                const {explanation,examples} = JSON.parse(data.data)
                if(data.success) setContent({explanation,examples})
            } catch (error) {
             console.log(error);
             setToast("Chatgpt không thể xử lý đầu vào, hoặc đầu vào không liên quan đến lập trình Javascript")
             setOpen(false)
            }
            finally{
                setLoading(false)
            }
        }

  const handleOpen = useCallback((text) => {
    setContent('')
    setSelected(text)
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const DialogComponent = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{selected}</DialogTitle>
      <DialogContent>
        <DialogContentText>{loading ?<CircularProgress size="20px"/> :(content ? (<Content content={content}/>) :defaultContent) }</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button disabled={loading} key={index} onClick={action.onClick || handleClose} color="primary">
            {action.label}
          </Button>
        ))}
      </DialogActions>
      {toast}
    </Dialog>
  );

  return {
    open,
    handleOpen,
    handleClose,
    DialogComponent,
  };
};

export default useChatGptDialog;


function Content({content}){
    const {explanation,examples} = content
    console.log("DATA ::: ",explanation,examples);

    return <Box textAlign="left">
        <Text>{explanation}</Text>
        <Box marginBlock={S_SPACING} paddingBlock={S_SPACING} paddingInline={M_SPACING} sx={{backgroundColor:EXAMPLE_BOX_COLOR,borderRadius:XS_SPACING}} >
                <Stack direction="row" alignItems='start' justifyContent="space-between">
           <Stack>
           {examples.map(line=>
            <Text key={line}>{line}</Text>
            )}
           </Stack>
            <IconButton onClick={()=>navigator.clipboard.writeText(examples.join(""))}>
                <ContentPasteIcon/>
            </IconButton>
                </Stack>
        </Box>
    </Box>
}