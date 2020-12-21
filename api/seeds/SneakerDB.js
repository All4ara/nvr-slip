const mongoose = require("mongoose");
const Sneakers = require("../models/SneakerSchema");
const MONGODB_URI = "mongodb://localhost:27017/Sneakers";

const kicks = [
    {
        title: "Nike Air Mags",
        image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F01%2Fsix-nike-mags-found-albany-oregon-expired-storage-unit-001.jpg?quality=95&w=1170&cbr=1&q=90&fit=max",
        release: "10/21/2015",
        price: "$2,300 - $9,959",
        gender: "Mens",
        styleCode: "417744 001",
        region: "n/a",
        updates: {
            type: Date,
            default: Date.now
        },
        locations: ["ebay.com"],
        stock: 1500,
        company: "Nike"
    },
    {
        title: "Kanye West x Louis Vuitton Don 'Red'",
        image: "https://images.solecollector.com/complex/image/upload/vukvdnhaxbhu1wsf8fpm.jpg",
        release: "7/1/2009",
        price: "$870",
        gender: "Mens",
        styleCode: "YP6U2PPC",
        region: "US/Europe",
        updates: {
            type: Date,
            default: Date.now
        },
        locations: ["louisvuitton.com"],
        
        company: "Louis Vuitton"
    },
    {
        title: "Human Race NMD Pharrell x Chanel",
        image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F11%2Fchanel-adidas-originals-pharrell-williams-hu-nmd-on-feet-1.jpg?w=1600&cbr=1&q=90&fit=max",
        release: "11/21/2017",
        price: "$1,160",
        gender: "Mens",
        styleCode: "D97921",
        region: "US/Europe",
        updates: {
            type: Date,
            default: Date.now
        },
        locations: ["chanel.com"],
        stock: 1000,
        company: "Adidas"
    }
]

mongoose
    .connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
        return Sneakers.insertMany(kicks);
    })
    .then((reviews) => {
        console.log("Db Seeded");
    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });

