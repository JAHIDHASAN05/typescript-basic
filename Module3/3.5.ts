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
        addDeposite(amount: number){
            this._balance= this._balance+ amount
        }
        getBalance(){
            return this._balance;
        }
    }
    const goribAccount= new bankAccount( 111, 'mrgorib',20,)
    goribAccount.addDeposite(50);
    const MyBalance= goribAccount.getBalance()
    console.log(MyBalance);
    //

}