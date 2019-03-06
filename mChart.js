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
  var width = 400;
  var height = 200;
  var barWidth = width/(colorData).length;
  var svg;
  if (way==="json"){
    svg  = d3.select(".withJson")
    .attr("width",width)
    .attr("height",height);}
  if (way==="csv"){
    svg  = d3.select(".withCSV")
    .attr("width",width)
    .attr("height",height);}

  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x",function(d,i)
   {
     return i*barWidth;
   })
   .attr("y",function(d)
   {
     return height - d.num*10;
   })
   .attr("width",barWidth)
   .attr("height",function(d)
  {
    return d.num*10;
  })
  .attr("fill",function(d){
    return d.color;
  });
  var button;
  if (way==="json"){
    var button = d3.select(".startButton");}
  if (way==="csv"){
  var button = d3.select(".csvButton");}
  //button.attr("visible", "hidden");
  button.attr("disabled","disabled");
  button.style("display","none");

}
