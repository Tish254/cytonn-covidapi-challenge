import React from 'react'
import { Table } from "antd";
import { useGetCountriesQuery, useGetStatisticsQuery } from '../services/covidApi';
import Loader from './Loader';

const DataTable = () => {

  const {data, isFetching} = useGetStatisticsQuery();

  if (isFetching) return <Loader />

  console.log()

  const dataSource = data?.response?.map(({continent, country, population,day, cases, deaths}) => ({continent, country, population, day, total: cases.total, active : cases.active, new: cases.new, recovered: cases.active, critical: cases.critical, deaths: deaths.total  }))

  const columns = [
    {
      title: 'Continent',
      dataIndex: 'continent',
      key: 'continent',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total Cases',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
    },
    {
      title: 'New',
      dataIndex: 'new',
      key: 'new',
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      key: 'recovered',
    },
    {
      title: 'Critical',
      dataIndex: 'critical',
      key: 'critical',
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      key: 'deaths',
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default DataTable