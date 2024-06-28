// import { useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ClassCard from "../class-card";
import { IClass } from "../../../types/classType";
import { Box, Button, LinearProgress } from "@mui/material";
import Iconify from "../../../components/admin/iconify/iconify";
import { useClasses } from "../../../service/query/class/classQuery";
import { defaultClass, useClassStore } from "../../../store/admin/class";
import ClassInput from "../class-input";
import ClassDetail from "../class-detail";
// import ProgramDetail from "../program-detail";
// import { defaultProgram, useClassStore } from "../../../store/admin/program";
// import ProgramInput from "../program-input";
// import { usePrograms } from "../../../service/query/program/programQuery";

export default function ProgramsView() {
  const setOpen = useClassStore((state) => state.setModal);
  const setModalType = useClassStore((state) => state.setModalType);
  const setClassData = useClassStore((state) => state.setClassDetail);

  const dataQuery = useClasses();
  const data = dataQuery.data;

  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  // if (dataQuery.isFetching) {
  //   return (
  //     <Box sx={{ width: "100%" }}>
  //       <LinearProgress />
  //     </Box>
  //   );
  // }

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
          <Typography variant="h4">Sinflar</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => {
              setModalType("add");
              setClassData(defaultClass);
              setOpen(true);
            }}
          >
            Qoʻshish
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap-reverse"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* <ProgramFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />
ProgramCartWidget
          <ProgramSort /> */}
          </Stack>
        </Stack>

        <Grid container spacing={3}>
          {data?.map((program: IClass, index: number) => (
            <Grid key={index} xs={12} sm={6} md={3}>
              <ClassCard data={program} />
            </Grid>
          ))}
        </Grid>

        {/* <ProgramCartWidget /> */}
      </Container>
      <ClassDetail />
      <ClassInput />
    </>
  );
}
