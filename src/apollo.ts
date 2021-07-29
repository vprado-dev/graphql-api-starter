import { ApolloServer } from "apollo-server-express";
import { DocumentNode } from "graphql";
import { readdirSync } from "fs";
import { join } from "path";
import { IResolvers } from "@graphql-tools/utils";

const typeDefs: DocumentNode[] = [];

for (const file of readdirSync(join(__dirname, "typeDefs"))) {
  typeDefs.push(require(join(__dirname, "typeDefs", file)).typeDefs);
}

const resolvers: IResolvers[] = [];

for (const file of readdirSync(join(__dirname, "resolvers"))) {
  resolvers.push(require(join(__dirname, "resolvers", file)).resolvers);
}

export const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});
