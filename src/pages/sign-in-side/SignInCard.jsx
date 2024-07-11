import  React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CircularProgress, Card as MuiCard, Stack } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import useFetchApi from '../../hooks/useFetchApi';
import { useNavigate } from "react-router-dom";
import { fetchAPI } from '../../helpers/helper';
import useToast from '../../hooks/useToast';
import { AI_TUTOR_PAGE_ID, JS_COURSE_PAGE_ID } from '../../const/pages';
import StudentContext from '../../contexts/StudentContext';
import { PRIMARY_COLOR } from '../../const/colors';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  gap: theme.spacing(4),
  width: '100%',
  padding: theme.spacing(2),
  boxShadow:
    theme.palette.mode === 'light'
      ? 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px'
      : 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
    width: '450px',
  },
}));

export default function SignInCard() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const {data,loading,setLoading} = useFetchApi({url:"/students/sync",method:"POST"})
  const navigate = useNavigate();
  const {toast,setToast} = useToast({})
  const {setStudent} = useContext(StudentContext)
  const [isLogin,setIsLogin] = useState("true")


  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    try {
      setLoading(true)
      event.preventDefault();
    if(!validateInputs()) return; 
    const info = new FormData(event.currentTarget);
    const email = info.get('email');
    const password = info.get('password');
    const name = info.get('name')

    const body = isLogin ? {email,password} :{email,password,name};
    const endpoint = isLogin? '/auth/login':'/auth/signup'

    const data = await fetchAPI(  endpoint ,{method:"POST",body})
    if(!data.success && data.error) return setToast(data.error)
      setStudent(data.student)
      navigate('/js_course',{ state:{
        page: JS_COURSE_PAGE_ID}})
        localStorage.setItem("student",JSON.stringify(data.student))
    } catch (error) {
      setToast(error.message)
    }finally{
      setLoading(false)
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Vui lòng nhập email hợp lệ');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 3) {
      setPasswordError(true);
      setPasswordErrorMessage('Mật khẩu phải dài ít nhất 3 ký tự');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };


  return (
    <Card>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        {isLogin ? "Đăng nhập" :"Đăng ký"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
        }}
      >
        <FormControl>
          <FormLabel sx={{textAlign:"left"}} htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
            sx={{ ariaLabel: 'email' }}
          />
        </FormControl>
        <FormControl>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <FormLabel htmlFor="password">Mật khẩu</FormLabel>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
      {!isLogin &&   <FormControl>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <FormLabel htmlFor="name">Họ và tên</FormLabel>
          </Box>
          <TextField
            name="name"
            placeholder="Nguyễn Hữu A"
            type="text"
            id="name"
            required
            fullWidth
            variant="outlined"
          />
        </FormControl>}
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="submit" fullWidth variant="contained" disabled={loading}>
          {isLogin ? "Đăng nhập" :"Tạo tài khoản"}
        </Button>
        <button style={{background:"none",outline:"none",border:"none", color:"#a6a6a6"}} onClick={(e)=>{
          e.preventDefault()
          setIsLogin(prev=>!prev)
        }}>{isLogin ? "Tạo tài khoản" :"Đăng nhập"}</button>
      </Box>
      <Stack alignItems='center' >
        {loading && <CircularProgress size="20px"/>}
      </Stack>
      {toast}
    </Card>
  );
}
