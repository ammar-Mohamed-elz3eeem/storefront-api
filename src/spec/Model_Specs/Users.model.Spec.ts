import { UsersTable } from "../../interfaces/User.Interfaces";
import { UsersModel } from "../../Model/User.Model";
require("dotenv").config();

const newUser = new UsersModel();

describe('Check that the users model has the CRUD operations', () => {
  it("Should Define a method for creating new users", () => {
    expect(newUser.create).toBeDefined();
  });
  it("Should Define a method for indexing all users", () => {
    expect(newUser.index).toBeDefined();
  });
  it("Should Define a method for showing specific user with his id", () => {
    expect(newUser.show).toBeDefined();
  });
  it("Should Define a method for deleting specific user with his id", () => {
    expect(newUser.delete).toBeDefined();
  });
});
describe('Check out that CRUD operations are working correctly', () => {
  it("indexing all users", async () => {
    const allusers = await newUser.index();
    expect(allusers).toEqual([]);
  });
  it("Creating new User", async () => {
    const userInfo: UsersTable = {
      username: "AmmarMassoud",
      password: "123456",
      firstname: "Ammar",
      lastname: "Massoud",
      email: "Ammarmohamedthez@gmail.com"
    }
    const createNewUser = await newUser.create(userInfo);
    expect(createNewUser).toBeInstanceOf(Object);
  });
  it("showing specific user with his id", async () => {
    const showUser = await newUser.show("2");
    expect(showUser).not.toEqual([])
  });
  it("Shouldn't return Null and authenticate the user", async() => {
    const authenticateUser = await newUser.authenticate("AmmarMassoud", "123456");
    expect(authenticateUser).not.toEqual(null);
  })
  it("deleting specific user with his id", async () => {
    const deleteUser = await newUser.delete("2");
    expect(deleteUser).toEqual([])
  });
});