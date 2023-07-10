import Highcharts from "highcharts";

const engagementHelper = {
  engagementMessageOverTimeChartOptions: (messageCountList, channels) => {
    console.log(messageCountList.length, "channels.length");
    const filteredChannels = channels.filter((channel) => channel.messages);

    const seriesData = filteredChannels.map((channel) => {
      console.log(
        messageCountList.map((date) =>
          parseInt(new Date(date.timeBucket).getUTCDate())
        ),
        "messageCountList"
      );
      const data = messageCountList.map((date) => ({
        x: new Date(date.timeBucket).getTime(),

        y: Number(date.count),
      }));

      return { name: channel, data };
    });
    console.log(seriesData, "seriesData");

    const options = {
      chart: {
        type: "line",
      },
      title: {
        text: "Engagement Messages Over Time",
      },

      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%e of %b",
        },
        title: {
          text: "Date",
        },
      },
      yAxis: {
        title: {
          text: "Message Count",
        },
      },

      tooltip: {
        formatter: function () {
          return (
            '<br />Output: <br />' +
            Highcharts.dateFormat("%e - %b", this.x) +
            ": " +
            this.y +
            " messages"
          );
        },
      },
      series: seriesData,
    };

    return options;
  },
};

export default engagementHelper;
