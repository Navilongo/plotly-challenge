// Use D3 library to read the samples.json and console.log to confirm
// Use the data pulled from json to inform the drop down menu
d3.json("samples.json").then(data => {
    console.log(data);

    var subject = data.names;
    var dropDown = d3.select("#selDataset")

    subject.forEach(name => {
        dropDown.append("option").text(name).property("value", name)
    });

});