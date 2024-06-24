import { Box, AppBar, Toolbar,Stack, Typography, Drawer, List, ListItem, IconButton,Divider,ListItemButton,ListItemIcon,ListItemText} from '@mui/material'
import Logout from '@mui/icons-material/Logout';
import "./components.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import AssistantIcon from '@mui/icons-material/Assistant';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState,useEffect } from 'react';
import { AI_TUTOR_PAGE_ID, JS_COURSE_PAGE_ID, JS_HUB_PAGE_ID } from '../const/pages';
import useChatGptDialog from '../hooks/useChatGptDialog';
import Text from './Text';
import { PRIMARY_COLOR, SECONDARY_COLOR, XL_SPACING, XXL_SPACING } from '../const/colors';

const pages = [
  {
    id:JS_COURSE_PAGE_ID,
    title:'JS course',
    path:"/js_course",
    icon:<SchoolIcon  sx={{fill:"#4d8580"}}/>},
    {
      id:JS_HUB_PAGE_ID,
      title:'JS hub',
      path:"/js_hub",
      icon:<GroupsIcon sx={{fill:SECONDARY_COLOR}} />,
    },{
    id:AI_TUTOR_PAGE_ID,
    title:"JS playground",
    path:"/ai_tutor",
    icon:<AssistantIcon sx={{fill:SECONDARY_COLOR}}/>
    }, 
]

function NavIcon({page,color}){
  switch(page){
      case JS_COURSE_PAGE_ID:
        return <SchoolIcon  sx={{fill:color}}/>
        case JS_HUB_PAGE_ID:
          return <GroupsIcon  sx={{fill:color}}/>
          case AI_TUTOR_PAGE_ID:
            default:
        return <AssistantIcon  sx={{fill:color}}/>
  }
}

function PageLayout({children}) {
  const navigate = useNavigate();
  const {state:{
    page
  }} = useLocation()
  
  const { handleOpen, DialogComponent } = useChatGptDialog();

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
      <Text variant='h6' color={PRIMARY_COLOR} sx={{fontWeight:"700",marginLeft:XXL_SPACING}}>
          JS MASTERY
        </Text>
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
            // <ListItem  sx={{background: page === pageData.id ? '#9ecfff':"white"}} key={pageData.id} disablePadding>
            <ListItem key={pageData.id} disablePadding>
              <ListItemButton sx={{borderBottom:"1px solid #f5f5f5"}}  onClick={()=>{
                document.querySelector(".css-11of86k").scrollTo({
                  top:0,
                  behavior:"smooth"
                })
                navigate(pageData.path,{state: { page: pageData.id }})
              }}>
                <ListItemIcon color={PRIMARY_COLOR}>
                  <NavIcon page={pageData.id} color={page === pageData.id && PRIMARY_COLOR}/>
                </ListItemIcon>
                <ListItemText primary={pageData.title} sx={{color:page === pageData.id && PRIMARY_COLOR}} />
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