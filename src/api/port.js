let PORT='';
let typePort="http://localhost:8000"
if(process.env.NODE_ENV==="production"){
    PORT="http://localhost:1000"
}
export {PORT,typePort}