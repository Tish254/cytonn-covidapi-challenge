import { Card } from "antd";
import React from "react";

import { DataTable } from "../../components";
import "./CovidStatistics.css";

const CovidStatistics = () => {
  return (
    <div className="flex-col section">
      <Card>
        <div className="flex-col">
          <DataTable />
        </div>
      </Card>
    </div>
  );
};

export default CovidStatistics;
