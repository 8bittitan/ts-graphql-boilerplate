import testClient from '../../utils/testClient'

describe('User', () => {
  it('Will return an array of users', async () => {
    const { data } = await testClient.makeRequest({
      query: `query {
        users {
          _id
          username
          email
        }
      }
    `,
    })

    expect(data).toEqual({ users: [] })
  })
})
