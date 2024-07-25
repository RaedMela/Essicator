// const express = require("express")
// const path = require("path")
// const app = express()
// const bodyParser = require('body-parser');

// const singupCollection = require("./mongo")
// const port = process.env.PORT || 3000
// app.use(express.json())

// app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser.json());

// // const tempelatePath = path.join(__dirname, '../assets')
// const publicPath = path.join(__dirname, '')
// console.log(publicPath);

// // app.set('view engine', 'hbs')
// // app.set('views', tempelatePath)
// app.use(express.static(publicPath))


// // hbs.registerPartials(partialPath)


// // app.get('../signup.html', (req, res) => {
// //     res.render('signup')
// // })
// // app.get('/', (req, res) => {
// //     res.render('login')
// // })


// // app.get('/home', (req, res) => {
// //     res.render('home')
// // })

// app.post('/signup', async(req, res) => {
    
//     const data = new singupCollection({
//         email: req.body.email,
//         password: req.body.password
//     })
//     await data.save()
//     console.log(data)
//     .then(() => {
//         res.send('Signup successful!');
//     })
//     .catch(error => {
//         console.error(error);
//         res.status(500).send('Error signing up user.');
//     });
//     // const data = {
//     //     name: req.body.name,
//     //     password: req.body.password
//     // }

//     // const checking = await singupCollection.findOne({ email: req.body.email })

// //    try{
// //     if (checking.ema === req.body.name && checking.password===req.body.password) {
// //         res.send("user details already exists")
// //     }
// //     else{
//         await singupCollection.insertone([data])
// //     }
// //    }
// //    catch{
// //     res.send("wrong inputs")
// //    }

// //     res.status(201).render("home", {
// //         naming: req.body.email
// //     })
// res.send('Signup successful!');

// // 
// }
// )

// app.listen(port, () => {
//     console.log('port connected');
// })
//import library
function getCurrentTime() {
    // Create a new Date object to represent the current time
    const now = new Date();
  
    // Get the day, month, and year
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Note: getMonth() returns a value between 0 and 11, so we add 1 to get the actual month number
    const year = now.getFullYear();
  
    // You can format the time in different ways depending on your needs:
  
    // 1. Get the time in 24-hour format with the date (e.g., 22/05/2023 13:13)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time24 = `${day}/${month}/${year} ${hours}:${minutes}`;
  
    // 2. Get the time in 12-hour format with AM/PM and the date (e.g., 22/05/2023 1:13 PM)
    const hour12 = now.getHours() % 12 || 12;  // Convert to 12-hour format
    const isPM = now.getHours() >= 12;
    const time12 = `${day}/${month}/${year} ${hour12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
  
    // 3. Get the full date and time (e.g., Wednesday, May 22, 2024 1:13 PM)
    const fullTime = now.toLocaleString();
  
    // Choose the format that best suits your needs and return it
    return time24; // Or time12, or fullTime
  }
  const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
const PORT = 4000;
const { MongoClient } = require('mongodb');
const connectionString = "mongodb+srv://raed:raed@essicatore.5zwsnmu.mongodb.net/";
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

//dove il file del project 
app.use(express.static('C:/Users/raedm/Downloads/3D-Printer-Rent-master/3D-Printer-Rent-master/3d-project'))
app.use(bodyParser.urlencoded({
    extended:true
}))
const db = client.db('essicatore');
const collection = db.collection('temp');

async function run() {
    // Crea una connessione al client MongoDB

    try {
        // Connetti al client
        await client.connect();

        // Seleziona il database

        // Seleziona la collezione

        // Esegui una query di esempio
        const document = await collection.findOne();
        console.log(document);
    } finally {
        // Chiudi la connessione al client
      
    }
}

// Esegui la funzione
run().catch(console.dir);


//si fa un schema dei dati che vengono messi 
app.post("/",async(req,res)=>{
    var umidita = req.body.umidita; // prende il valore del body 
    var temperature = req.body.temperature;// prende il valore del body 
    var data = {
        //mette tutto dentro oggetto e lo inserisce nel database//
        
        "timestamp" :   getCurrentTime(),
        "Termocoppia" : Number(temperature),
        "Motivo" : "impostazioneEsterna"
    }
    
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
//redirection to the page if all things going well 
    return res.redirect('blog.html')
  await  client.close();
})
 

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('blog.html');
}).listen(PORT );
 
 // Cambia questo numero con la porta desiderata

