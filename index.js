import  express  from "express"; 

const app = express();
const PORT=4000;

const MONGO_URL = "mongodb://localhost";
async function createConnection()
 {const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
   return client;
}
 const client = await createConnection();
 const user = [
    {
      userName: "LINGESH",
      position: "FULL-STACK DEVELOPER",
      office: "CHENNAI",
      age: 22,
      startDate: "2022-02-21",
      salary: "500000",
    },
    {
      userName: "SANGAVI",
      position: "FULL-STACK DEVELOPER",
      office: "CHENNAI",
      age:  22,
      startDate: "2022-10-23",
      salary: "500000",
    },
    {
      userName: "SWETHA",
      position: "FULL-STACK DEVELOPER",
      office: "CHENNAI",
      age: 22,
      startDate: "2019-05-02",
      salary: "500000",
    },
    
  ];
  const products = [
    {
      productName: "I20 Sportz",
      productCompany: "Hyundai Motor Company",
      type: "Car",
      availableFrom: "1967-12-29",
      price: "918000",
    },
    {
      productName: "Altroz",
      productCompany: "Tata Motors",
      type: "Car",
      availableFrom: "1945-03-15",
      price: "956000",
    },
    {
      productName: "Kia Carens",
      productCompany: "Kia Motors",
      type: "Car",
      availableFrom: "1944-12-11",
      price: "1195000",
    },
    {
      productName: "Polo GT",
      productCompany: "Volkswagen",
      type: "Car",
      availableFrom: "1937-02-15",
      price: "1800000",
    },
    {
      productName: "Harrier",
      productCompany: "Tata Motors",
      type: "Car",
      availableFrom: "1945-03-15",
      price: "1850000",
    }
  ];

  app.get("/",function(request,response){
    response.send("hello this is lee fullstack developer");
})

app.get("/users", async function(request,response){
    const user = await client.db("b30wd").collection("users").find({}).toArray();
    response.send(user)
  });
  app.get("/products", async function(request,response){
    const product = await client.db("b30wd").collection("products").find({}).toArray();
    response.send(product)
  });



app.listen(PORT,()=>console.log(`server is started ${PORT}`));