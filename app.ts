import express, {Request, Response} from "express";
import path from "path";
import { errorMiddlerware } from "./src/middleware/errorMiddlerware";
import { servicesRouter } from "./src/Routes/dashboard/Services.Routes";
import { orderRoutes } from "./src/Routes/Orders.Routes";
import { productRotes } from "./src/Routes/Products.Route";
import { userRoutes } from "./src/Routes/User.Route";
require("dotenv").config();

export const app: express.Application = express();

const viewsPath: string = path.resolve(process.cwd(),"views");
const assets: string = path.resolve(process.cwd(), "assets");
const bootstrapFolder = path.resolve(process.cwd(), "node_modules", "bootstrap", "dist");


app.use(express.static(bootstrapFolder));
app.use(express.static(assets));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.get("/", (req: Request, res: Response) => {
    res.render("home");
})

app.use("/users", userRoutes);
app.use("/products", productRotes);
app.use("/orders", orderRoutes);
app.use("/dashboard", servicesRouter);

app.get("*", errorMiddlerware);