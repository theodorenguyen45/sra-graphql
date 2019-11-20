module.exports = {
  Query: {
    collections: async (root, __, { prisma }) => {
      const collections = await prisma.collections()

      return collections
    },
    getCollectionsByTitle: async (root, { title }, { prisma }) => {
      const upperCasedTitle = title.charAt(0).toUpperCase() + title.slice(1)

      const [collections] = await prisma.collections({
        where: {
          title_contains: upperCasedTitle
        }
      })

      const { id } = collections

      const items = await prisma
        .collection({
          id: id
        })
        .items()

      const returnValue = {
        id,
        title,
        items: items
      }

      return returnValue
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

      return collection
    }
  }
}
