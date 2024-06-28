// import { useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

// import { programs } from "../../../_mock/programs";
// import { ProgramsData } from "../../../data/programs";
import ProgramCard from "../program-card";
import { IProgram } from "../../../types/programType";
import { Box, Button, LinearProgress } from "@mui/material";
import Iconify from "../../../components/admin/iconify/iconify";
import ProgramDetail from "../program-detail";
import { defaultProgram, useProgramStore } from "../../../store/admin/program";
import ProgramInput from "../program-input";
import { usePrograms } from "../../../service/query/program/programQuery";
// import ProductSort from "../program-sort";
// import ProductFilters from "../program-filters";
// import ProductCartWidget from "../program-cart-widget";

// ----------------------------------------------------------------------

// const data: IProgram[] = ProgramsData.map((v) => {
//   return {
//     _id: v._id,
//     image: v.img,
//     name: v.title,
//     description: v.text,
//     about: v.data.text1 + v.data.text2,
//     type: v.data.typeTeach,
//     price: v.data.price,
//     infos: v.info.map((item) => ({ name: item.name, info: item.type })),
//     teacher: {
//       image: v.data.teacherImg,
//       name: v.data.teacher,
//     },
//   };
// });

export default function ProgramsView() {
  const setOpen = useProgramStore((state) => state.setModal);
  const setModalType = useProgramStore((state) => state.setModalType);
  const setProgramData = useProgramStore((state) => state.setProgramDetail);

  const dataQuery = usePrograms();
  const data = dataQuery.data;

  // console.log(data);
  //   const [openFilter, setOpenFilter] = useState(false);

  //   const handleOpenFilter = () => {
  //     setOpenFilter(true);
  //   };

  //   const handleCloseFilter = () => {
  //     setOpenFilter(false);
  //   };
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
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Dasturlar</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            setModalType("add");
            setProgramData(defaultProgram);
            setOpen(true);
          }}
        >
          Qoʻshish
        </Button>
      </Stack>
      {/* <Typography variant="h4" sx={{ mb: 5 }}>
        Dasturlar
      </Typography> */}

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

          <ProgramSort /> */}
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {data?.map((program: IProgram, index: number) => (
          <Grid key={index} xs={12} sm={6} md={3}>
            <ProgramCard
              data={program}
              //  id={program._id}
            />
          </Grid>
        ))}
      </Grid>

      {/* <ProgramCartWidget /> */}
      <ProgramDetail />
      <ProgramInput />
    </Container>
  );
}
