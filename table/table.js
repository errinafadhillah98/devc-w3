//Month Arrays -----------------------------------------------------------
var monthsEnglish = 
["January",
"February",
"March",
"April", 
"May", 
"June",
"July",
"August", 
"September",
"October",
"November",
"December"];
var monthsSpanish = 
["Enero", 
"Febrero", 
"Marzo", 
"Abril", 
"Mayo", 
"Junio", 
"Julio", 
"Agosto", 
"Septiembre ",
"Octubre ",
"Noviembre",
"Diciembre"];
var test = 
//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>Number </th><th>Name</th><th>rotation period</th><td>Name</td></tr>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<12;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + monthsEnglish[i] + "</td><td>" + monthsSpanish[i] +"</td></tr>");
}
//Static content  --------------------------------------------------------
document.write("</table>")