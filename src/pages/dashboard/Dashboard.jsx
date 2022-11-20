import React from "react";
import "./dashboard.css";
import { Card, Typography } from "antd";
import millify from "millify";

import { FaViruses } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { GiDeathSkull } from "react-icons/gi";
import { SiObservable } from "react-icons/si";

import { useGetStatisticsQuery } from "../../services/covidApi";
import { Loader } from "../../components";
import CovidHistory from "../history/CovidHistory";

const { Text, Title } = Typography;

const Dashboard = () => {
  const { data, isFetching } = useGetStatisticsQuery("all");

  if (isFetching) return <Loader />;
  const { cases, deaths } = data?.response[0];

  const { total, active, recovered } = cases;

  const cardDetails = { active, total, recovered, deaths: deaths.total };

  return (
    <div className="flex-col section">
      <div className="flex-row">
        <div className="flex-col">
          <Title level={5}>World Covid-19 Statistics</Title>
          <div className="dash__top">
            <Card hoverable className="">
              <div className="flex-row card__top">
                <FaViruses className="card__top-icon" />
                <div className="card__top-text__container">
                  <Title level={5}>Total</Title>
                  <Text className="card__top-text">
                    {millify(cardDetails.total)}
                  </Text>
                </div>
              </div>
            </Card>
            <Card hoverable className="">
              <div className="flex-row card__top">
                <MdHealthAndSafety className="card__top-icon" />
                <div className="card__top-text__container">
                  <Title level={5}>Recovered</Title>
                  <Text className="card__top-text">
                    {millify(cardDetails.recovered)}
                  </Text>
                </div>
              </div>
            </Card>
            <Card hoverable className="">
              <div className="flex-row card__top">
                <SiObservable className="card__top-icon" />
                <div className="card__top-text__container">
                  <Title level={5}>Active</Title>
                  <Text className="card__top-text">
                    {millify(cardDetails.active)}
                  </Text>
                </div>
              </div>
            </Card>
            <Card hoverable className="">
              <div className="flex-row card__top">
                <GiDeathSkull className="card__top-icon" />
                <div className="card__top-text__container">
                  <Title level={5}>Deaths</Title>
                  <Text className="card__top-text">
                    {millify(cardDetails.deaths)}
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <Title level={5}>World Covid-19 History</Title>
        <CovidHistory />
      </div>
    </div>
  );
};

export default Dashboard;
