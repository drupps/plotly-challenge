//reading in samples.json
var select_tag = d3.select("selDataset");

d3.json("samples.json").then((importedData) => {
  var subject_ids = importedData.names;

  console.log("Subject_ids");
  console.log(subject_ids);

  subject_ids.forEach((id) => {
    select_tag.append("option").property("value", id).text(id);
  });

  // id=940 for default
  optionChanged(subject_ids[0]);
});

function optionChanged(changed_id) {
  //console.log('changed_id=', changed_id);

  d3.json("samples.json").then((data) => {
    //console.log(data);

    var samples = data.samples;
    //console.log(samples);
    
    //filtering samples and saving it to changed_id
    var results = samples.filter((sampleObj) => sampleObj.id == changed_id);
    var result = results[0];

    var names = data.names;
    //console.log(names);

    //settting up the values of the top ten samples
    var values = data.samples[0].sample_values.slice(0, 10).reverse();

    //setting up the id's for the top ten and call it OTU!
    var ids = data.samples[0].otu_ids
      .slice(0, 10)
      .map((d) => `OTU ${d}`)
      .reverse();

    //setting up the labels for the top ten samples
    var labels = data.samples[0].otu_labels.slice(0, 10).reverse();

    //Create the bar trace
    var traceBar = {
      x: values,
      y: ids,
      type: "bar",
      name: "Top 10 OTUs",
      text: labels,
      //adding orientation otherwise it is incorrect
      orientation: "h",
    };

    //layout of the bar plot
    var layoutBar = {
      //creating the title with text from the id's
      title: {
        text: `ID: ${values}`,
      },
      xaxis: {
        //xaxis title
        title: "Sample Values",
      },
      yaxis: {
        //yaxis title
        title: "Sample ID",
      },
    };

    //setting up barplot trace to the plotBar var
    var plotBar = [traceBar];

    //actual plotting of the bar
    Plotly.newPlot("bar", traceBar, layoutBar);
  });
}
