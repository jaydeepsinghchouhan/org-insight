import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";  // MUI version
import EmployeeGrid from "../components/EmployeeGrid";  // MUI version
import OrgChartNode from "../components/OrgChartNode";  // MUI version
import { buildOrgTree } from "../orgChartUtils";
import { Box, Container } from "@mui/material";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((res) => res.json())
      .then(setEmployees);
  }, []);

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase())
  );

  const orgTree = buildOrgTree(filtered);

  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 3,
        }}
      >
        {/* Left: Search + Grid */}
        <Box sx={{ flex: 1 }}>
          <SearchBar onSearch={setSearch} />
          <EmployeeGrid employees={filtered} />
        </Box>

        {/* Right: Org Chart */}
        <Box sx={{ flex: 1, overflowX: "auto" }}>
          {orgTree.map((node) => (
            <OrgChartNode
              key={node.id}
              node={node}
              children={node.reports}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
