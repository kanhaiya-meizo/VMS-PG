import UserRepository from "./user.repository.js";

export default class UserController{
    constructor(){
        this.userRepository = new UserRepository()
    }

    async createUser(req, res){
        // write your code logic here
        try {
            const res = await this.userRepository.addUserData(res);
        } catch (error) {
        }
    }

    async getUser(req, res){
        // write your code logic here
    }

    async updateUser(req, res){
        // write your code logic here
    }

    async deleteUser(req, res){
        // write your code logic here
    }
}