const addForm = document.querySelector("#addForm")
const tableHeads = [{
        el: "id",
        viewEl: "ID",
        hasDeafult: true,
        default: Date.now()
    },
    {
        el: "status",
        viewEl: "Is Finished",
        hasDeafult: true,
        default: false
    },
    {
        el: "title",
        viewEl: "Title",
        hasDeafult: false
    },
    {
        el: "content",
        viewEl: "Content",
        hasDeafult: false
    },
    {
        el: "dueDate",
        viewEl: "Deadline",
        hasDeafult: false
    },
    {
        el: "age",
        viewEl: "Age",
        hasDeafult: false
    },
    {
        el: null,
        viewEl: "Actions",
        hasDeafult: false
    }
]
const readFromStorage = () => {
    let data
    try {
        data = JSON.parse(localStorage.getItem("tasks")) || []
        if (!Array.isArray(data)) throw new Error("no data")
    } catch (e) {
        data = []
    }
    return data
}
const writeToStorage = (data) => localStorage.setItem("tasks", JSON.stringify(data))

const createMyOwnElements = (parent, element, classes, txt, attributes = []) => {
    let myEle = document.createElement(element)
    if (classes) myEle.classList = classes
    parent.appendChild(myEle)
    myEle.innerText = txt
    attributes.forEach(attr => myEle[attr.attrName] = attr.attrVal)
    return myEle
}
const dataWrap = document.querySelector("#dataWrap")
const showData = () => {
    const data = readFromStorage()
    dataWrap.innerHTML = ""
    const thead = createMyOwnElements(dataWrap, "thead", null, null)
    const tr = createMyOwnElements(thead, "tr", null, null)
    tableHeads.forEach(h => createMyOwnElements(tr, "th", null, h.viewEl))
    const tbody = createMyOwnElements(dataWrap, "tbody", null, null)
    data.forEach((task, i) => {
        const tr = createMyOwnElements(tbody, "tr", null, null)
        tableHeads.forEach(h => {
            if (h.el) createMyOwnElements(tr, "td", null, task[h.el])
        })
        const td = createMyOwnElements(tr, "td", null, null)
        const delBtn = createMyOwnElements(td, "button", "btn btn-danger mx-2", "delete")
        delBtn.addEventListener("click", function (e) {
            data.splice(i, 1)
            writeToStorage(data)
            showData()
        })
        const showBtn = createMyOwnElements(td, "button", "btn btn-success mx-2", "show")
        showBtn.addEventListener("click", function (e) {
            localStorage.setItem("id",i )
            window.location.href = "single.html"
        })
        const editBtn = createMyOwnElements(td, "button", "btn btn-warning mx-2", "edit")

        editBtn.addEventListener("click", function (e) {
            localStorage.setItem("id",i )
            window.location.href = "edit.html"

        })
        const changeStatus = createMyOwnElements(td, "button", "btn btn-primary mx-2", "edit Status")
        changeStatus.addEventListener("click", function (e) {
            data[i].status = !data[i].status
            writeToStorage(data)
            showData()
        })
    })

}
if (dataWrap) showData()
if (addForm) {
    addForm.addEventListener("submit", function (e) {
        e.preventDefault()
        let task = {}
        tableHeads.forEach(head => {
            if (head.hasDeafult && head.el) task[head.el] = head.default
            else if (head.el) task[head.el] = addForm.elements[head.el].value
        })
        console.log(task)
        const allTasks = readFromStorage()
        allTasks.push(task)
        writeToStorage(allTasks)
        this.reset()
        window.location.href = "index.html"
    })

}

const single_ele = document.querySelector("#single-ele")
if (single_ele) {
    const itemId = localStorage.getItem("id")
    if (!itemId) window.location.href = "index.html"
    const data = readFromStorage()
    const myElement = data[itemId]
    if (!myElement) single_ele.innerHTML = `<div class="alert alert-danger"> Error in Loading</div>`
    else {
        single_ele.innerHTML = `
        <div class="alert alert-primary">
            <h4>${myElement.id}</h4>
            <h6>${myElement.title}</h6>
        </div>
        
     `
    }
}

const editForm = document.querySelector("#editForm")
if (editForm) {
    const itemId = localStorage.getItem("id") 
    if (!itemId) window.location.href = "index.html"
    const data = readFromStorage()
    const myElement = data[itemId]
    if (!myElement) editForm.innerHTML = `<div class="alert alert-danger"> Error in Loading</div>`
    else {
        tableHeads.forEach(h=>{
            if(h.el){
                editForm.elements[h.el].value = myElement[h.el]
            }
        })
    }

editForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    tableHeads.forEach(h=>{
        if(h.el){
            data[itemId][h.el]=editForm.elements[h.el].value
        }
    })
    writeToStorage(data)
    window.location.href="index.html"
})
}