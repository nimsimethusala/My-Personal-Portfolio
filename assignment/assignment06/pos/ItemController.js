import ItemModel from "../model/ItemModel.js";
import {customer_array, item_array} from "../db/database.js";

let selected_item_index = null;

//Save Item
$("#save-item").on('click', function () {
    let itemName = $('#itemName').val();
    let price = $('#price').val();

    if(itemName.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Item",
        });
    } else {
        let item = new ItemModel(
            item_array.length + 1,
            itemName,
            price
        );

        item_array.push(item);
        console.log(item_array[0]);

        loadItemTable();
        clearItemForm();
    }
});

//Update Item
$("#update-item").on('click', function () {
    let index = selected_item_index;

    let itemName = $('#itemName').val();
    let price = $('#price').val();

    let item = new ItemModel(
        item_array.length + 1,
        itemName,
        price
    );

    item_array[selected_item_index] = item;

    clearItemForm();
    loadItemTable();
});

//Delete Item
$("#delete-item").on('click', function () {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            item_array.splice(selected_item_index, 1);

            // clean customer form
            clearItemForm();

            // reload the table
            loadItemTable();

            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your customer has been deleted.",
                icon: "success"
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
});

$("#item-tbl-body").on('click', 'tr', function () {
    let index = $(this).index();

    selected_item_index = $(this).index();

    //get customer object by index
    let item_obj = item_array[index];

    let itemName = item_obj.itemName;
    let price = item_obj.price;

    $('#itemName').val(itemName);
    $('#price').val(price);
});

const clearItemForm = () => {
    $('#itemName').val("");
    $('#price').val("");
}

const loadItemTable = () => {
    $("#item-tbl-body").empty();
    item_array.map((item, index) => {
        let itemData = `<tr><td>${item.id}</td><td>${item.itemName}</td><td>${item.price}</td></tr>`;
        $("#item-tbl-body").append(itemData);
    });
}