# GraphQL API on Apollo Server

## SET UP 
In Command prompt first make folder.

`mkdir 'name'`

To create a package.json file, on the command line, in the root directory of your Node.js module input comand

`npm init -y`

When you have created Node.js module in the root directory, next step is instaling GraphQL, Apollo server and nodemon,  which will just restart our server anytime we make changes to the schema.

`npm install graphql apollo-server nodemon`

And last command 

 `code .` 

to open this up in our code editor. 

To run or server on localhost, you need to create a file index.js whit following code.

```
const {ApolloServer, gql} =  require('apollo-server');

const typeDefs = gql`
    type User {
        username: String!
        email: String!
        searchedForCounter: Int
		followers: Int
		followed: Int
    }

`;

const server = new ApolloServer({
    typeDefs
});

server.listen().then(({url}) => console.log(`Server running at ${url}`));

function newFunction() {
    return require("apollo-server");
}

```
For starting on localhost, in  terminal you need to input command 

`npm start`

and your server is runing on localhost:4000.

## Query

When server and schema is done, on localhost:4000 you can run some query's related to schema. Some exepmls you can find in Tasks.txt in this project.

## Technologies
* [Node.js](https://nodejs.org/en/)
* [GraphQL](https://graphql.org/)
* [Apollo Server](https://www.apollographql.com/docs/) 
* [Nodemon](https://nodemon.io/)