module.exports = {
  Query: {
    collections: async (root, __, { prisma }) => {
      const collections = await prisma.collections()

      return collections
    }
  },
  Collection: {
    items: async (root, __, { prisma }) => {
      const items = await prisma.collection({ id: root.id }).items()

      return items
    }
  },
  Item: {
    collection: async (root, __, { prisma }) => {
      const collection = await prisma.item({ id: root.id }).collection()
    }
  }
}
