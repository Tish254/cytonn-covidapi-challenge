import React, { useState } from "react";
import { Table, Input, Button } from "antd";
import {
  useGetCountriesQuery,
  useGetStatisticsQuery,
} from "../services/covidApi";
import Loader from "./Loader";
import moment from "moment";
import millify from "millify";

const { Search } = Input;

const DataTable = () => {
  const [search, setSearch] = useState(null);
  const {
    data: countryData,
    isFetching: fetchingCountryData,
    isLoading: loadingCountryData,
  } = useGetCountriesQuery();
  const {
    data: statisticsData,
    isFetching: fetchingStatisticsData,
    isLoading: loadingStatisticsData,
  } = useGetStatisticsQuery(search);

  if (loadingCountryData || loadingStatisticsData || fetchingCountryData) return <Loader />;

  const dataSource = statisticsData?.response?.map(
    ({ continent, country, population, cases, deaths, time }, index) => {
      if (countryData?.response?.includes(country))
        return {
          key: `${index + 1}`,
          continent,
          country,
          population: millify(+population),
          updated: moment(time).fromNow(),
          total: millify(+cases.total) ?? 0,
          active: millify(+cases.active) ?? 0,
          new: cases.new ?? 0,
          recovered: millify(+cases.active) ?? 0,
          critical: millify(+cases.critical) ?? 0,
          deaths: millify(+deaths.total) ?? 0,
        };
      return {};
    }
  );

  const columns = [
    {
      title: "Continent",
      dataIndex: "continent",
      key: "continent",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "Updated",
      dataIndex: "updated",
      key: "updated",
    },
    {
      title: "Total Cases",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
    },
    {
      title: "New",
      dataIndex: "new",
      key: "new",
    },
    {
      title: "Recovered",
      dataIndex: "recovered",
      key: "recovered",
    },
    {
      title: "Critical",
      dataIndex: "critical",
      key: "critical",
    },
    {
      title: "Deaths",
      dataIndex: "deaths",
      key: "deaths",
    },
  ];

  const onSearchHandler = (value) => {
    if (value) setSearch(value.toLowerCase());
  };

  const allButtonClicked = (e) => {
    setSearch(null);
  };

  return (
    <>
      <div className="flex-row app__statistics__top">
        <Search
          placeholder="Search by country "
          loading={fetchingStatisticsData}
          onSearch={onSearchHandler}
          className={"app-date-picker"}
          allowClear
        />
        <Button
          type="primary"
          onClick={allButtonClicked}
        >
          Display all
        </Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        size="middle"
        style={{ marginBottom: "auto" }}
        scroll={{
          x: 1500,
          y: 500,
        }}
      />
    </>
  );
};

export default DataTable;
