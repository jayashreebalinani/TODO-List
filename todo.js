var div
var data
var editbut
var delbut
var upbut
function dis()
{
    data = document.getElementById("show").value
    let br = document.createElement("br")
    document.body.append(br)
    div = document.createElement("div")
   
    
    for(var i = 0; i < 10; i++)
    {
        var ids = "listt" + i;
        var elements = []
        elements.push(document.getElementById(ids));
        div.setAttribute("id",elements[i])
        console.log(elements)
       
    
    
    //delete

    delbut = document.createElement("button")
    delbut.innerText="delete"
    delbut.addEventListener("click",delaction)
    delbut.setAttribute("id","del")

    //edit
    editbut = document.createElement("button")
    editbut.innerText="edit"
    editbut.addEventListener("click",editaction)
    editbut.setAttribute("id","edit")
    // for(var i = 1; i < data.length; i++)
    // {
    //     div = document.createElement("div")
    //     div.setAttribute("id","listt"+i)
    //     div.append(data)
    //     div.append(delbut)
    //     div.append(editbut)
    //     document.body.append(div)
    //     console.log(id)

    // }

    }
    //appending
    div.append(data)
    div.append(delbut)
    div.append(editbut)
    document.body.append(div)
}

function delaction()
{
   this.parentNode.style.display="none";
   
    //document.getElementById('listt').style.visibility = 'hidden';  
}
    // upbut = document.createElement("button")
    // upbut.innerText="update"
    // upbut.addEventListener("click",updateaction)
    // upbut.setAttribute("id","up")
function editaction()
{
   
   
    document.getElementById('edit').style.visibility = 'hidden';
    upbut = document.createElement("button")
    upbut.innerText="update"
    upbut.addEventListener("click",updateaction)
    upbut.setAttribute("id","up")
    div.append(upbut)

    var editdata = document.getElementById("listt").innerText
    document.getElementById("show").value=editdata
   
}

function updateaction()
{
    var data3 = document.getElementById("show").innerText
    document.getElementById("listt").innerText=data3

}
