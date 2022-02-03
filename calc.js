// Percentage calculator
// document -> Internal property
// Linked to HTML Elements
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY')

// submit is a reserved keyword defaut form submission refreshes
form.addEventListener('submit', function (event) {
    if(!numField1.value || !numField2.value){
    alert("Please enter values in the field!")
    }
    else{
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    var percent = x/y*100;
    resultField.innerText = "Answer: "+percent.toString().slice(0,5)+"%";
    // Preventing default behaviour of refreshing in submit
    // Whereas a onlick on button will not refresh forms will refresh
    event.preventDefault();
    }
});
