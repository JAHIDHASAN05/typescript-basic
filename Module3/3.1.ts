{
    //

    class Animal{
        // public name: string;
        // public  age:number;
        // public species: string;
        constructor (public name:string,  public age:number, public species: string){
         this.name= name,
            this.age= age,
            this.species= species
        }

        getname(){
            console.log(`the animal name is ${this.name}`)
        }


    }

    const dog = new Animal('tommy', 12, 'animal')
    const cat= new Animal('jerry', 10, 'domestic')
    cat.getname()
    //

    }