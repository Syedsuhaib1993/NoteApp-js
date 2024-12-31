const div = document.getElementById('addnote')
const addbtn = document.getElementById('btn')



function getnote(){

    txtarea = document.createElement('textarea')
    txtareatxt = document.createTextNode('')
    txtarea.appendChild(txtareatxt)
    txtarea.setAttribute('class','w-[100%] h-[100%] rounded-lg p-2 bg-blue-300 hover:bg-blue-200 text-900-blue hover:border-3 hover:cursor-pointer')
    txtarea.setAttribute('Placeholder','Enter text')
    notediv = document.createElement('div')
    notediv.appendChild(txtarea)
    div.appendChild(notediv)
    console.log(notediv);
    notediv.setAttribute('class','w-[30%] h-60 border-2 border-blue-800 rounded-lg m-4 ')
    notediv.setAttribute('ondblclick','del(this)')

}
function del(ele){
    warning= confirm("Do you want to delete this note?")
    ele.remove()
}

