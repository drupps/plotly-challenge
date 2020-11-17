//reading in samples.json

d3.json("samples.json").then(data => {
    //console.log(data);

    var names = data.names
    //console.log(names);

    //forEach to populate 
    names.forEach(d => {
        d3.select('#selDataset')
        .append('option')
        .text(d)
        .property('value', d)
    });

    //settting up the values of the top ten otus
    var values = data.samples[0].sample_values.slice(0, 10);

    //setting up the id's for the top ten
    var ids = data.samples[0].out_ids.slice(0, 10).map(d => );

    //setting up the labels for the top ten
    var labels = data.samples[0].out_labels.slice(0, 10);
        
    
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