import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignInSide from './pages/sign-in-side/SignInSide.jsx';
import AITutor from './pages/AITutor/AITutor.jsx';
import JSCourse from './pages/JSCourse/JSCourse.jsx';
import LessonPage from "./pages/Lesson/LessonPage.jsx";
import StudentContext from './contexts/StudentContext.js';
import { useState ,useEffect} from "react";
import { lessons } from "./data/lessons.js";
import JSHub from "./pages/JSHub/JSHub.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSide/>,
  },
  {
      path:"/ai_tutor",
      element:<AITutor/>
  },
  {
    path:"/js_course",
    element:<JSCourse/>
}, 
{path:"/js_hub",element:<JSHub/>},
 ...lessons.map((lesson)=>({path:"/js_course/"+lesson.uniqueKey,element :<LessonPage lesson={lesson}/>}))
]);

function App() {
  const [student,setStudent] = useState({})

  useEffect(()=>{
   if(!Object.keys(student).length) setStudent(JSON.parse(localStorage.getItem("student")) || {})
  },[])

  return (
    <StudentContext.Provider value={{student,setStudent}}>
    <RouterProvider router={router} />
    </StudentContext.Provider>
  )
}

export default App
