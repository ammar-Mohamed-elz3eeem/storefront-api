import supertest from "supertest";
import { app } from "../../../app";
import { UsersTable } from "../../interfaces/User.Interfaces";
import { Product } from "../../interfaces/Products.Interface";

let token: string;

describe("Test Case For order Route", () => {
    beforeAll(async () => {
        const user:UsersTable = {
            email: "a@a.com",
            firstname: "Ammar",
            lastname: "Massoud",
            username: "MeroMassoud",
            password: "123"
        }
        const productData: Product = {
            name: "Test Product 1",
            category: "test",
            price: "50"
        }
        const request = await supertest(app).post("/users").send(user).accept("application/json");
        token = request.body
        const addProd = await supertest(app).post("/products/add").send(productData).send({token}).accept("application/json").set("Authorization", `Bearer ${token}`);
    })

    it("GET /order Should return status code 200", async() => {
        const request = await supertest(app).get("/orders").send({token}).set("Authorization", `Bearer ${token}`);
        expect(request.status).toEqual(200)
    })

    it("GET /order Should return status code 403 For Non-Users", async() => {
        const request = await supertest(app).get("/orders").send({token})
        expect(request.status).toEqual(403)
    })

    it("POST /order Should Create new Order & return status code 200", async() => {
        const request = await supertest(app).post("/orders").send({token, status: "open", user_id: "3"}).set("Authorization", `Bearer ${token}`);
        expect(request.status).toEqual(200)
    })

    it("POST /order Should return status code 403 For Non-Users", async() => {
        const request = await supertest(app).post("/orders").send({status: "open", user_id: "1"})
        expect(request.status).toEqual(403)
    })

    it("GET /order/1 Should return status code 200", async() => {
        const request = await supertest(app).get("/orders/1").send({token}).set("Authorization", `Bearer ${token}`);
        expect(request.status).toEqual(200)
    })

    it("GET /order/1 Should return status code 200", async() => {
        const request = await supertest(app).get("/orders/1").send({token}).set("Authorization", `Bearer ${token}`);
        expect(request.body).toEqual([])
    })

    it("GET /order/1 Should return status code 403 For Non-Users", async() => {
        const request = await supertest(app).get("/orders/1").send({token})
        expect(request.status).toEqual(403)
    })

    it("POST /order/1/product Adds a product to order and Should return status code 200", async() => {
        const productId: string = "3";
        const quantity: string = "10";
        const request = await supertest(app).post("/orders/2/product").send(
            {token: token, product_id: productId, quantity: quantity })
            .set("Authorization", `Bearer ${token}`);
        expect(request.status).toEqual(200)
    })

    it("POST /order/1 Should return status code 403 For Non-Users", async() => {
        const productId: string = "2";
        const quantity: string = "10";
        const userId: string = "5";
        const request = await supertest(app).post("/orders/2/product").send(
            {product_id: productId, quantity: quantity, user_id: userId })
        expect(request.status).toEqual(403)
    })

    it("DELETE /order/1/product removes product from order and Should return status code 200", async() => {
        const request = await supertest(app).delete("/orders/1/product").send({product_id: "2"}).set("Authorization", `Bearer ${token}`)
        expect(request.status).toEqual(200)
    })

    it("DELETE /order/1/product Should return status code 403 for Non-users", async() => {
        const request = await supertest(app).delete("/orders/1/product").send({token: token,product_id: "2"})
        expect(request.status).toEqual(403)
    })

    it("DELETE /order/1 Should return status code 403 For Non-Users", async() => {
        const request = await supertest(app).delete("/orders/1").send({token})
        expect(request.status).toEqual(403)
    })

    it("DELETE /order/1 Should return status code 200", async() => {
        const request = await supertest(app).delete("/orders/1").send({token}).set("Authorization", `Bearer ${token}`)
        expect(request.status).toEqual(200)
    })
})