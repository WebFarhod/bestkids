import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

export default function TableNoData({ query }: { query: string }) {
  return (
    <TableRow>
      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
        <Paper
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h6" paragraph>
            Topilmadi
          </Typography>

          <Typography variant="body2">
            <strong>&quot;{query}&quot;</strong>&nbsp; uchun hech narsa
            topilmadi.
            <br /> Yozuv xatolarini tekshirib ko'ring yoki toʻliq soʻzlardan
            foydalaning.
          </Typography>
        </Paper>
      </TableCell>
    </TableRow>
  );
}
