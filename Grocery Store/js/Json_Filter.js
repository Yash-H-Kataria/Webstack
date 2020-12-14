angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var Employees=[
        {
            "Name":"Yash Kataria",
            "Age":21,
            "Address":"Mahavir Nagar",
            "State":"Gujarat",
            "City":"Vapi",
            "Phone":9512136600,
            "Salary":50000
        },
        {
            "Name":"Pulkit Bhagwate",
            "Age":22,
            "Address":"Kadodara",
            "State":"Gujarat",
            "City":"Surat",
            "Phone":9898826290,
            "Salary":85000
        },
        {
            "Name":"Praneet Kaisare",
            "Age":24,
            "Address":"Kakrapar",
            "State":"Gujarat",
            "City":"Vyara",
            "Phone":787881850,
            "Salary":56000
        },
        {
            "Name":"Kishan Mistry",
            "Age":19,
            "Address":"Dharampur",
            "State":"Gujarat",
            "City":"Valsad",
            "Phone":787881850,
            "Salary":30000
        },
        {
            "Name":"Souvik Datta",
            "Age":20,
            "Address":"Sachin City",
            "State":"Gujarat",
            "City":"Surat",
            "Phone":787881850,
            "Salary":64000
        }

    ];
    $scope.Employees=Employees;
    $scope.rowlimit=5;
});