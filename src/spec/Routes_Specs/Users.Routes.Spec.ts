import supertest from "supertest";
import { app } from "../../../app";
import { User, UsersTable } from "../../interfaces/User.Interfaces";

let token: string;

describe("Test Case For Users Route", () => {
    // beforeAll( async () => {
    //     const user:UsersTable = {
    //         email: "a@a.com",
    //         firstname: "Ammar",
    //         lastname: "Massoud",
    //         username: "MeroMassoud",
    //         password: "123"
    //     }
    //     const createdUser: supertest.Response = await supertest(app).post("/users").send(user).set("Accept", "application/json")
    //     token = createdUser.body
    //     console.log(token);
    // })

    it("POST /users Should create new user and return the status code of 200", async () => {
        const user:UsersTable = {
            email: "a@a.com",
            firstname: "Ammar",
            lastname: "Massoud",
            username: "MeroMassoud",
            password: "123"
        }
        const result = await supertest(app).post("/users").send(user)
        token = result.body
        expect(result.status).toEqual(200);
    })

    it("GET /users Should return the status code of 200", async () => {
        const result = await supertest(app).get("/users").send({token: token}).set("Authorization", `Bearer ${token}`)
        expect(result.status).toEqual(200);
    })

    it("GET /users/2 Should return the status code of 200", async () => {
        const result = await supertest(app).get("/users/2").send({token: token}).set("Authorization", `Bearer ${token}`)
        expect(result.status).toEqual(200);
    })

    it("GET /users/10 Should return empty array because there is no user with id 10", async () => {
        const result = await supertest(app).get("/users/10").send({token: token}).set("Authorization", `Bearer ${token}`)
        expect(result.body).toEqual([]);
    })

    it("DELETE /users/3 Should delete the user with id 4", async () => {
        const result = await supertest(app).delete("/users/4").send({token: token}).set("Authorization", `Bearer ${token}`)
        // await supertest(app).delete("/users/3").send({token: token}).set("Authorization", `Bearer ${token}`)
        expect(result.status).toEqual(200);
    })

    // it("should show only one user", async () => {
    //     const result = await supertest(app).get("/users").send({token: token}).set("Authorization", `Bearer ${token}`)
    //     expect(result.body).toEqual([]);
    // })

    // afterAll( ()=> {

    // })
})