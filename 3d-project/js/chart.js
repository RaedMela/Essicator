import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const chartEmbed = new ChartEmbedAPI({
  baseUrl: 'https://charts.mongodb.com/charts-project-0-zkuzm', // Replace 'charts-project-abc' with your project ID
});
// const chartIds = ["6641b428-dc15-49e4-8f01-e161bfe0f26f", "6642ee6a-07cf-4f55-820f-a463c15961f8", "6642ee6a-07cf-4f55-820f-a463c15961f8"];
// const chartContainers = [chartContainer1, chartContainer2, chartContainer3];

// for (let i = 0; i < chartIds.length; i++) {
//     chartEmbed.render(chartIds[i], chartContainers[i]);
// }
// Specify the chart ID you want to embed
const chartId = '6641b428-dc15-49e4-8f01-e161bfe0f26f'; // Replace with your chart ID
const dashboard = sdk.createDashboard({
  dashboardId: '66053566-3cf0-4079-8a02-0c743957442a',
});
const chartId3 = '6642ef38-dc7a-48e2-8355-85bccac7f198'; // Replace with your chart ID

const chartId2 = '6642ee6a-07cf-4f55-820f-a463c15961f8'; // Replace with your chart ID

document.getElementById('gaug1').style.gridRow = '1 '; // Example: Make the chart span 2 rows

// render the chart into a container
dashboard
  .render(document.getElementById('dashboard'))
  .catch(() => window.alert('Dashboard failed to initialise'));
// Function to embed the chart into the container
function embedChart() {
  const chartContainer = document.getElementById('heatmap');
  const chartContainer2= document.getElementsById('gaug1');
  const chartContainer3 = document.getElementsById('gaug2');
  chartContainer2.style.gridRow = '1 / span 2'; // Example: Make the chart span 2 rows
  chartContainer2.style.gridColumn = '1 / span 2'; // Example: Make the chart span 2 columns

  // Embed the chart into the container
  chartEmbed.render(chartId, chartContainer);
  chartEmbed.render(chartId2, chartContainer2);
  chartEmbed.render(chartId3, chartContainer3);

  // Adjust the style of the container using JavaScript
 
}


// Embed the chart when the page loads
window.onload = embedChart;