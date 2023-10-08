
// Function to embed a Vega-Lite visualization in the specified element
function embedVisualization(elementId, vlSpecUrl) {
    vegaEmbed('#' + elementId, vlSpecUrl, {actions: false}).catch(console.error);
}

// Embed the visualizations
embedVisualization('vis1-container', 'CO2Emissions_2013.vl.json');
