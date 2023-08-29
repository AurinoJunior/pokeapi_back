import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { axiosInstance } from "./lib/axios";

const server = fastify();

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🔥 HTTP Server Running");
  });

server.get(
  "/pokemon/abilities",
  (request: FastifyRequest, reply: FastifyReply) => {}
);
