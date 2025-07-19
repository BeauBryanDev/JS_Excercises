// Main Body 

const usrForm = document.getElementById("user-form");
const rsltField = document.getElementById("rslt");


usrForm.addEventListener("submit" , (e) =>  {

    e.preventDefault();

    //Getb User INF 

    const user_name = document.getElementById("name").value ; 
    const user_age  = parseInt(document.getElementById("age").value );
    const user_city = document.getElementById("city").value ;

    //Create Object with Data ...

    const user =  {

        name :  user_name ,
        age :   user_age ,
        city :  user_city ,
        register_date : new Date().toLocaleString() ,

        greet : function()  {

            return `Hello , My Name is ${this.name}, I am ${this.age}, I came from ${this.city}`;
        }

    };

    //Conveeto 2 JS Object Notation .

    const JSON_User = JSON.stringify(user);
    localStorage.setItem("currentUser", JSON_User);

    // Retrieve and convert to object ...

    const RetrieveData =  JSON.parse( localStorage.getItem("currentUser"));

    //De-Estruturing JS Obj Not ...

    const { name: userName , age: userAge , city: userCuty } = RetrieveData ; 

    //Clone the JS Obj  within String ( ...)

    const UpdateUser = {
        ...RetrieveData,

        age: userAge - 1 ,
        updated : true,

    }

    //Shows Results 

    rsltField.innerHTML = `

        <p><strong>Name : ${userName}</strong></p>
        <p><strong>Edad : ${userAge}</strong></p>
        <p><strong>City : ${userCuty}</strong></p>
        <p><strong>JSON : ${JSON_User}</strong></p>
        <p>Cloned_USER : ${JSON.stringify( UpdateUser)}</p>

    `;


});