const express = require("express")
const mongoose = require("mongoose")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")


// Mongodb Coonection
const MongoUrl = 'mongodb://127.0.0.1:27017/graphql-curd';

mongoose.connect(MongoUrl).then(() => console.log("Connected")).catch((err) => console.log("error"))


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModal = mongoose.model("userNew", UserSchema)


const Schema = buildSchema(`

    type User{
    id:ID!
    name:String!
    email:String!
    age:Int!
    }

    input UserInput{
    name:String!
    email:String!
    age:Int!
    }

    type Query{
    getUser(id:ID!) :User
    getUsers : [User]
    }

    type Mutation{

    CreateUser(input:UserInput):User

    updateUser(id:ID!,input:UserInput) : User

    deleteUser(id:ID!) : String
    }
`)

const root = {
    getUser: async ({ id }) => {
      return await UserModal.findById(id);
    },
    getUsers: async () => {
      return await UserModal.find();
    },
    CreateUser: async ({ input }) => {
      const user = new UserModal(input);
      console.log(user);

      return await user.save();
      
    },

    updateUser: async ({ id, input }) => {
      return await UserModal.findByIdAndUpdate(id, input, { new: true });
    },
    deleteUser: async ({ id }) => {
      await UserModal.findByIdAndDelete(id);
      return "User deleted successfully";
    },
  };


  const app = express()

  app.use(
    "/graphql",

    graphqlHTTP({

      schema: Schema,

      rootValue: root,
      
      graphiql: true, // Enables GraphiQL interface


    })
  );
  
















app.listen(5000, () => console.log("server runing port 5000"))