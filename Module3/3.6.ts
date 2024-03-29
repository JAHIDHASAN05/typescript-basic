{
    //

    
    class bankAccount {
        public  readonly name : string;
        public id: number;
        protected _balance: number;
         constructor(id: number, name:string, balance:number){
            this.name= name;
            this._balance= balance;
            this.id= id
        }

       set deposite(amount: number){
            this._balance= this._balance+ amount
        }
        // addDeposite(amount: number){
        //     this._balance= this._balance+ amount
        // }
        get balance(){
           return  this._balance
        }
    }
    const goribAccount= new bankAccount( 111, 'mrgorib',200,)
    goribAccount.deposite=500
    // goribAccount.addDeposite(50);
    const MyBalance= goribAccount.balance
    console.log(MyBalance);
    //

}