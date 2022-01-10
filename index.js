const {ApolloServer, gql} =  require('apollo-server');

const typeDefs = gql`
    type User {
        username: String!
        email: String!
        searchedForCounter: Int
		followers: Int
		followed: Int
    }

    type Query {
        users(username: String): User
        getUsers(limit: Int): [User]
    }

    type Mutation {
        setUser: [User]
    }
    

`;

const resolvers = {
    Query: {
        users:() => data,
        getUsers:() => data 
    }
};

const data = require ('./data')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => console.log(`Server running at ${url}`));

function newFunction() {
    return require("apollo-server");
}
