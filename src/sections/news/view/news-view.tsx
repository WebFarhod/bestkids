import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

// import { posts } from "../../../_mock/blog";
import Iconify from "../../../components/admin/iconify";
import NewsCard from "../news-card";
import { defaultNew, useNewStore } from "../../../store/admin/new";
import NewsInput from "../news-input";
import { useNews } from "../../../service/query/new/newQuery";
import { Box, LinearProgress } from "@mui/material";
import NewsDetail from "../news-detail";

// import Iconify from "src/components/iconify";

// import PostCard from "../post-card";
// import PostSort from "../post-sort";
// import PostSearch from "../post-search";

// ----------------------------------------------------------------------

export default function NewView() {
  const setOpen = useNewStore((state) => state.setModal);
  const setModalType = useNewStore((state) => state.setModalType);
  const setClassData = useNewStore((state) => state.setNewDetail);

  const dataQuery = useNews();
  const posts = dataQuery.data;

  if (dataQuery.isPending) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (dataQuery.isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4">Yangiliklar</Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => {
              setModalType("add");
              setClassData(defaultNew);
              setOpen(true);
            }}
          >
            Qoʻshish
          </Button>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <PostSearch posts={posts} /> */}
          {/* <PostSort
          options={[
            { value: "latest", label: "Latest" },
            { value: "popular", label: "Popular" },
            { value: "oldest", label: "Oldest" },
          ]}
        /> */}
        </Stack>

        <Grid container spacing={3}>
          {posts
            ?.sort((a, b) => {
              const createdAtA = a.createdAt
                ? new Date(a.createdAt).getTime()
                : 0;
              const createdAtB = b.createdAt
                ? new Date(b.createdAt).getTime()
                : 0;
              return createdAtB - createdAtA;
            })
            .map((post, index) => (
              <NewsCard key={post._id} post={post} index={index} />
            ))}
        </Grid>
      </Container>
      <NewsInput />
      <NewsDetail />
    </>
  );
}
