import{Engine} from './engine'

class auto {
    engine:Engine;
    constructor(engine:Engine){
        this.engine=engine;
        console.log("inside engine")
        console.log(this.engine)
    }
}

class truck extends auto{
    fourbyfour:boolean;
    constructor(engine:Engine,fourbyfour:boolean){
        super(engine);

        this.fourbyfour=fourbyfour
        console.log("inside truck")
    }
}

let e = new Engine(300,'1000cc');
let t = new truck(e,true);