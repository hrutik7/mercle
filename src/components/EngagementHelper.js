const engagementHelper = {
    engagementMessageOverTimeChartOptions: (messageCountList, channels) => {
      // Filter channels that have messages for more than 1 date
      // const filteredChannels = channels.filter(channel =>
      //  {
      //   console.log(channel,"messageCountList[channel].length")
      //   return messageCountList[channel]?.length > 1
      //  }
      // );
      console.log(messageCountList.length,"channels.length")
      const filteredChannels = channels.filter(channel => channel.messages );
      // console.log(filteredChannels,"filteredChannels")
  
      // Generate the series data for each channel
      // const seriesData = filteredChannels.map(channel => {
      //   const data = messageCountList[channel]?.map(date => ({
      //     x: new Date(date.date).getTime(), // Assuming the date property is available in each item
      //     y: date.count,
      //   }));
      const seriesData = filteredChannels.map(channel => {
       console.log(messageCountList.map(date =>  parseInt(new Date(date.timeBucket).getUTCDate())),"messageCountList")
        const data = messageCountList.map(date => 
       
          (
            {
              x: Number(new Date(date.timeBucket).getUTCDate()),// Assuming the date property is available in each item
              y: Number(date.count),
            }
          )
        
     
        
        );
      
        return { name: channel, data };
      });
  console.log(seriesData,"seriesData")
      // Define the chart options
      const options = {
        chart: {
          type: 'line',
        },
        title: {
          text: 'Engagement Messages Over Time',
        },
        xAxis: {
          type: 'string',
          title: {
            text: 'Date',
          },
        },
        yAxis: {
          title: {
            text: 'Message Count',
          },
        },
        tooltip: {
          shared: true,
          crosshairs: true,
        },
        series: seriesData,
      };
  // console.log(options,"options")
      return options;
    },
  };
  
  export default engagementHelper;
  