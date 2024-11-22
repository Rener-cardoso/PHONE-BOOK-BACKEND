import fastify from "fastify";
import cors from "@fastify/cors";
import { contactRoutes } from "./routes/contactRoutes";

const app = fastify();

app.register(contactRoutes, {
  prefix: "user"
})

app.register(cors, {
  origin: "http://localhost:5173",

})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!')
})