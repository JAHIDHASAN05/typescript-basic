{
    //

   class AllFater{
        constructor(public name:string , public totalBagh :number, public child: string)
        {}
        getTotalBagh(total :string){
            console.log(`${this.name} has ${total} from father inheritance`)
        }

    }

    class ShompottiShomorPon extends AllFater{
        constructor( public name : string, public totalBagh : number, public child : string){
                super(name, totalBagh, child)
        }
        
    }

    const thor = new ShompottiShomorPon('thor', 2, 'firstBorn child')
   thor.getTotalBagh('5/2')
    //
    class father extends AllFater{
        constructor( public name : string,public totalBagh : number, public child : string ,public designation: string ){
                super(name, totalBagh, child)
                
        }
      
        fromWar(warName :string){
            console.log(`${this.name} wan in ${warName}`)
        }
    }
    const odin = new father('odin', 2, 'firstBorn child','jdfhg')
     odin.fromWar('byfrost')
    


}