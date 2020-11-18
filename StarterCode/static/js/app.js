//reading in samples.json



d3.json("samples.json").then(data => {
    //console.log(data);

    // var names = data.names
    //console.log(names);

    //forEach to populate ?? not entirely sure if this is needed..
    // names.forEach(d => {
    //     d3.select('#selDataset')
    //     .append('option')
    //     .text(d)
    //     .property('value', d)
    // });

    //settting up the values of the top ten samples
    var values = data.samples[0].sample_values.slice(0, 10).reverse();

    //setting up the id's for the top ten and call it OTU!
    var ids = data.samples[0].otu_ids.slice(0, 10).map(d => `OTU ${d}`).reverse();

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
    orientation:'h'
    };

    //layout of the bar plot
    var layoutBar = {

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

    //bubble plot static
    var bubblePlot = {
        // don't need data.??? i already set the variables
        //x and y values plus text, not sure what to do with this
        x: values.otu_ids,
        y: labels.sample_values,
        text: otu_ids.otu_labels,
        //setting up the bubble plot marker size and color
        mode: 'markers',
        marker:{
            size: sample_values
        }

    }






//don't forget to bring back the trace and plotting. it's saved in to_do.txt
});