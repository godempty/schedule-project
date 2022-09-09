let tabody = document.getElementById("tbody")
let time = document.getElementById("time")
let place = document.getElementById("place")
let description = document.getElementById("description")

function del(obj) {
    var inde = obj.parentNode.parentNode.rowIndex;
    let ttable = document.getElementById("table")
    ttable.deleteRow(inde);
}

function edit(obj) {
    var inde = obj.parentNode.parentNode.rowIndex;
    let ttable = document.getElementById("table")
    ttable.deleteRow(inde)
}

function upload() {
    console.log('upload!')
    let time = document.getElementById("time")
    let place = document.getElementById("place")
    let description = document.getElementById("description")
    url = '/schedule'
    var xhr = new XMLHttpRequest();
    let datas = [time.value.toString(), place.value.toString(), description.value.toString()]
    console.log('============================')
    console.log(typeof datas)
    console.log(datas)
    console.log('============================')
    xhr.open('POST', url, false) // done
    xhr.send(datas)
}

function addRow() {

    if (description.value == '') {
        alert("請至少要輸入描述");
        return;
    }
    tabody.innerHTML += "<tr><td>" + time.value + "</td><td>" + place.value + "</td><td>" + description.value + "</td><td><button class='delbutton' type='button' onclick='edit(this)''>編輯</button><button class='delbutton' type='button' onclick='del(this)'>刪除</button></td></tr>";
    upload();
    time.value = "";
    place.value = "";
    description.value = "";

}