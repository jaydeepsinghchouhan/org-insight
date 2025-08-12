import { Card, CardContent, Avatar, Typography, Tooltip, Box } from "@mui/material";

export default function EmployeeCard({ employee }) {
  return (
    <Card
      sx={{
        p: 2,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 400,
        width: 360,
      }}
    >
      <Avatar
        src={employee?.photo}
        alt={employee?.name}
        sx={{ width: 180, height: 180, mb: 2 }}
      />
      <CardContent sx={{ textAlign: "center", p: 2, width: '100%' }}>
        <Tooltip title={employee?.name}>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "default",
            }}
          >
            {employee?.name}
          </Typography>
        </Tooltip>
        <Tooltip title={employee?.role}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "default",
              mb: 1,
            }}
          >
            {employee?.managerId === null ? "CEO" : employee?.role}
          </Typography>
        </Tooltip>
        <Tooltip title={employee?.department}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "default",
            }}
          >
            {employee?.department} Department
          </Typography>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
