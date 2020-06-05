
class Product {
	constructor(title, description, price){
       this.title = title;
       this.description  = description;
       this.price = price;
	}
}

function loadXMLDoc() {
  fetch('shop_page.xml').then(function(responce){
    return responce.text();
  }).then(function(data){
     myFunction(data);
  }).catch(function(error){
  	console.log(error);
  });
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responce;
  var table="<tr><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("products");
  for (i = 0; i <x.length; i++) { 
  	var product = Product(
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue,
        x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue,
        x[i].getElementsByTagName("text")[0].childNodes[0].nodeValue 
  	);
    table += "<tr><td>" +
    product.title +
    "</td><td>" +
    product.price +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

loadXMLDoc();


