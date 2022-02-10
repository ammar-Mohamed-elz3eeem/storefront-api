import supertest from "supertest";
import { app } from "../../../app";
import { UsersTable } from "../../interfaces/User.Interfaces";
import { Product } from "../../interfaces/Products.Interface";

let token: String;

describe("Test Case For Products Routes", () => {
    beforeAll(async () => {
        const user:UsersTable = {
            email: "a@a.com",
            firstname: "Ammar",
            lastname: "Massoud",
            username: "MeroMassoud",
            password: "123"
        }
        const createNewUser = await supertest(app).post("/users").send(user).accept("application/json")
        token = createNewUser.body
    })

    it("POST /products/add Should return the status code of 200", async () => {
        const productData: Product = {
            name: "Test Product 1",
            category: "test",
            price: "50"
        }
        const request = await supertest(app).post("/products/add").send(productData).set("Authorization", `Bearer ${token}`)
        expect(request.status).toEqual(200)
    })

    it("POST /products/add Should return the status code of 403 For Non-Users", async () => {
        const productData: Product = {
            name: "Test Product 1",
            category: "test",
            price: "50"
        }
        const request = await supertest(app).post("/products/add").send(productData)
        expect(request.status).toEqual(403)
    })

    it("GET /products Should return the status code of 200", async () => {
        const request = await supertest(app).get("/products").set("Authorization", `Bearer ${token}`)
        expect(request.status).toEqual(200)
    })

    it("GET /products Should return the status code of 200 For Non-Users", async () => {
        const request = await supertest(app).get("/products")
        expect(request.status).toEqual(200)
    })

    it("GET /products/2 Should return the status code of 200", async () => {
        const request = await supertest(app).get("/products/2").set("Authorization", `Bearer ${token}`)
        expect(request.status).toEqual(200)
    })

    it("GET /products/2 Should return the status code of 200 For Non-Users", async () => {
        const request = await supertest(app).get("/products/2")
        expect(request.status).toEqual(200)
    })

    it("GET /products/test Should return the status code of 200", async () => {
        const request = await supertest(app).get("/products/cat/test").set("Authorization", `Bearer ${token}`)
        expect(request.status).toEqual(200)
    })

    it("GET /products/test Should return the status code of 200 For Non-Users", async () => {
        const request = await supertest(app).get("/products/cat/test")
        expect(request.status).toEqual(200)
    })

    it("DELETE /products/2 Should return the status code of 200", async () => {
        const request = await supertest(app).delete("/products/2").set("Authorization", `Bearer ${token}`)
        expect(request.status).toEqual(200)
    })

    it("DELETE /products/2 Should return the status code of 403 For Non-Users", async () => {
        const request = await supertest(app).delete("/products/2")
        expect(request.status).toEqual(403)
    })

    afterAll(async () => {
        const deleteUser = await supertest(app).delete("/users/4").send({token: token}).set("Authorization", `Bearer ${token}`);
    })
})