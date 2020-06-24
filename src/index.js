require("dotenv").config({ path: "variables.env" });
const db = require("./db");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const { GraphQLServer } = require("graphql-yoga");

// yoga server

const createServer = () => {
	return new GraphQLServer({
		typeDefs: "src/schema.graphql",
		resolvers: { Mutation, Query },
		context: (req) => ({ ...req, db }),
	});
};

const server = createServer();

server.start((deets) =>
	console.log(
		`Server is now up and running at http://localhost:${deets.port}`
	)
);
