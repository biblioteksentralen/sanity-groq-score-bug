import {defineType} from 'sanity'

const book = defineType({
  name: 'book',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
    {
      name: 'authors',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})

export const schemaTypes = [book]
