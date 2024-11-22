import { FastifyInstance, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma";
import { z } from "zod";


interface ParamsProps {
  id: string;
  search: string;
}

export async function contactRoutes(app: FastifyInstance) {
  app.post('/create', async (request, reply) => {

    const createUserSchema = z.object({
      firstName: z.string(),
      lastName: z.string(),
      phone: z.string()
    })

    const { firstName, lastName, phone } = createUserSchema.parse(request.body)
    
    try {
      const response = await prisma.user.create({
        data: {
          firstName,
          lastName,
          phone,
        }
      })
      return reply.status(201).send(response)
    } catch (error) {
      console.log(error)
    }
  })

  app.get('/show', async (request, reply) => {
    try {
      const response = await prisma.user.findMany({})

      return reply.send(response);
    } catch (error) {
      console.log(error)
    }
  })

  app.put('/update/:id', async (request: FastifyRequest<{ Params: ParamsProps}>, reply) => {

    const updateUserSchema = z.object({
      firstName: z.string(),
      lastName: z.string(),
      phone: z.string(),
    })

    const { id } = request.params;

    const { 
      firstName, 
      lastName, 
      phone, 
    } = updateUserSchema.parse(request.body)

    try {
      const response = await prisma.user.update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
          phone,
        }
      })
      return reply.send(response);
    } catch (error) {
      console.log(error)
    }
  })

  app.delete('/delete/:id', async (request: FastifyRequest<{ Params: ParamsProps}>, reply) => {
    const { id } = request.params;
    
    try {
      const response = await prisma.user.delete({
        where: {
          id,
        }
      })

      return reply.send(response);
    } catch (error) {
      console.log(error)
    }
  })
}