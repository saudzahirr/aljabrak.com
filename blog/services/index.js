import { request, gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_API;
export const getPosts = async () => {
  const graphqlClient = new GraphQLClient(graphqlAPI);
  const query = gql`
    query MyQuery {
      postsConnection(last: 100, orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            excerpt
            slug
            title
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const results = await graphqlClient.request(query);
  return results.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const graphqlClient = new GraphQLClient(graphqlAPI);
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: {slug: $slug}){
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            excerpt
            content {
              raw
            }
            slug
            title
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
  `;
  const results = await graphqlClient.request(query,{ slug });
  return results.post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_ASC, last: 3) {
    featuredImage {
      url
    }
    slug
    title
    createdAt
  }
    }
  `;
  const result = await request(graphqlAPI,query);

  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getCategories = async ()=>{
  const query = gql`
    query MyQuery {
      categories {
        slug
        name
        createdAt
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const submitComment = async(obj)=>{
  const response = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return response.json();
}

export const getPostComments = async (slug) => {
  const query = gql`
    query getPostComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        comment
        createdAt
        name
      }
    }
  `;
  const result = await request(graphqlAPI,query,{slug})
  return result.comments
}

export const getCategoricalPosts= async (slug) =>{
  const query = gql`
    query getCategorical($slug: String!) {
      category(where: { slug: $slug }) {
        posts{
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            excerpt
            slug
            title
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
      }
    }
  `;
   const result = await request(graphqlAPI,query,{slug})
   return result.category.posts
}