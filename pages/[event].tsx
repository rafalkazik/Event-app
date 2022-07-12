import { gql, GraphQLClient } from 'graphql-request';
import Head from 'next/head';
// import MarkdownIt from 'markdown-it';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import EventHero from '../src/components/EventHero/EventHero';

export async function getServerSideProps(pageContext: any) {
  const url = process.env.ENDPOINT;

  /* @ts-ignore */

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageSlug = pageContext.query.event;

  const query = gql`
    query ($pageSlug: String!) {
      event(where: { slug: $pageSlug }) {
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

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);

  const event = data.event;

  console.log(pageContext.query);

  return {
    props: {
      event,
    },
  };
}

function EventPage(event: any) {
  const currentEvent = event.event;

  const imageUrl = currentEvent.thumbnail.url;

  const title = currentEvent.title;

  const artists = currentEvent.artists;

  const date = currentEvent.date;

  return (
    <>
      <Head>
        <title>{currentEvent.title}</title>
        <meta name='description' content={currentEvent.title} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />
      <EventHero image={imageUrl} title={title} artists={artists} date={date} />

      <div className='event-page'>{currentEvent.title}</div>
    </>
  );
}

export default EventPage;
