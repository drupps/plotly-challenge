//reading in samples.json



d3.json("samples.json").then(data => {
    //console.log(data);

    var names = data.names
    //console.log(names);

    //forEach to populate ?? not entirely sure if this is needed..
    names.forEach(d => {
        d3.select('#selDataset')
        .append('option')
        .text(d)
        .property('value', d)
    });

    //settting up the values of the top ten otus
    var values = data.samples[0].sample_values.slice(0, 10).reverse();

    //setting up the id's for the top ten and call it OTU!
    var ids = data.samples[0].otu_ids.slice(0, 10).map(d => `OTU ${d}`).reverse();

    //setting up the labels for the top ten
    var labels = data.samples[0].otu_labels.slice(0, 10).reverse();
        


    //Create the Traces
    var trace1 = {
    x: values,
    y: ids,
    type: "bar",
    name: "Top 10 OTUs",
    text: labels,
    //adding orientation otherwise it is incorrect
    orientation:'h'
    };

    //layout of the bar plot
    var layout = {

        //creating the title with text from the id's
        title: {
            text: `ID: ${values}` //i'm not a fan of backticks
        },
        xaxis: {
            //the xaxis title
            title: 'Sample Values'
        }
    }


//setting up trace1 to the plotBar var
var plotBar = [trace1]

//actual plotting of the bar
Plotly.newPlot('bar', plotBar)


});