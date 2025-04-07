import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(roleToVerify: 'ADMIN' | 'MEMBER') {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user

    console.log('Role:', role)
    console.log('Role to verify:', roleToVerify)
    if (role !== roleToVerify) {
      return reply.status(401).send({ messagem: 'Unauthorized.' })
    }
  }
}
