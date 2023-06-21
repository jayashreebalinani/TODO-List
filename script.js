///
var count = 1
function display()
{
    var break1 = document.createElement("br")
    var data = document.getElementById("show").value

    var spanele = document.createElement('span')
    spanele.setAttribute('id','span_'+count)
    spanele.innerText = data

    var divele = document.createElement('div')
    divele.setAttribute('id','div_'+count)


    var element = document.createElement('input')
    element.value = data
    element.style.display = 'none'
    element.setAttribute('id','element_'+count)

    var editbutton = document.createElement('button')
    editbutton.innerText='edit'
    editbutton.setAttribute('id','edit_'+count)
    editbutton.addEventListener('click',editaction)
    editbutton.setAttribute('class',"edit")

    var deletebutton = document.createElement('button')
    deletebutton.innerText='delete'
    deletebutton.setAttribute('id','delete_'+count)
    deletebutton.addEventListener('click',deleteaction)
    deletebutton.setAttribute('class','delete')
    
    var updatebutton = document.createElement('button')
    updatebutton.innerText='update'
    updatebutton.setAttribute('id','update_'+count)
    updatebutton.addEventListener('click',updateaction)
    updatebutton.setAttribute('class','update')
    updatebutton.style.display = 'none'


    divele.append(spanele,element,editbutton,updatebutton,deletebutton,deletebutton,break1)
    document.getElementById('box').append(divele)
    count++

}
function editaction()
{
    var currentelement = document.activeElement.getAttribute('id')
    var currentid = currentelement.split('_')[1]

    var editelement = document.getElementById('element_'+currentid)
    editelement.style.display = 'inline-block'

    var showelement = document.getElementById('update_'+currentid)
    showelement.style.display = 'inline-block'

    var hideelement = document.getElementById('span_'+currentid)
    hideelement.style.display = 'none'

    document.activeElement.style.display = 'none'

}

function updateaction()
{
    var currentelement = document.activeElement.getAttribute('id')
    var currentid = currentelement.split('_')[1]

    var updateele = document.getElementById('element_'+currentid)
    updateele.style.display = 'none'

    var showelement = document.getElementById('span_'+currentid)
    showelement.style.display = 'inline-block'
    showelement.innerText = updateele.value

    document.activeElement.style.display = 'inline-block'

    var hide = document.getElementById('update_'+currentid)
    hide.style.display = 'none'

    var hideelement = document.getElementById('edit_'+currentid)
    hideelement.style.display = 'inline-block'

}

function deleteaction()
{
    var currentelement = document.activeElement.getAttribute('id')
    var currentid = currentelement.split('_')[1]
    
    var rem = document.getElementById('div_'+currentid)
    rem.remove()

}
