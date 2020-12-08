angular.module('MyApp',[])
.controller('MyCtrl',function($scope)
{
    $scope.Employees=[
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

    $scope.AddEmployee=function()
    {
        $scope.Employees.push(
        {
            Name:$scope.name,
            Age:$scope.age,
            Address:$scope.address,
            State:$scope.state,
            City:$scope.city,
            Phone:$scope.phone,
            Salary:$scope.salary
        });
    }
    // function getindex(index)
    // {
    //     alert(name);
    //     for(var i=0;i<$scope.Employees.length;i++)
    //     {
    //         alert($scope.Employees[i].index);
    //         if($scope.Employees[i].Name==name)
    //         {
    //             alert("Coming");
    //             return i;
    //         }

    //     }
    //     return -1;
    // }

    $scope.EditEmployee=function()
    {
        var index=this.$index;
        var Employee=$scope.Employees[index];
        $scope.index=index;
        $scope.name=Employee.Name;
        $scope.age=Employee.Age;
        $scope.address=Employee.Address;
        $scope.state=Employee.State;
        $scope.city=Employee.City;
        $scope.phone=Employee.Phone;
        $scope.salary=Employee.Salary;
    }

    $scope.SaveEmployee=function()
    {
        var index=$scope.index;

        $scope.Employees[index].Name=$scope.name;
        $scope.Employees[index].Age=$scope.age;
        $scope.Employees[index].Address=$scope.address;
        $scope.Employees[index].State=$scope.state;
        $scope.Employees[index].City=$scope.city;
        $scope.Employees[index].Phone=$scope.phone;
        $scope.Employees[index].Salary=$scope.salary;
    }
    
    $scope.DeleteEmployee=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.Employees.splice(index,1);
        }
    };
});