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

    //setting up the id's for the top ten and call it OTU!
    var ids = data.samples[0].otu_ids.slice(0, 10).map(d => 'OTU ${d}');

    //setting up the labels for the top ten
    var labels = data.samples[0].otu_labels.slice(0, 10);
        
    //Create the Traces
    var trace1 = {
    x: values,
    y: ids,
    type: "bar",
    name: "Top 10 OTUs",
    text: labels,
    };

//setting up trace1 to the plotBar var
var plotBar = [trace1]

//actual plotting of the bar
Plotly.newPlot('bar', plotBar)
});