// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient,gql } from "graphql-request";
const graphAPI = process.env.NEXT_PUBLIC_GRAPH_API
const token = process.env.GRAPHCMS_TOKEN
export default async function handler(req, res) {
  const graphqlClient = new GraphQLClient(graphAPI, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try{
  const result = await graphqlClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });
  return res.status(201).send(result);
} catch(error){
  return res.status(500).json({
    error
  })
}
  
}
