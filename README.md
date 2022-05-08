# AES Charts
Charts for AES using Google Charts

<h3>Usage:</h3>

&lt;script src="https://www.gstatic.com/charts/loader.js" > &lt;/script><br>
&lt;script src="https://cdn.jsdelivr.net/gh/aesajce/charts@main/v1/aeschart.js" > &lt;/script>

&lt;script><br>
&nbsp;&nbsp;&nbsp;&nbsp;drawBarChartByTable(&lt;SourceTableId>,&lt;TargetId>,[Title],[Sub-Title],[Transpose]);<br>
&lt;/script>

<h3>Options</h3>
SourceTableId (Required) : Source html table id.<br>
TargetId (Required) : Target element id to display the chart.<br>
Title (Optional): Chart title.<br>
SubTitle (Optional): Chart sub-title.<br>
Transpose (Optional) : True if requied to transpose source table. (Default : False)
