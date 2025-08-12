import React from "react";
import Tree from "react-d3-tree";
import { Card, CardContent, Avatar, Typography, Tooltip } from "@mui/material";

/**
 * Helper: Build hierarchical tree data from a flat array
 */
function buildTree(employees, managerId = null) {
  return employees
    .filter((emp) => emp.managerId === managerId)
    .map((emp) => ({
      ...emp,
      name: emp.name || "No Name",
      children: buildTree(employees, emp.id),
    }));
}

/**
 * MUI Employee Card Component (with ellipsis & tooltip for long text)
 */
function EmployeeCard({ employee }) {
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
        maxWidth: 200,
      }}
    >
      <Avatar
        src={employee.photo}
        alt={employee.name}
        sx={{ width: 64, height: 64, mb: 1 }}
      />
      <CardContent sx={{ textAlign: "center", p: 0, width: "100%" }}>
        <Tooltip title={employee.name}>
          <Typography
            variant="subtitle1"
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
            }}
          >
            {employee.title}
          </Typography>
        </Tooltip>
        <Tooltip title={employee.department}>
          <Typography
            variant="caption"
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

/**
 * OrgChartWithEmployeeCard component
 */
export default function OrgChartWithEmployeeCard({ employees = [] }) {
  const treeData = buildTree(employees);

  if (!treeData || treeData.length === 0) {
    return <p>No data available to display the tree.</p>;
  }

  // Custom renderer for org chart nodes
  const renderNode = ({ nodeDatum, toggleNode }) => (
    <foreignObject width={220} height={180} x={-110} y={-90}>
      <div
        onClick={() => toggleNode && toggleNode()}
        style={{ cursor: toggleNode ? "pointer" : "default" }}
      >
        <EmployeeCard employee={nodeDatum} />
      </div>
    </foreignObject>
  );

  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        overflow: "auto",
        border: "1px solid #ccc",
      }}
      id="treeWrapper"
    >
      <Tree
        data={treeData}
        renderCustomNodeElement={renderNode}
        allowForeignObjects={true}
        nodeSize={{ x: 260, y: 200 }} // size spacing between nodes
        separation={{ siblings: 1.5, nonSiblings: 2 }} // space out nodes
        zoomable={true}
        orientation="vertical" // or "horizontal"
      />
    </div>
  );
}
