function addToCart(product){
    //alert(product)
    console.log(product);
    var t = $('#table1').DataTable();
    var quantity = document.getElementById(product).innerText;
    switch(product){
        case "crayons": 
            t.row.add(["Crayons",quantity,"100",quantity*100,"<i style='cursor:pointer' class='btnDelete fas fa-trash-alt'></i>"]).draw();         
            //t.row.add([{"Product":"Crayons","Quantity":quantity,"Price":"100","Amount":quantity*100,"":"<i style='cursor:pointer' class='btnDelete fas fa-trash-alt'></i>"}]).draw();
            calculateTotalAmount();
            break;
        case "babyclothes":
            t.row.add(["Baby clothes",quantity,"500",quantity*500,"<i style='cursor:pointer' class='btnDelete fas fa-trash-alt'></i>"]).draw();
            calculateTotalAmount()
            break;
        case "teddy":
            t.row.add(["Teddy bear",quantity,"500",quantity*500,"<i style='cursor:pointer' class='btnDelete fas fa-trash-alt'></i>"]).draw();
            calculateTotalAmount()
            break;
        case "pencilbox":
            t.row.add(["Pencil box",quantity,"30",quantity*30,"<i style='cursor:pointer' class='btnDelete fas fa-trash-alt'></i>"]).draw();
            calculateTotalAmount()
            break;
        default:
            break;
    }
       
}
function increment(product) {
    x=document.getElementById(product).innerText;
  document.getElementById(product).innerHTML = ++x;
}

function decrement(product) {
    x=document.getElementById(product).innerText;
  document.getElementById(product).innerHTML = --x;
}

$("#table1").on('click', '.btnDelete', function () {
    var table = $('#table1').DataTable();
    table.row( $(this).closest('tr') ).remove().draw();
    calculateTotalAmount();
});

$("#print").click(function () {
    var table = $('#table1').DataTable();
    table.clear().draw();
    alert('Reached')
});

function calculateTotalAmount(){
    var table = $('#table1').DataTable();
    var data = table.rows().data();
    var amount=0;
     data.each(function (value, index) {
     console.log(`For index ${index}, data value is ${value[3]}`);
     amount=amount+value[3];
 });
    document.getElementById("total").innerHTML="Total amount: &#x20b9;"+ amount
 
}

function myFunction() {
    const resetButton = document.createElement('button');
    resetButton.setAttribute('class', 'reset');
    resetButton.innerHTML = 'Reset';
    console.log(document.getElementsByClassName("dt-buttons")[0])
    document.getElementsByClassName("dt-buttons")[0].appendChild(resetButton);
  }

function resetTable(){
    //alert('Here')
    var table = $('#table1').DataTable();
    table.rows().remove().draw();
}
