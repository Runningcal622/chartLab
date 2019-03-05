var jSon = function(){



  var jsonData = d3.json("colors.json");

  jsonData.then(
    function(data){
      console.log("data",data);
      makeChart(data);
    }
  ,
  function(err){
    console.log("err",err);

  });
}

var rowConverter = function(d){
  return {
    color:d.color,
    num:parseInt(d.num)
  };

}

var useCSV = function(){
  var dataSet;

   d3.csv("colors.csv",rowConverter,function(data,i){
    console.log("here",data);
    console.log(data.color);
    drawBar(data,i);
  });
  console.log(dataSet);
  //makeChartCSV(dataSet);


}

var drawBar = function(d,index){
  var svg = d3.select(".withCSV")
    .attr("width",width)
    .attr("height",height);
    svg.append("rect")
    .data(d)
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

 var button = d3.select(".csvButton");
 //button.attr("visible", "hidden");
 button.attr("disabled","disabled");
 button.style("display","none");
}


var makeChartCSV =function(colorData){
  var width = 400;
  var height = 200;
  var barWidth = width/10;
  var svg = d3.select(".withCSV")
    .attr("width",width)
    .attr("height",height);

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

    var button = d3.select(".csvButton");
    //button.attr("visible", "hidden");
    button.attr("disabled","disabled");
    button.style("display","none");


}



var makeChart = function(colorData)
{
  var width = 400;
  var height = 200;
  var barWidth = width/(colorData).length;
  var svg = d3.select(".withJson")
    .attr("width",width)
    .attr("height",height);


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

  var button = d3.select(".startButton");
  //button.attr("visible", "hidden");
  button.attr("disabled","disabled");
  button.style("display","none");

}
