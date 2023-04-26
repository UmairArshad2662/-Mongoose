const mongoose =  require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Hotel",{useNewUrlParser:true});//establishing the connection with the databse
//Schema
const EmployeeSchema = new mongoose.Schema({
    name: String,
    phone :Number,
    address: String
});
//model
const Employee = mongoose.model("Employee", EmployeeSchema)
//data entry
const employee = new Employee({
    name:"Umair",
    phone:03265,
    address:"XYZ"

})
//to read the database
Employee.find(employee).then(() => {
    console.log(employee);
  }).catch((err) => {
    console.error(err);
  });
// employee.save();




const guestSchema = new mongoose.Schema({
    name:String,
    payment:Boolean,
    age:Number
})

const Guest =  mongoose.model("guest",guestSchema)
const guest = new Guest({
name:'Mr. Ali',
payment:true,
age:30
})
// guest.save();
Guest.find(guest).then(() => {
        console.log(guest);
      }).catch((err) => {
        console.error(err);
      });
