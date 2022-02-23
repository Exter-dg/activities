var counter = 2; //Set counter

const currencyExchangeRates = {
    "USDGBP": 0.734488,
    "USDINR": 74.6072,
    "USDJPY": 115.116,

    "GBPUSD": 1.36149,
    "GBPINR": 101.592,
    "GBPJPY": 156.729,

    "INRGBP": 0.00984333,
    "INRUSD": 0.0134019,
    "INRJPY": 1.54274,

    "JPYGBP": 0.00638043,
    "JPYUSD": 0.00868693,
    "JPYINR": 0.648198
}

function cloneItem(idToBeCloned) {
    buttonId = idToBeCloned;

    // find parent row div id
    idToBeCloned = "item" + buttonId.substr(11);

    // Returns first element with id - https://stackoverflow.com/questions/5611963/can-multiple-different-html-elements-have-the-same-id-if-theyre-different-eleme
    const node = document.getElementById(idToBeCloned);
    const clone = node.cloneNode(true);

    // set parent's id
    clone.id = "item" + counter;

    // set itemName's id
    const ItemNameId = "ItemName" + buttonId.substr(11);
    const select1 = clone.querySelector("#" + CSS.escape(ItemNameId));
    select1.id = "ItemName" + counter;

    // set itemQt's id
    const ItemQtId = "ItemQt" + buttonId.substr(11);
    const select2 = clone.querySelector("#" + CSS.escape(ItemQtId));
    select2.id = "ItemQt" + counter;

    // set itemRate's id
    const ItemRateId = "ItemRate" + buttonId.substr(11);
    const select3 = clone.querySelector("#" + CSS.escape(ItemRateId));
    select3.id = "ItemRate" + counter;

    // set itemAmt's id
    const ItemAmtId = "ItemAmt" + buttonId.substr(11);
    const select4 = clone.querySelector("#" + CSS.escape(ItemAmtId));
    select4.id = "ItemAmt" + counter;

    // set currencyAmt's id
    const currencyAmtId = "currencyAmt" + buttonId.substr(11);
    const select5 = clone.querySelector("#" + CSS.escape(currencyAmtId));
    select5.id = "currencyAmt" + counter;

    // set cloneButton's id
    const select6 = clone.querySelector("#" + CSS.escape(buttonId));
    select6.id = "cloneButton" + counter;

    // set deleteButton's id
    const deleteButtonId = "deleteButton" + buttonId.substr(11);
    const select7 = clone.querySelector("#" + CSS.escape(deleteButtonId));
    select7.id = "deleteButton" + counter;

    document.getElementById("items").appendChild(clone);
    counter++;
    calculateSubTotal();
}

function newItem() {
    currency = document.getElementById("Currency").value;
    // extract currency's symbol - last three letters of string
    currency = currency.substr(-3);

    // create new node with ids set to counter
    var node =
        '<div class="row" style="padding-right:2.25vh" id="item' +
        counter +
        '">' +
        '<div class="col-7">' +
        '<div>' +
        "<textarea" +
        ' class="form-control"' +
        ' id="ItemName' +
        counter +
        '"' +
        ' placeholder="Items you are selling"' +
        ' rows="3"' +
        "></textarea>" +
        "</div>" +
        "</div>" +
        '<div class="col-1 mx-0 px-1">' +
        "<input" +
        ' type="text"' +
        ' class="form-control text-end"' +
        ' id="ItemQt' +
        counter +
        '"' +
        ' value="0"' +
        ' onchange="calculateAmtQt(this.id)"' +
        "/>" +
        "</div>" +
        '<div class="col-1 mx-1 px-1">' +
        "<input" +
        ' type="text"' +
        ' class="form-control text-end"' +
        ' id="ItemRate' +
        counter +
        '"' +
        ' value="0"' +
        ' onchange="calculateAmtRate(this.id)"' +
        "/>" +
        "</div>" +
        '<div class="col">' +
        '<div class="col-12 px-0 mx-2">' +
        '<div class="input-group mb-3">' +
        '<span class="input-group-text" id="currencyAmt' +
        counter +
        '"' +
        ">" + currency + "</span" +
        ">" +
        "<input" +
        ' type="text"' +
        ' id="ItemAmt' +
        counter +
        '"' +
        ' class="form-control text-end"' +
        ' value="0"' +
        " readonly" +
        "/>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="d-grid gap-2 d-md-block my-0" style="font-size: 0;">' +
        "<button" +
        ' class="btn mb-4 mx-0 px-3 py-2"' +
        ' style="background-color: rgb(229 231 235); border-radius: 0; border-color: rgb(209 213 219);"' +
        ' type="button"' +
        ' id="cloneButton' +
        counter +
        '"' +
        ' onclick="cloneItem(this.id)"' +
        ">" +
        '<i class="fa-regular fa-copy fa-lg" style="color:rgb(156 163 175);"></i>' +
        "</button>" +
        '<button class="btn mb-4 mx-0 px-3 py-2" style="background-color: rgb(229 231 235); border-radius: 0; border-color: rgb(209 213 219);"'+
		' type="button" id="deleteButton'+counter+'" onclick="deleteItem(this.id)">'+
		'<i class="fa-solid fa-xmark fa-lg" style="color:rgb(156 163 175);"></i>'+
		'</button>'+
        "</div>" +
        "</div>";

    let domNode = new DOMParser().parseFromString(node, "text/html");
    document.getElementById("items").appendChild(domNode.documentElement);
    // update counter
    counter++;
}

function deleteItem(deleteButtonId) {
    id = deleteButtonId.substr(12);
    itemId = "item"+id;
    var itemRow = document.getElementById(itemId);
    itemRow.remove(); 
    // recalculate values
    calculateSubTotal();
}

function updateCurrency() {
    currency = document.getElementById("Currency").value;
    // extract currency's symbol - last three letters of string
    currency = currency.substr(-3);

    oldCurrency = document.getElementById("currencyTotal").innerHTML;
    currencyExchangeRate = currencyExchangeRates[oldCurrency+currency];

    for (let i = 1; i < counter; i++) {
        try {
            document.getElementById("currencyAmt" + i).innerHTML = currency;
            document.getElementById("ItemAmt"+i).value = (parseFloat(document.getElementById("ItemAmt"+i).value) * currencyExchangeRate).toFixed(2);
            document.getElementById("ItemRate"+i).value = (parseFloat(document.getElementById("ItemRate"+i).value) * currencyExchangeRate).toFixed(2);
        } catch (err) {
            // element with id may have been deleted
            console.log(err.message);
        }
    }
    document.getElementById("subTotal").innerHTML = (parseFloat(document.getElementById("subTotal").innerHTML) * currencyExchangeRate).toFixed(2);
    document.getElementById("vat").innerHTML = (parseFloat(document.getElementById("vat").innerHTML) * currencyExchangeRate).toFixed(2);
    document.getElementById("totalInput").innerHTML = "Total (" + currency + ")";
    document.getElementById("totalOutput").innerHTML = (parseFloat(document.getElementById("totalOutput").innerHTML) * currencyExchangeRate).toFixed(2);
    document.getElementById("currencyTotal").innerHTML = currency;
    document.getElementById("totalDue").value = (parseFloat(document.getElementById("totalDue").value) * currencyExchangeRate).toFixed(2);

}

function calculateTotal() {
    let subTotal = parseFloat(document.getElementById("subTotal").innerHTML);
    let vat = parseFloat(document.getElementById("vat").innerHTML);
    document.getElementById("totalOutput").innerHTML = (vat + subTotal).toFixed(2);
    document.getElementById("totalDue").value = (vat + subTotal).toFixed(2);
}

function calculateVAT() {
    let subTotal = parseFloat(document.getElementById("subTotal").innerHTML);
    let tax = parseFloat(document.getElementById("VATInput").value);
    document.getElementById("vat").innerHTML = (subTotal * (tax / 100)).toFixed(2);
    calculateTotal();
}

function calculateSubTotal() {
    // run for every element
    let sum = 0;
    for (let i = 1; i < counter; i++) {
        try {
            sum += parseFloat(document.getElementById("ItemAmt" + i).value);
        } catch (err) {
            // element with id may have been deleted
            console.log(err.message);
        }
    }
    document.getElementById("subTotal").innerHTML = sum.toFixed(2);
    calculateVAT();
}

function calculateAmt(id) {
    var amt = document.getElementById("ItemAmt" + id);
    var rate = document.getElementById("ItemRate" + id);
    var qt = document.getElementById("ItemQt" + id);
    amt.value = (rate.value * qt.value).toFixed(2);
    calculateSubTotal();
}

function calculateAmtRate(id) {
    // extract id number
    id = id.substr(8);
    calculateAmt(id);
}

function calculateAmtQt(id) {
    // extract id number
    id = id.substr(6);
    calculateAmt(id);
}

function generatePDF() {
    html2canvas(document.getElementById("printPDF")).then(function (canvas) {
        var imgdata = canvas.toDataURL('image/png', 1.0)
        var doc = new jsPDF("1", "mm", "a4")
        // imagedata, format, x, y, width, height
        doc.addImage(imgdata, 'PNG', 10, 10, 190, 230)
        doc.save("sample.pdf")
    })
}