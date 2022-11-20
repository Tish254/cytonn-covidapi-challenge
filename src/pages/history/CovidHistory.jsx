import React, { useState } from "react";
import { BarChart, Loader } from "../../components";
import { useGetHistoryQuery } from "../../services/covidApi";

import "./CovidHistory.css";
import { DatePicker, Input, Card } from "antd";
import dayjs from "dayjs";

const { Search } = Input;

const CovidHistory = () => {
  const [searchHistory, setSearchHistory] = useState({
    country: "all",
  });
  const { data, isFetching, isLoading } = useGetHistoryQuery(searchHistory);
  if (isLoading) return <Loader />;

  const timeLabels = [];
  const covidCases = [];
  const covidDeaths = [];
  const covidTests = [];
  data?.response?.forEach(({ time, cases, deaths, tests }) => {
    timeLabels.push(time);
    covidCases.push(cases.total ?? 0);
    covidDeaths.push(deaths.total ?? 0);
    covidTests.push(tests.total ?? 0);
    return 0;
  });

  const chartData = {
    timeLabels,
    covidCases,
    covidDeaths,
    covidTests,
  };

  const onChange = (date, dateString) => {
    if (dateString) setSearchHistory((prev) => ({ ...prev, day: dateString }));
  };

  const onSearchHandler = (value) => {
    if (value)
      setSearchHistory((prev) => ({ ...prev, country: value.toLowerCase() }));
  };

  return (
    <div className="flex-col">
      <Card>
        <div className="flex-row">
          <DatePicker
            onChange={onChange}
            className="app-date-picker"
            defaultValue={dayjs(dayjs(), "YYYY-MM-DD")}
          />
          <Search
            placeholder="Generate for country"
            loading={isFetching}
            onSearch={onSearchHandler}
            allowClear
          />
        </div>
        <BarChart covidData={chartData} title={searchHistory.country} />
      </Card>
    </div>
  );
};

export default CovidHistory;
