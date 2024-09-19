import VisitorRepository from "./visitor.repository.js";

export default class VisitorController{
    // write your vistor controller methods here
    constructor(){
        this.visitorRepository = new VisitorRepository();
    }
}