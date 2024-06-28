import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Box, Button, LinearProgress } from "@mui/material";
import Iconify from "../../../components/admin/iconify/iconify";
import { useOptions } from "../../../service/query/option/optionQuery";
import { IOption } from "../../../types/optionType";
import OptionsCard from "../options-card";
import { defaultOption, useOptionStore } from "../../../store/admin/option";
import OptionInput from "../option-input";

export default function ProgramsView() {
  const setOpen = useOptionStore((state) => state.setModal);
  const setModalType = useOptionStore((state) => state.setModalType);
  const setOptionData = useOptionStore((state) => state.setOptionDetail);

  const dataQuery = useOptions();
  const data = dataQuery.data || [];

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
          <Typography variant="h4">Fikrlar</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => {
              setModalType("add");
              setOptionData(defaultOption);
              setOpen(true);
            }}
          >
            Qoʻshish
          </Button>
        </Stack>

        <Grid container spacing={3}></Grid>
        {data
          ?.sort((a, b) => {
            const createdAtA = a.createdAt
              ? new Date(a.createdAt).getTime()
              : 0;
            const createdAtB = b.createdAt
              ? new Date(b.createdAt).getTime()
              : 0;
            return createdAtB - createdAtA;
          })
          ?.map((option: IOption) => (
            <OptionsCard data={option} />
          ))}
      </Container>
      <OptionInput />
    </>
  );
}
