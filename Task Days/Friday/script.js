addbtn = document.getElementById("addbtn")
addbtn.addEventListener("click",function()
{
    maintable = document.getElementById("maintable")
    namebox = document.getElementById("namebox").value
    agebox = document.getElementById("agebox").value
    genderbox = document.getElementById("genderbox").value
   
    newRow = document.createElement("tr")

    nametd = document.createElement("td")
    nametd.innerHTML = namebox
    newRow.appendChild(nametd)

    agetd = document.createElement("td")
    agetd.innerHTML = agebox
    newRow.appendChild(agetd)

    gendertd = document.createElement("td")
    gendertd.innerHTML = genderbox
    newRow.appendChild(gendertd)

    deletebtn = document.createElement("td")
    deletebtn.innerHTML = "<button onclick=\"deleteRow(event)\"><i class=\"fa-solid fa-xmark\" style=\"color: #ff0000;\"></i></button>"
    newRow.appendChild(deletebtn)

    maintable.appendChild(newRow)

   
})

// delete function to remove the entire row from the table  
function deleteRow(event)
{
    console.log(event);
    console.log(event.target.parentElement.parentElement.parentNode.remove());
}