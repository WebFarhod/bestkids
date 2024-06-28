import { ChangeEvent, useEffect, useState } from "react";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Iconify from "../../../components/admin/iconify/iconify";
import Scrollbar from "../../../components/admin/scrollbar";

import UserTableHead from "../user-table-head";

import TableNoData from "../table-no-data";
import UserTableRow from "../user-table-row";
import TableEmptyRows from "../table-empty-rows";
import UserTableToolbar from "../user-table-toolbar";
import { emptyRows, applyFilter, getComparator } from "../utils";
import InputTeacherItem from "../userItem";

import { Box, LinearProgress } from "@mui/material";
import { useTeaches } from "../../../service/query/teacher/teacherQuery";
import { ITeacher } from "../../../types/teacherType";
import { defaultData, useTeacherStore } from "../../../store/admin/teacher";

export default function TeacherPage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [selected, setSelected] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const setOpen = useTeacherStore((state) => state.setModal);
  const setModalType = useTeacherStore((state) => state.setModalType);
  const setTeacherData = useTeacherStore((state) => state.setTeacherDetail);

  const dataQuery = useTeaches();
  const data = dataQuery.data;

  const handleSort = (id: string) => {
    const isAsc = orderBy === id && order === "asc";
    if (id !== "") {
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data?.map((n) => (n._id ? n._id : ""));
      setSelected(newSelecteds ? newSelecteds : []);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: data ? data : [],
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  // if (dataQuery.isFetching) {
  //   return (
  //     <Box sx={{ width: "100%" }}>
  //       <LinearProgress />
  //     </Box>
  //   );
  // }

  useEffect(() => {
    setSelected([]);
  }, [data]);

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
          <Typography variant="h4">Oʻqituvchilar</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => {
              setModalType("add");
              setTeacherData(defaultData);
              setOpen(true);
            }}
          >
            Qoʻshish
          </Button>
        </Stack>
        <Card>
          <UserTableToolbar
            selected={selected}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ overflow: "unset" }}>
              <Table sx={{ minWidth: 800 }}>
                <UserTableHead
                  order={order}
                  orderBy={orderBy}
                  rowCount={data ? data.length : 0}
                  numSelected={selected.length}
                  onRequestSort={handleSort}
                  onSelectAllClick={handleSelectAllClick}
                  headLabel={[
                    { id: "name", label: "Ism" },
                    { id: "role", label: "Lavozim" },
                    { id: "" },
                  ]}
                />
                <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: ITeacher) => (
                      <UserTableRow
                        key={row._id}
                        data={row}
                        selected={
                          selected.indexOf(row._id ? row._id : "") !== -1
                        }
                        handleClick={() => handleClick(row._id ? row._id : "")}
                      />
                    ))}

                  <TableEmptyRows
                    height={77}
                    emptyRows={emptyRows(
                      page,
                      rowsPerPage,
                      data ? data.length : 0
                    )}
                  />

                  {notFound && <TableNoData query={filterName} />}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            page={page}
            component="div"
            count={data ? data.length : 0}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            labelRowsPerPage={"Qatorlar soni"}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
      <InputTeacherItem />
    </>
  );
}
