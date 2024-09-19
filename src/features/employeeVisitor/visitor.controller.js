import VisitorRepository from "./visitor.repository.js";

export default class VisitorController{
    // write your vistor controller methods here
    constructor(){
        this.visitorRepository = new VisitorRepository();
    }

    async createVisitor(req, res){
        // write your code logic here
        try {
            const res = await this.visitorRepository.addVisitorData(res);
        } catch (error) {
        }
    }

}