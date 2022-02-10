import { Product } from "../../interfaces/Products.Interface";
import { ProductStore } from "../../Model/Products.Model";

const productEntry = new ProductStore();

describe('Check that all CRUD operations for products are defined', () => {
  it('Index Method should be defined', async() => {
    expect(productEntry.index).toBeDefined();
  })
  it('Create Method should be defined', async() => {
    expect(productEntry.create).toBeDefined();
  })
  it('Show Method should be defined', async() => {
    expect(productEntry.show).toBeDefined();
  })
  it('Delete Method should be defined', async() => {
    expect(productEntry.delete).toBeDefined();
  })
  it('showProductByCategory Method should be defined', async() => {
    expect(productEntry.showProductsByCategory).toBeDefined();
  })
});

describe('Test CRUD operations for Products', () => {
    it('Index Method should return an empty array', async() => {
        const allProducts = await productEntry.index()
        expect(allProducts).toEqual([]);
    })
    it('Create Method should return an object', async() => {
        const prodInfo: Product = {
            name: "Test Product 1",
            price: "50",
            category: "tests"
        }
        const newProduct = await productEntry.create(prodInfo);
        expect(newProduct).toBeInstanceOf(Object);
    })
    it('Should get an object containg id of 1', async() => {
        const singleProduct = await productEntry.show("2");
        expect(singleProduct).toHaveSize(1);
    })
    it('Should Delete the Product with id 1', async() => {
      const products = await productEntry.showProductsByCategory("tests");
      expect(products).toHaveSize(1);
    })
    it('Should Delete the Product with id 1', async() => {
        const deletedProduct = await productEntry.delete("2");
        expect(deletedProduct).toEqual([]);
    })
});