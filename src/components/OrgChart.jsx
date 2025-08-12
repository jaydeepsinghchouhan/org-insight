import React from "react";
import Tree from "react-d3-tree";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import OrgChartNode from "./OrgChartNode";
import { adminChildren } from "../constants/orgChartdata";

const OrgChart = () => {
  const containerStyles = {
    width: "100%",
    height: "100vh",
  };
  return (
    <div style={containerStyles}>
      {adminChildren && (
        <Tree
          data={adminChildren}
          orientation="vertical"
          translate={{ x: 650, y: 200 }}
          depthFactor={200}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          pathFunc="step"
          zoomable
          zoom={1.2}
          scaleExtent={{ min: 0.5, max: 2 }}
          renderCustomNodeElement={({ nodeDatum, onNodeClick }) => (
            <OrgChartNode nodeDatum={nodeDatum} onNodeClick={onNodeClick} />
          )}
          pathClassFunc={() => "custom-tree-link"}
          transitionDuration={500}
          enableLegacyTransitions
          collapsible={false}
        />
      )}
    </div>
  );
};

export default OrgChart;
