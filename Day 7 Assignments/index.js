// fill in javascript code here
document.querySelector("form").addEventListener("submit", getdetails)
function getdetails(e) {
    e.preventDefault()
    let name = document.querySelector("#name").value
    let id = document.querySelector("#docID").value
    let dept = document.querySelector("#dept").value
    let exp = document.querySelector("#exp").value
    let mail = document.querySelector("#email").value
    let num = document.querySelector("#mbl").value
    let docdetail = { name, id, dept, exp, mail, num }
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText = docdetail.name
    let td2 = document.createElement("td")
    td2.innerText = docdetail.id
    let td3 = document.createElement("td")
    td3.innerText = docdetail.dept
    let td4 = document.createElement("td")
    td4.innerText = docdetail.exp
    let td5 = document.createElement("td")
    td5.innerText = docdetail.mail
    let td6 = document.createElement("td")
    td6.innerText = docdetail.num
    let td7 = document.createElement("td")
    if (exp > 5) {
        td7.innerText = "Senior"
    }
    else if (exp >= 2 & exp <= 5) {
        td7.innerText = "Junior"
    }
    else {
        td7.innerText = "Trainee"
    }
    let td8 = document.createElement("td");
    let btn = document.createElement("button");

    btn.innerText = "Delete";

    btn.addEventListener("click", function () {
        row.remove();
    });

    td8.append(btn);
    row.append(td1, td2, td3, td4, td5, td6, td7, td8)
    document.querySelector("tbody").append(row)

}

