import React from "react";
import Tree from "react-d3-tree";
import OrgChartNode from "./OrgChartNode";
import { buildHierarchy } from "../helpers/common";
import NoDataFound from "./NoDataFound";
import { useEmployees } from "../hooks/useEmployees";

const OrgChart = () => {
  const containerStyles = {
    width: "100%",
    height: "85vh",
  };

  const {employees, loading} = useEmployees();

  const adminChildren = buildHierarchy(employees);

  return (
    <div style={containerStyles}>
      {adminChildren && adminChildren.length > 0 && (
        <Tree
          data={adminChildren}
          orientation="vertical"
          translate={{ x: 650, y: 200 }}
          depthFactor={200}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          pathFunc="step"
          zoomable
          zoom={1.2}
          scaleExtent={{ min: 0.5, max: 3 }}
          renderCustomNodeElement={({ nodeDatum, onNodeClick }) => (
            <OrgChartNode nodeDatum={nodeDatum} onNodeClick={onNodeClick}  />
          )}
          pathClassFunc={() => "custom-tree-link"}
          transitionDuration={500}
          enableLegacyTransitions
          collapsible={false}
        />
      )}
      {!loading && employees?.length === 0 && (
        <NoDataFound showDetails={false}/>
      )}
    </div>
  );
};

export default OrgChart;
