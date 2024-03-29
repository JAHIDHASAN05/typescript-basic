{
  //type guard

  // type of ----> type guard
  type alphaNumaric = string | number;

  const add = (
    param1: alphaNumaric,
    param2: alphaNumaric
  ): alphaNumaric | undefined => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
        return param1.toString()+ param2.toString()
    }
  };

 const res1= add("2",5)
 console.log(res1);
  //

  type normaluser= {
    name: string
  }
  type adminUser={
    name:string;
    role:'admin'
  }

  const getUser=(user:normaluser|adminUser)=>{
    
    if('role' in user){
        return  console.log(`i AM TH E ADDMIN ${user.name}`)
    }
    else{
       return     console.log(`I am not admin a normal suer ${user.name}`)
    }
  }

  const admin :adminUser= getUser({name:'jahid' , role:'admin'})
  const normal: normaluser= getUser({name:'oli'})
  console.log(normal);
}
