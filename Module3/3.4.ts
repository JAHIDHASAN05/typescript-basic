{
    //

    class animal{
        name: string;
        species: string;
        constructor (name : string, species: string){
            this.name= name;
            this.species= species
        }
        makeSound(){
            console.log("I am making sound")
        }
    }

    class Dog extends animal{
   
      constructor(name:string, species:string){
        super(name, species)
      }
      makeBarking(){
        console.log(' Iam barking')
      }
    }
    class Cat extends animal{
   
      constructor(name:string, species:string){
        super(name, species)
      }
      makeMeawing(){
        console.log(' Iam meaw meaw')
      }
    }



    const isDog=(animal: animal): animal is Dog=>{
        return animal instanceof Dog
    }
    const isCat=(animal: animal): animal is Cat=>{
        return animal instanceof Cat
    }
    const getAnimal=(animal:animal)=>{
        if(isDog(animal)){
            animal.makeBarking()
        }
        else if(isCat(animal)){
            animal.makeMeawing()
        }
        else{
            animal.makeSound()
        }


    }


    const dog = new Dog("dog bhai", 'dog')
    const cat= new Cat('Tommy', "cate")

getAnimal(dog)



    //

}