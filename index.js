const Express= require('express')();
const app=Express;
function Auth() {
    const now = new Date()
    return now.getDay() !== 0 && now.getDay() !== 6 && now.getHours() >= 9 && now.getHours() < 17;
}
app.use(function(req, res, next){
    if(Auth()){
        next();
    }
    else{
        console.log("This App is not available at Weekends !");
        res.send('<h1 style="text-align: center;">This App is not available at Weekends !</h1>');
    }
 });
 //app.use(express.static('css'));
 app.get('/css/navstyle.css', function(req, res) {
    res.sendFile(__dirname+'/css/navstyle.css');
  });
  app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/acceuil.html');
  });
  app.get('/services', function(req, res) {
    res.sendFile(__dirname+'/views/services.html');
  });
  app.get('/contact', function(req, res) {
    res.sendFile(__dirname+'/views/contact.html');
  });
  
  
app.listen(5000,()=>console.log('server is running'));