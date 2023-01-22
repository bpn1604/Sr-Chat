const http=require('http')
const express=require("express")
const app=express()

const PORT=4002
app.get("/",(req,res)=>{
    res.send("server is running")
})
const socketIo=require('socket.io')
const server=http.createServer(app)
const Io=socketIo(server)
server.listen(PORT,()=>{
console.log(`server is running on,${PORT}`)
})