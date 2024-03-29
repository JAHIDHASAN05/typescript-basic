{
  //

  class Person {
    getSleep() {
      console.log(`I am slepping for 8 hours per day`);
    }
  }

  class student extends Person {
    getSleep() {
        console.log(`I am slepping for 6 hours per day`);
      }
  }
  class developer extends Person {
    getSleep() {
        console.log(`I am slepping for 7 hours per day`);
      }
  }

  const getSleepTime=(param:Person)=>{
    param.getSleep()
  }

  const person1= new Person()
  const person2= new student()
  const person3= new developer()

  getSleepTime(person1)
  getSleepTime(person3)
  getSleepTime(person2)


  class Shape{
    getArea():number{
        return 0
    }
  }

  class Circle extends Shape{
    radius: number;
    constructor(radius:number){
        super()
        this.radius= radius
    }

    getArea(): number {
        return Math.PI *this.radius*this.radius
    }
  }


  class Ractangle extends Shape{
    height : number;
    width: number;
        
    
    constructor(height : number , width : number){
        super()
      this.width= width;
      this.height= height
    }

    getArea(): number {
        return this.height*this.width
    }
  }

  const getShapARea=(param: Shape)=>{
    console.log(param.getArea())
  }
  const shape1= new Shape()
  const shape2= new Circle(10)
  const shape3= new Ractangle(10,20)

  getShapARea(shape1)
  getShapARea(shape2)
  getShapARea(shape3)

  //
}
