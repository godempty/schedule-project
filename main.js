let tabody = document.getElementById("tbody")
let time = document.getElementById("time")
let place = document.getElementById("place")
let description = document.getElementById("description")

function del(obj){
    var inde = obj.parentNode.parentNode.rowIndex;
    let ttable = document.getElementById("table")
    ttable.deleteRow(inde);
}

function addRow(){
    if(time.value=='' && place.value=='' || description.value==''){
        if(description.value==''){
            alert("請至少要輸入描述")
        }
        else{
            alert("請輸入內容")
        }
        return;
    }     
    tabody.innerHTML += "<tr><td>"+time.value+"</td><td>"+place.value+"</td><td>"+description.value+"</td><td><button class='delbutton' type='button' onclick='del(this)'>刪除</button></td></tr>";
    time.value = "";
    place.value = "";
    description.value = "";

}
