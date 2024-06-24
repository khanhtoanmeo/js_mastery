import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { lessons } from '../data/lessons'
import Text from './Text'
import { useNavigate } from 'react-router-dom';
import { JS_COURSE_PAGE_ID } from '../const/pages';
import { EXAMPLE_BOX_COLOR, L_SPACING, M_SPACING, SECONDARY_COLOR, S_SPACING } from '../const/colors';

function Lessons() {
  const navigate = useNavigate();

  return (
    <Box padding={M_SPACING}>
        <Text variant='h5'>Danh sách bài học: </Text>
        <List>
          <Grid container spacing={M_SPACING}>
          {lessons.map((lesson,idx)=>
            <Grid item xs={6}  onClick={()=>{navigate('/js_course/'+lesson.uniqueKey,{state:{page:JS_COURSE_PAGE_ID}})}}>
              <ListItemButton className='Lesson' sx={{backgroundColor:"#faf9f9",borderRadius:S_SPACING}}>
            <Text>{`Bài ${lesson.idx}: ${lesson.title}`}</Text>
              </ListItemButton>
            </Grid>
        )}
          </Grid>
        {/* {lessons.map((lesson,idx)=><ListItem  key={lesson.title}>
            <ListItemButton sx={{backgroundColor:"#faf9f9",borderRadius:S_SPACING}} onClick={()=>{navigate('/js_course/'+lesson.uniqueKey,{state:{page:JS_COURSE_PAGE_ID}})}}>
            <Text>{`Bài ${lesson.idx}: ${lesson.title}`}</Text>
            </ListItemButton>
        </ListItem>)} */}
        </List>
        <Box height="50px">
        <p>{' '}</p>
      </Box>
    </Box>
  )
}

export default Lessons