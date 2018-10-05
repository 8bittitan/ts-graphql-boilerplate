export default `
    type Error {
        status: Int
        message: String
    }

    type User {
        _id: ID
        username: String
        email: String
    }

    type UserResponse {
        ok: Boolean
        error: Error
        user: User
    }

    type Query {
        user(id: ID!): UserResponse
        users: [User]
    }
`
