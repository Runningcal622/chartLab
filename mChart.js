var jSon = function(){



  var jsonData = d3.json("colors.json");

  jsonData.then(
    function(data){
      console.log("data",data);
      makeChart(data,"json");
    }
  ,
  function(err){
    console.log("err",err);

  });
}

var useCSV = function(){
   var data = d3.csv("colors.csv");
   data.then(
     function(data){
       console.log("data",data);
       makeChart(data,"csv");
     }
   ,
   function(err){
     console.log("err",err);

   });
}

var makeChart = function(colorData,way)
{
  var width = 600;
  var height = 400;
  var barWidth = width/(colorData).length;
  var legHeight = height/(colorData).length;
  var svg;

  // determine which svg element to grab
  if (way==="json"){
    svg  = d3.select(".withJson")
    .attr("width",width)
    .attr("height",height);}
  if (way==="csv"){
    svg  = d3.select(".withCSV")
    .attr("width",width)
    .attr("height",height);}

// create the rectangles
  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x",function(d,i){return i*barWidth;})
     .attr("y",function(d){return height - d.num*10;})
     .attr("width",barWidth-2)
     .attr("height",function(d){return d.num*10;})
     .attr("fill",function(d){return d.color;});

// labels
  svg.selectAll("text")
     .data(colorData)
     .enter()
     .append("text")
     .text(function(d){return d.num;})
     .attr("x",function(d,i){return (i+1)*barWidth-.5*barWidth;})
     .attr("y",function(d){return height-d.num*10;})
     .attr("text-anchor","middle")
     .attr("fill","black");

/// legend
  svg.selectAll("rect1")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x",function(d,i){return .9*width;})
     .attr("y",function(d,i){return i*20+5;})
     .attr("width",20)
     .attr("height",10)
     .attr("fill",function(d){return d.color;});

// legend labels
   svg.selectAll("text1")
      .data(colorData)
      .enter()
      .append("text")
      .text(function(d){return d.color;})
      .attr("x",function(d,i){return .825*width;})
      .attr("y",function(d,i){return (i+1)*20 - 6;})
      .attr("text-anchor","middle")
      .attr("fill","black");

  svg.style("margin-right","50px");

  var button;
  // select which button to make disappear
  if (way==="json"){
    var button = d3.select(".startButton");}
  if (way==="csv"){
  var button = d3.select(".csvButton");}


  button.attr("disabled","disabled");
  button.style("display","none");

}
