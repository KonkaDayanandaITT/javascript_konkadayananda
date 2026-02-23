const users =[{
    id:1, name : "ram", active: true,
    id:2, name : "rahul", active: false,
    id:3, name : "priya", active: true
}]

users.map(user =>  {
   if(user.active === false){
    console.log(user.name)
   }
    }
);