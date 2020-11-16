//reading in samples.json

var names = [];


d3.json("samples.json").then(data => {
    //console.log(data);

    var names = data.names
    //console.log(names);

    names.forEach(d => {

        d3.select('#selDataset'),
        .append('option'),
        .text(d),
        .property('value', d)
    });

    var values = data.samples[0].sample_values.slice(0, 10);
    var ids = data.samples[0].out_ids.slice(0, 10);
    var labels = data.samples[0].out_ids//??????


    data.names.forEach(function(
        
    
// //start of the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");

//      //Create the Traces
//     var trace1 = {
//       x: data.id,
//       y: data.otu_ids,
//       type: "bar",
//       name: "Top 10 OTUs",
//     //   boxpoints: "all"
//     };
  
//     // Create the data array for the plot
//     var data = [trace1];
  
//     // Define the plot layout
//     var layout = {
//       title: "Prevalence of OTUs in bellybutton's",
//       xaxis: { title: "Sample Values" },
//       yaxis: { title: "OTU ID's" }
//     };
  
//     // Plot the chart to a div tag with id "plot"
//     Plotly.newPlot("bar", data, layout);
  });