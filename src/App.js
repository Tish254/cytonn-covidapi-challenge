import React from "react";
import moment from "moment";

import { useGetCountriesQuery, useGetStatisticsQuery, useGetHistoryQuery } from "./services/covidApi";

const App = () => {
  const { data, isFetching } = useGetHistoryQuery({country: "kenya", day: '2020-06-02'});
  console.log(data);
  return (
    <div>

    </div>
  );
};

export default App;
