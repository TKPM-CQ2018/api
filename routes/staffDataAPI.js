const express = require("express");
const router = express.Router();

const StaffData = [
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
  {
    id: "001",
    name: "Hà Minh Cường",
    adress: "Dormitory, VNU",
    position: "CEO",
    telephone: "0967968666",
    department: "Administrator",
    salary: "10.000.000",
  },
];

router.get("/", (req, res, next) => {
  res.send(StaffData);
});

module.exports = router;