/*
let hero_nav =document.getElementById("hero-nav");
let customer_nav =document.getElementById("customer-nav");
let item_nav =document.getElementById("item-nav");
let order_nav =document.getElementById("order-nav");
let order_history_nav =document.getElementById("orderHistory-nav");

let hero = document.getElementById("hero");
let customer = document.getElementById("customer");
let item = document.getElementById("item");
let order = document.getElementById("order");
let orderHistory = document.getElementById("orderHistory");

hero.style.display="block";
customer.style.display="none";
item.style.display="none";
order.style.display="none";
orderHistory.display="none";

hero_nav.addEventListener('click', function (){
    hero.style.display="block";
    customer.style.display="none";
    item.style.display="none";
    order.style.display="none";
    orderHistory.display="none";
});

customer_nav.addEventListener('click', function (){
    hero.style.display="none";
    customer.style.display="block";
    item.style.display="none";
    order.style.display="none";
    orderHistory.display="none";
});

item_nav.addEventListener('click', function (){
    hero.style.display="none";
    customer.style.display="none";
    item.style.display="block";
    order.style.display="none";
    orderHistory.display="none";
});
order_nav.addEventListener('click', function (){
    hero.style.display="none";
    customer.style.display="none";
    item.style.display="none";
    order.style.display="block";
    orderHistory.display="none";
});

order_history_nav.addEventListener('click', function (){
    hero.style.display="none";
    customer.style.display="none";
    item.style.display="none";
    order.style.display="none";
    orderHistory.display="block";
});


let customer_array = [];
let item_array = [];
let cart_array = [];

selected_customer_index = null;

//get row table from customer_table and set them to the input fields
$('#cus-tbl-body').on('click', 'tr', function () {
    let index = $(this).index();
    selected_customer_index = index;
    console.log(index);

    let customer_obj = customer_array[index];
    console.log(customer_obj);

    let cus_Id = customer_obj.cusId
    let cusName = customer_obj.name;
    let cusAddress = customer_obj.address;
    let cusContact = customer_obj.contact;
    let cusEmail = customer_obj.email;

    $('#customerId').val(cus_Id);
    $('#customerName').val(cusName);
    $('#address').val(cusAddress);
    $('#contact').val(cusContact);
    $('#email').val(cusEmail);

});

//Save Customer
$("#save-customer").on('click', function () {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });

   let cus_id = $('#customerId').val();
   let cus_name = $('#customerName').val();
   let cus_address = $('#address').val();
   let cus_contact = $('#contact').val();
   let cus_email = $('#email').val();

   /!*console.log("id:", cus_id);
   console.log("name:", cus_name);
   console.log("address:", cus_address);
   console.log("contact:", cus_contact);
   console.log("email:", cus_email);*!/

    let customer = {
       cusId: cus_id,
       name: cus_name,
       address: cus_address,
       contact: cus_contact,
       email: cus_email
   };

    customer_array.push(customer);

    $('#customerId').val("");
    $('#customerName').val("");
    $('#address').val("");
    $('#contact').val("");
    $('#email').val("");

    let customer_data = `<tr><td>${customer.cusId}</td>
                                    <td>${customer.name}</td>
                                    <td>${customer.address}</td>
                                    <td>${customer.contact}</td>
                                    <td>${customer.email}</td></tr>`;

    $("#cus-tbl-body").append(customer_data);
});

//update customer
$('#update-customer').on('click', function () {
    let cus_name = $('#customerName').val();
    let cus_address = $('#address').val();
    let cus_contact = $('#contact').val();
    let cus_email = $('#email').val();

    let customer = {
        cusId: customer_array[selected_customer_index].cusId,
        name: cus_name,
        address: cus_address,
        contact: cus_contact,
        email: cus_email
    };

    customer_array[selected_customer_index] = customer;

    $('#customerId').val("");
    $('#customerName').val("");
    $('#address').val("");
    $('#contact').val("");
    $('#email').val("");
});

//Delete customer
$('#delete-customer').on('click', function () {
   customer_array.splice(selected_customer_index, 1);

    $('#customerId').val("");
    $('#customerName').val("");
    $('#address').val("");
    $('#contact').val("");
    $('#email').val("");

});

//Save Item
$("#save-item").on('click', function () {
   let item_id = $('#itemId').val();
   let material = $('#material').val();
   let price = $('#price').val();

   /!*console.log("Item  Id: ", item_id);
   console.log("Material: ", material);
   console.log("Price: ", price);*!/

   let item = {
       itemId: item_id,
       material: material,
       price: price
   };

   item_array.push(item);

   let item_data = `<tr><td>${item.itemId}</td><td>${item.material}</td><td>${item.price}</td></tr>`;

   $("#item-tbl-body").append(item_data);
});

//add cart
$("#addToCart").on('click', function () {
   let orderItemId = $('#itemOrderId').val();
   let orderMaterial = $('#materialOrder').val();
   let orderQuantity = $('#OrderQuantity').val();
   let orderItemPrice = $('#OrderPrice').val();

   /!*console.log("itemId: ", orderItemId);
   console.log("material: ", orderMaterial);
   console.log("quantity: ", orderQuantity);
   console.log("price: ", orderItemPrice);*!/

   let addCart = {
       orderItemId: orderItemId,
       itemMaterial: orderMaterial,
       itemQuantity: orderQuantity,
       itemPrice: orderItemPrice
   };

   cart_array.push(addCart);

   let cart_data = `<tr><td>${addCart.orderItemId}</td><td>${addCart.itemMaterial}</td><td>${addCart.itemQuantity}</td><td>${addCart.itemPrice}</td></tr>`;

   $("#order-tbl-body").append(cart_data);
})*/
