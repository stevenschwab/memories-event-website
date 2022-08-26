const deleteBtn = document.querySelectorAll('.del')
const editEvent = document.querySelectorAll('.edit')
const viewEvent = document.querySelectorAll('.view')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteEvent)
})

Array.from(editEvent).forEach((el)=>{
    el.addEventListener('click', editEventPage)
})

Array.from(viewEvent).forEach((el)=>{
    el.addEventListener('click', viewEventPage)
})

async function deleteEvent(){
    const eventId = this.parentNode.dataset.id;
    try {
        const response = await fetch('createYourOwnEvent/deleteEvent', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'eventIdFromJSFile': eventId,
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    } catch(err){
        console.log(err)
    }
}

async function editEventPage(){
    const eventId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function viewEventPage(){
    const eventId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}