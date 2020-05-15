<html>

<head>

</head>

<body>


alert(user);


var personData = '{ "client":{"type":"client","userid":1},"courier":{"type":"courier","userid":2},"manager":{"type":"manager","userid":3} }'; 
var person = JSON.parse(personData);
alert(person.client.type);
var rest = person.client.type; 
if (rest = "client") {
document.location.href = "client.html";
}

</script> 
</body>

</html>
