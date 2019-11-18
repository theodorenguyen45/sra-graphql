const { prisma } = require('./prisma-client')

module.exports = async req => {
  return {
    ...req,
    prisma
  }
}
