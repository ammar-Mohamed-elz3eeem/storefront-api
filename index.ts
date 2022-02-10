import { app } from "./app";

const port: string = process.env.PORT || "3000"

app.listen(port, ()=>console.log(`Listening to port: ${port}`))