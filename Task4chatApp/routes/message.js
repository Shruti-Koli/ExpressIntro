const express= require('express');
const fs=require('fs');

const router=express.Router();

router.get(`/`,(req, res,next) => {
    fs.readFile('messages.txt',(err,data)=>{
        if(err){
            console.log(err);
            data='No chat exists';
        }
        res.send(`${data}<form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
        method="POST">
        <input id="message" name="message" type="text"placeHolder="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">send</button>
        </form>`)
    })
   })

router.post('/',(req,res,next)=>{
    console.log(`{${req.body.username}:${req.body.message}}`);
    fs.writeFile('messages.txt',`${req.body.username}: ${req.body.message}----`,{flag:'a'},(err)=>{
     err?console.log("error"):res.redirect('/');             
    })        
})


module.exports = router