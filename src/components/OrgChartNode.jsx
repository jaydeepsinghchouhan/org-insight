import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";

const OrgChartNode = ({ nodeDatum, onNodeClick }) => {
  const data = nodeDatum?.data ?? nodeDatum;

  const photo = data?.photo;
  const department = data?.department || "NA";
  const role = data?.role || "Employee";
  const managerId = data?.managerId || null;
  const username = data?.username || "unknown";
  const name =
    data?.firstName && data?.lastName
      ? `${data.firstName} ${data.lastName}`.trim()
      : data?.name || username;
  const email = data?.email || "";

  return (
    <g onClick={onNodeClick} style={{ cursor: "pointer" }}>
      <foreignObject x={-85} y={-90} width={170} height={200}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ width: "100%", height: "100%" }}
        >
          <Card
            sx={{
              width: "100%",
              minHeight: "140px",
              maxHeight: "175px",
              borderRadius: 4,
              boxShadow: 3,
              bgcolor: "background.paper",
              textAlign: "center",
              p: 1.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            elevation={4}
          >
            <Avatar
              src={photo}
              alt={name}
              sx={{
                width: 48,
                height: 48,
                fontWeight: "bold",
                fontSize: "1.2rem",
                mb: 1,
                bgcolor: "primary.main",
              }}
            >
              {!photo && username?.charAt(0)?.toUpperCase()}
            </Avatar>
            <CardContent sx={{ p: 0, width: "100%" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: "text.primary",
                    mb: 0.2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                    cursor: "default",
                  }}
                >
                  {name}
                </Typography>

              <Tooltip title={email}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 0.5,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                    cursor: "default",
                  }}
                >
                  {email}
                </Typography>
              </Tooltip>

              <Tooltip title={managerId ? role : "CEO"}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 0.2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                    cursor: "default",
                  }}
                >
                  {managerId ? role : "CEO"}
                </Typography>
              </Tooltip>

              {managerId && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      mb: 0.2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: "100%",
                      cursor: "default",
                    }}
                  >
                    {department}
                  </Typography>
              )}
            </CardContent>
          </Card>
        </div>
      </foreignObject>
    </g>
  );
};

OrgChartNode.propTypes = {
  nodeDatum: PropTypes.object.isRequired,
  onNodeClick: PropTypes.func,
};

OrgChartNode.defaultProps = {
  onNodeClick: () => {},
};

export default React.memo(OrgChartNode);
