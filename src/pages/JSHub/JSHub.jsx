import PageLayout from "../../components/PageLayout";
import {
  Avatar,
  Box,
  CircularProgress,
  FormControl,
  FormLabel,
  IconButton,
  LinearProgress,
  Stack,
  TextField,
  Card,
  Divider,
} from "@mui/material";
import {
  L_SPACING,
  M_SPACING,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  S_SPACING,
  XL_SPACING,
  XXL_SPACING,
} from "../../const/colors";
import Text from "../../components/Text";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useEffect, useState } from "react";
import StudentContext from "../../contexts/StudentContext";
import { fetchAPI } from "../../helpers/helper";
import useFetchApi from "../../hooks/useFetchApi";
import { processInitialsCustomerName } from "../../helpers/formatStudentName";

function JSHub() {
  const { loading, data, setData } = useFetchApi({
    url: "/posts",
    defaultData: [],
  });
  const {
    student: { _id },
  } = useContext(StudentContext);

  useEffect(() => {
    console.log("POSTS :: ", data);
  }, [data]);

  return (
    <PageLayout>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <PostSubmissionCard  setData={setData}/>
          <Stack sx={{ marginInline: "15%", marginBlock: XXL_SPACING,gap:XXL_SPACING }}>
            {!data?.length ? (
              <Text>Chưa có bài đăng nào.</Text>
            ) : (
              data.map((post) => <PostCard key={post._id} post={post} setData={setData}/>)
            )}
          </Stack>
        </>
      )}
        <Box height="50px">
        <p>{' '}</p>
      </Box>
    </PageLayout>
  );
}

export default JSHub;

function PostSubmissionCard({setData}) {
  const {
    student: { _id :studentId,name},
  } = useContext(StudentContext);
  const [loading, setLoading] = useState();
  const [content, setContent] = useState("");
  const createPost = async () => {
    try {
      setLoading(true);
      const data = await fetchAPI("/posts", {
        method: "POST",
        body: { content, studentId ,name},
      });
      if(data.success && data.data) setData(prev=>[...prev,data.data])
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setContent("");
    }
  };
  return (
    <Box
      sx={{
        marginInline: "10%",
        borderRadius: M_SPACING,
        paddingBlock: M_SPACING,
        background:"white",
        zIndex:100,
        marginBlock:M_SPACING,
        border:"solid 1px #afafaf",
      }}
    >
      <FormControl fullWidth>
        <Stack alignItems="center" gap={M_SPACING}>
          <FormLabel id="ask">
            <Text>Đăng câu hỏi thảo luận</Text>
          </FormLabel>
          <TextField
            sx={{ width: "90%" }}
            rows={2}
            multiline
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Cùng thảo luận về lập trình Javascript nhé!"
          />
          {loading ? (
            <CircularProgress
              sx={{ alignSelf: "end", marginInlineEnd: M_SPACING }}
              size="20px"
            />
          ) : (
            <IconButton
              disabled={!content}
              onClick={() => createPost()}
              sx={{ alignSelf: "end", marginInlineEnd: M_SPACING }}
            >
              <SendIcon sx={{fill:content && SECONDARY_COLOR}}/>
            </IconButton>
          )}
        </Stack>
      </FormControl>
    </Box>
  );
}

function PostCard({ post,setData }) {
  const [loading, setLoading] = useState();
  const [content, setContent] = useState("");
  const {
    student: { _id :studentId,name},
  } = useContext(StudentContext);

  async function createComment(){
    try {
      setLoading(true);
      const data = await fetchAPI("/comments", {
        method: "POST",
        body: { content, studentId,postId:post._id,name},
      });
      console.log("DATA ::: ", data);
      if(data.success && data.data) setData(prev=>prev.map((p)=>
        post._id !== p._id ? p : {...p,comments:[...p.comments,data.data]}
      ))
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setContent("");
    }
  }

  return (
    <Card key={post._id} sx={{ padding: L_SPACING,border:"solid 1px #d7d7d7",boxShadow:"14px 14px 20px #aaaaaa"}}>
    <Content {...post} nameColor={PRIMARY_COLOR} />
      <Divider sx={{ marginBlock: M_SPACING }} />
      <Box sx={{ textAlign: "left" }}>
        <Stack gap={M_SPACING}>
          <Text>Bình luận</Text>
          <Box sx={{maxHeight:"250px",overflowY:"auto"}} >
          <Stack paddingLeft={XL_SPACING} >
          {
            !post?.comments?.length ? <Text sx={{textAlign:"center"}}>Chưa có bình luận nào!</Text> : post.comments.map((comment)=><Content {...comment}/>  )
          }
          </Stack>
          </Box>
          <FormControl>
            <Stack direction="row" alignItems="center">
              <TextField sx={{flexGrow:1}} placeholder="Thêm bình luận" value={content}
            onChange={(e) => setContent(e.target.value)}/>
              {loading ? (
                <CircularProgress
                  sx={{ marginInlineEnd: M_SPACING }}
                  size="20px"
                />
              ) : (
                <IconButton
                  disabled={!content}
                  onClick={() => createComment()}
                  sx={{  marginInlineEnd: M_SPACING }}
                >
                  <SendIcon sx={{fill:content && SECONDARY_COLOR}}/>
                </IconButton>
              )}
            </Stack>
          </FormControl>
        </Stack>
      </Box>
    </Card>
  );
}


function Content({createdAt,name,content,avatarSize="0.8"}){
  return      <Stack padding={M_SPACING}>
  <Stack direction="row" alignItems="center" gap={S_SPACING} >
    <Avatar sx={{scale:avatarSize}}>{processInitialsCustomerName(name)}</Avatar>
    <Stack>
      <Text sx={{ marginBlock: 0 }} >{name}</Text>
      <Text sx={{ marginBlock: 0 }} color="#aaa9a9">
        {new Date(createdAt).toLocaleDateString("vi")}
      </Text>
    </Stack>
  </Stack>
  <Text sx={{ marginTop: S_SPACING, marginLeft: "65px" }}>
    {content}
  </Text>
</Stack>
}