

async function getData(){
        try{
                let data = await fetch("https://randomuser.me/api/?results=48");
                
                
                let mainData  = await data.json();
                let Users = mainData.results;
                console.log(Users);
                
                Users.forEach((user,index,arr)=>{       
                        arr[index].isActive = Boolean(Math.round(Math.random()));
                })              
                return Users
        }catch(err){
                console.error("Error: ", err);
                return [];
        }
}

export default getData;
