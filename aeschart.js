let makeChart=(tableArray,targetId,title,subtitle)=>{
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(tableArray);
        var options = {
            chart: {
                title: title||'',
                subtitle: subtitle||'',
            }
        };
        var chart = new google.charts.Bar(document.getElementById(targetId));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}
let tableToArray=(tableId,transpose,targetId)=>{
    let isVal=false;
    var tableInfo = Array.prototype.map.call(document.querySelectorAll('#'+tableId+' tr'), function(tr){
    return Array.prototype.map.call(tr.querySelectorAll('td,th'), function(td){
            if(!isVal && !isNaN(td.innerHTML.trim()) && Number(td.innerHTML.trim())>0){
                isVal=true;
            }
            return isNaN(td.innerHTML.trim())?td.innerHTML.trim():Number(td.innerHTML.trim());
        });
    });
    if(isVal) {
      return transpose? tableInfo[0].map((_, colIndex) => tableInfo.map(row => row[colIndex])):tableInfo;
    }else{
       try {document.getElementById("demo").innerHTML = err.message; } catch(err) {}
      return null;
    }
}

let drawBarChartByTable = (tableId,targetId,title,subtitle,transpose) => {
    let chartData = tableToArray(tableId,transpose,targetId);
    if(chartData) makeChart(,targetId,title,subtitle);
}
