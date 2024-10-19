const websocket =  require('ws')

const socket = new websocket(`ws:localhost:4001`)


socket.addEventListener('open', ()=>{
    console.log('connected to server')

})
socket.addEventListener('message',(message) =>{
    console.log('just got this :' , message.data)
})
socket.addEventListener('close', ()=>{
    console.log('Disconnected to server')
})


