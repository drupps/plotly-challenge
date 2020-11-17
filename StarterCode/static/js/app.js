//reading in samples.json



d3.json("samples.json").then(data => {
    //console.log(data);

    var names = data.names
    //console.log(names);

    //forEach to populate ?? not entirely sure if this is needed..
    // names.forEach(d => {
    //     d3.select('#selDataset')
    //     .append('option')
    //     .text(d)
    //     .property('value', d)
    // });

    //settting up the values of the top ten otus
    var values = data.samples[0].sample_values.slice(0, 10).reverse();

    //setting up the id's for the top ten and call it OTU!
    var ids = data.samples[0].otu_ids.slice(0, 10).map(d => `OTU ${d}`).reverse();

    //setting up the labels for the top ten
    var labels = data.samples[0].otu_labels.slice(0, 10).reverse();
        


    //Create the bar trace
    var traceBar = {
    x: values,
    y: ids,
    type: "bar",
    name: "Top 10 OTUs",
    text: labels,
    //adding orientation otherwise it is incorrect
    orientation:'h'
    };

    //layout of the bar plot
    var barLayout = {

        //creating the title with text from the id's
        title: {
            text: `ID: ${values}` //i'm not a fan of backticks
        },
        xaxis: {
            //xaxis title
            title: 'Sample Values'
        },
        yaxis: {
            //yaxis title
            title: 'Sample ID'
        }
    }

    //bubble plot
    var bubblePlot = {

    }






//setting up trace1 to the plotBar var
var plotBar = [traceBar];

//actual plotting of the bar
Plotly.newPlot('bar', plotBar)

//to do: optionChange!
//to do: initial bar chart on page load
});