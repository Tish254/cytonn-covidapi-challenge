import React from "react";
import "./dashboard.css";
import { Layout, Card, Space, Typography } from "antd";
import millify from "millify";

import { useGetStatisticsQuery } from "../../services/covidApi";
import { DataTable, Loader } from "../../components";

const { Text, Title } = Typography;

const Dashboard = () => {
  const { data, isFetching } = useGetStatisticsQuery("all");

  if (isFetching) return <Loader />;
  const { cases, deaths, tests } = data?.response[0];

  const { total, active, recovered } = cases;

  const cardDetails = { active, total, recovered, deaths: deaths.total };

  return (
    <div className="flex-col section">
      <div className="flex-row">
        <div className="dash__top">
          <Card hoverable className="flex-col">
            <Title level={4}>Total Cases</Title>
            <Text>{millify(cardDetails.total)}</Text>
          </Card>
          <Card hoverable className="flex-col">
            <Title level={4}>Active Cases</Title>
            <Text>{millify(cardDetails.active)}</Text>
          </Card>
          <Card hoverable className="flex-col">
            <Title level={4}>Recovered Cases</Title>
            <Text>{millify(cardDetails.recovered)}</Text>
          </Card>
          <Card hoverable className="flex-col">
            <Title level={4}>Deaths</Title>
            <Text>{millify(cardDetails.deaths)}</Text>
          </Card>
        </div>

      </div>
      
      {/* <BarChart /> */}
    </div>
  );
};

export default Dashboard;
