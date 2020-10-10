const posts = [
  {
    id: 1234567,
    text: 'When the cows come home',
    user: {
      avatar: 'sdfdfsd',
      username: 'Stupendo'
    }
  },
  {
    id: 1234568,
    text: 'When the cows come home 2'
  },
  {
    id: 1234569,
    text: 'When the cows come home 3'
  },
  {
    id: 1234560,
    text: 'When the cows come home 4'
  },
  {
    id: 1234561,
    text: 'When the cows come home 5'
  }
]

const resolvers = {
	RootQuery: {
		posts(root, args, context) {
			return posts
		}
	}
}

export default resolvers