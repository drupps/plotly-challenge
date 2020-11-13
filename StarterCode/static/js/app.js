//reading in samples.json

// var ynames = names
// var xotu = otu

// d3.json("../StarterCode/samples.json", function(data){
//     console.log(data);
// });



var names = [];
var id = [];
var ethnicity = [];
var gender = [];
var age = [];
var location = [];
var bbtype = [];
var wfreq = [];

d3.json("../samples.json").then((data) => {
    //  Create the Traces
    var trace1 = {
      x: data.organ,
      y: data.survival.map(val => Math.sqrt(val)),
      type: "box",
      name: "Cancer Survival",
      boxpoints: "all"
    };
  
    // Create the data array for the plot
    var data = [trace1];
  
    // Define the plot layout
    var layout = {
      title: "Square Root of Cancer Survival by Organ",
      xaxis: { title: "Organ" },
      yaxis: { title: "Square Root of Survival" }
    };
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout);
  });