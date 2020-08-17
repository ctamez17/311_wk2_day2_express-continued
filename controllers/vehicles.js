const vehicles = require("../data/vehicles");

const vehiclesCount = vehicles.length;

 const list = (req, res) =>{
    res.json(vehicles);
 };

 const show = (req, res) => {
    const id = req.params.vehiclesId;
    const foundVehicles = vehicles.filter(vehicles => vehicles._id === Number(id));
    res.json(foundVehicles);
};


const create = (req, res) =>{
    console.log(req.body);

    const newVehicles ={  
    _id: vehiclesCount + 1,
        ...req.body,
    };
    vehicles.push(newVehicles);
    res.json(newVehicles);

};

module.exports = {
    list,
    show,
    create
};