import type { NextPage } from 'next';
import Head from 'next/head';
import { gql, GraphQLClient } from 'graphql-request';
import { Key, useEffect } from 'react';

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      events {
        id
        title
        slug
        artists
        description
        price
        date
        thumbnail {
          url
        }
        categories {
          categoryName
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const events = data.events;

  return {
    props: { events },
  };
};

const Home: NextPage = (events) => {
  useEffect(() => {
    console.log(events);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>
        {events.events.map(
          (item: { thumbnail: string; id: Key; title: string }) => (
            <>
              <p key={item.id}>{item.title}</p>
              <img src={item.thumbnail.url} alt='event image' />
            </>
          )
        )}
      </h1>
    </div>
  );
};

export default Home;
