import { Box, AppBar, Toolbar,Stack, Typography, Drawer, List, ListItem, IconButton,Divider,ListItemButton,ListItemIcon,ListItemText} from '@mui/material'
import Logout from '@mui/icons-material/Logout';
import "./components.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import AssistantIcon from '@mui/icons-material/Assistant';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState,useEffect } from 'react';
import { AI_TUTOR_PAGE_ID, JS_COURSE_PAGE_ID, JS_HUB_PAGE_ID } from '../const/pages';
import useDialog from '../hooks/useDialog';

const pages = [{
  id:AI_TUTOR_PAGE_ID,
  title:"JS playground",
  path:"/ai_tutor",
  icon:<AssistantIcon/>
}, {
  id:JS_COURSE_PAGE_ID,
  title:'JS course',
  path:"/js_course",
  icon:<SchoolIcon />,
},
{
  id:JS_HUB_PAGE_ID,
  title:'JS hub',
  path:"/js_hub",
  icon:<GroupsIcon />,
}]

function PageLayout({children}) {
  const navigate = useNavigate();
  const {state:{
    page
  }} = useLocation()
  
  const { handleOpen, DialogComponent } = useDialog();

   useEffect(()=>{
    document.addEventListener('mouseup', () => {
      const selectedText = window.getSelection().toString();
      if(!selectedText.trim()) return;
      if (selectedText) {
        handleOpen(selectedText)
      }
    });
   },[])

  return (
   <Box sx={{ flexGrow: 1 }}>
    <AppBar className='PageLayout__AppBar' >
      <Toolbar className='PageLayout__Toolbar-Container' >
      <Stack className='PageLayout__Toolbar' direction="row" alignItems="center" justifyContent="space-between">
      <Typography>
          JS MASTERY
        </Typography>
      <IconButton onClick={()=>navigate('/')}>
        <Logout/>
      </IconButton>
      </Stack>
      </Toolbar>
<Stack direction="row" sx={{backgroundColor:"white"}}>
<Drawer
        sx={{
          width: "230px",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "230px",
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List sx={{paddingBlock:0}}>
          {pages.map((pageData) => (
            <ListItem  sx={{background: page === pageData.id ? '#ccf9fb' :"white"}} key={pageData.id} disablePadding>
              <ListItemButton onClick={()=>{
                navigate(pageData.path,{state: { page: pageData.id }})
              }}>
                <ListItemIcon>
                  {pageData.icon}
                </ListItemIcon>
                <ListItemText primary={pageData.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box overflow="scroll" height="100vh" flexGrow={1}>
      {children}
      </Box>
</Stack>
    </AppBar>
    <DialogComponent/>
   </Box>
  )
}

export default PageLayout