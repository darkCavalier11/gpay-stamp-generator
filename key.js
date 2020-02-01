console.log('sUMIt kUMAr pRADHAn')
const fs = require('fs')
const request = require('request')
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = lowerCase.toUpperCase()
// const ls = lowerCase[parseInt(Math.random()*26)]
// const us = upperCase[parseInt(Math.random()*26)]
// const num = String(parseInt(Math.random()*10))
const keygen = ()=>{
    const randomKey = upperCase[parseInt(Math.random()*26)]+ upperCase[parseInt(Math.random()*26)]+ 
    upperCase[parseInt(Math.random()*26)] + upperCase[parseInt(Math.random()*26)] +
    upperCase[parseInt(Math.random()*26)] + upperCase[parseInt(Math.random()*26)]
    request({url:'https://gpay.app.goo.gl/'+randomKey}, (err, res)=>{
       try{ 

        if(res.statusCode == 200){
            console.log(randomKey);
            fs.appendFileSync('keys.txt', `${randomKey} `);
        }}
        catch(e){
            return;
        }
})
    
}
setInterval(keygen,10);