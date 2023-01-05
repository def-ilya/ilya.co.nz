export const schemaTypes = [
  {
    title: 'Posts',
    name: 'post',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Description',
        name: 'desc',
        type: 'string',
      },
      {
        title: 'Link',
        name: 'link',
        type: 'url',
      },
    ],
  },
]
