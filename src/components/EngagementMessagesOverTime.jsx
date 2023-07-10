import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./EngagementHelper";
import { channels } from "../data/Channels";
import { messageCountList } from "../data/MessageCountList";
export const EngagementMessagesOverTime = () => {
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );
  console.log(options, "options");

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
