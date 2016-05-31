/**
 * Created by herczkumihalybalazs on 2016.05.31..
 */

document.getElementById("addItemButton").addEventListener("click", addItemToTable)

function gennerateId() {

}

function addItemToTable() {

    var itemId = gennerateId();
    var itemName = document.getElementById("itemName").value;
    var itemStatus = document.getElementById("itemStatus").value;
    var itemEffort = document.getElementById("itemEffort").value;
    var itemPriority = document.getElementById("itemPriority").value;

    var table = document.getElementById("itemTable");
    var row = table.insertRow(1);

    var idCell = row.insertCell(0);
    var itemNameCell = row.insertCell(1);
    var itemStatusCell = row.insertCell(2);
    var itemEffortCell = row.insertCell(3);
    var itemPriorityCell = row.insertCell(4);



    idCell.innerHTML = itemId;
    itemNameCell.innerHTML = itemName;
    itemStatusCell.innerHTML = itemStatus;
    itemEffortCell.innerHTML = itemEffort;
    itemPriorityCell.innerHTML = itemPriority;

}