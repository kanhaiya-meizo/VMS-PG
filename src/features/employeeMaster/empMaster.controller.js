import EmpMasterRepository from "./empMaster.repository.js"
export default class EmpMasterController{
    // write your emp master controller method here
    constructor(){
        this.empMasterRepository = new EmpMasterRepository();
    }
}