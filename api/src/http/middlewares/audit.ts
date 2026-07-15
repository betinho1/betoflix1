import { FastifyReply, FastifyRequest } from "fastify";

export async function audit(req: FastifyRequest, _: FastifyReply) {
  req.log.info(
    {
      action: "API_REQUEST",
      method: req.method,
      url: req.url,
      ip: req.ip,
    },
    `User Anonymous accessed ${req.url}`,
  );
}
