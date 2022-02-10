import { UserOrders } from "../../Model/Orders.Model";
import { UsersTable } from "../../interfaces/User.Interfaces";
import { UsersModel } from "../../Model/User.Model";
import { Product } from "../../interfaces/Products.Interface";
import { ProductStore } from "../../Model/Products.Model";

const orderStore = new UserOrders();
const users = new UsersModel();
const products = new ProductStore();

describe('Test Case To check all orders Methods are Defined', () => {
    it('Method Index should be Defined', () => {
        expect(orderStore.index).toBeDefined();
    })
    it('Method Create should be Defined', () => {
        expect(orderStore.create).toBeDefined();
    })
    it('Method Show should be Defined', () => {
        expect(orderStore.show).toBeDefined();
    })
    it('Method Delete should be Defined', () => {
        expect(orderStore.delete).toBeDefined();
    })
    it('Method addProductToOrder should be Defined', () => {
        expect(orderStore.addProductToOrder).toBeDefined();
    })
    it('Method close should be Defined', () => {
        expect(orderStore.close).toBeDefined();
    })
    it('Method removeProductFromOrder should be Defined', () => {
        expect(orderStore.removeProductFromOrder).toBeDefined();
    })
    it('Method showLastPurchases should be Defined', () => {
        expect(orderStore.showLastPurchases).toBeDefined();
    })
})
describe('Test Case To check all order Methods are working', () => {
    beforeAll(async () => {
        const userInfo: UsersTable = {
            username: "AmmarMassoud",
            password: "123456",
            firstname: "Ammar",
            lastname: "Massoud",
            email: "Ammarmohamedthez@gmail.com"
          }
        const createNewUser = await users.create(userInfo);
        const prodInfo: Product = {
            name: "Test Product 1",
            price: "50",
            category: "tests"
        }
        const newProduct = await products.create(prodInfo);
    })
    it('Method index Should Return an empty array', async () => {
        const showOrders = await orderStore.index();
        expect(showOrders).toEqual([]);
    })
    it('Create Method Should Return an empty array', async () => {
        const createNewOrder = await orderStore.create({status: "open", user_id: "1"});
        expect(createNewOrder).toBeInstanceOf(Array);
    })
    it('Show Method Should be an array with length 1', async () => {
        const showOrder = await orderStore.show("1");
        expect(showOrder).toHaveSize(1);
    })
    it('addProductToOrder Method Should Return an empty array', async () => {
        const addProduct = await orderStore.addProductToOrder("1", "20", "1");
        expect(addProduct).toEqual([]);
    })
    it('removeProductFromOrder Method Should Return an empty array', async () => {
        const removeProduct = await orderStore.removeProductFromOrder("1");
        expect(removeProduct).toEqual([]);
    })
    it('close Method Should return an array with length 1', async () => {
        const closeOrder = await orderStore.close("1");
        expect(closeOrder).toHaveSize(1);
    })
    it('the array returned from close should have object with key status set to closed', async () => {
        const closeOrder = await orderStore.close("1");
        expect(closeOrder[0].status).toContain('closed');
    })
    it('delete Method Should return an empty array', async () => {
        const deletedOrder = await orderStore.delete("1");
        expect(deletedOrder).toEqual([]);
    })
    it('showLastPurchases should return an empty array', async () => {
        const lastOrders = await orderStore.showLastPurchases();
        expect(lastOrders).toEqual([]);
    })
    afterAll( async () => {
        const deleteUser = await users.delete("1");
        const deletedProduct = await products.delete("1");
    })
})