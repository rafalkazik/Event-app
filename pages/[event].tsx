import { gql, GraphQLClient } from 'graphql-request';
import Head from 'next/head';
import NavBar from '../src/components/NavBar/NavBar';
import EventHero from '../src/components/EventHero/EventHero';
import EventContent from '../src/components/EventContent/EventContent';

export async function getServerSideProps(pageContext: any) {
  const url = process.env.NEXT_PUBLIC_ENDPOINT;

  /* @ts-ignore */

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN,
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

  const description = currentEvent.description;

  const date = currentEvent.date;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:image' content={imageUrl} />
        <meta property='og:description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <EventHero image={imageUrl} title={title} artists={artists} date={date} />
      <EventContent description={description} />
    </>
  );
}

export default EventPage;
