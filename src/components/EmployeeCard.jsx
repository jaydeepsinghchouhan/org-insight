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
        width: 160, // Optional, limit card width for better text ellipsis
      }}
    >
      <Avatar
        src={employee.photo}
        alt={employee.name}
        sx={{ width: 80, height: 80, mb: 1 }}
      />
      <CardContent sx={{ textAlign: "center", p: 0, width: '100%' }}>
        <Tooltip title={employee.name}>
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
            {employee.name}
          </Typography>
        </Tooltip>
        <Tooltip title={employee.title}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "default",
              mb: 0.5,
            }}
          >
            {employee.title}
          </Typography>
        </Tooltip>
        <Tooltip title={employee.department}>
          <Typography
            variant="body2"
            color="primary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "default",
            }}
          >
            {employee.department}
          </Typography>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
