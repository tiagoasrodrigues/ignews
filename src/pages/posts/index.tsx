import Head from 'next/head';

import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>
          Posts | Ignews
        </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>June 08, 2021</time>
            <strong>The Plan for React 18</strong>
            <p>The React team is excited to share a few updates:
              1. We’ve started work on the React 18 release, which will be our next major version.
              2. We’ve created a Working Group to prepare the community for gradual adoption of new features in React 18.
              3. We’ve published a React 18 Alpha so that library authors can try it and provide feedback.
              These updates are primarily aimed at maintainers of third-party libraries. If you’re learning, teaching, or using React to build user-facing applications, you can safely ignore this post. But you are welcome to follow the discussions in the React 18 Working Group if you’re curious!
            </p>
          </a>
          <a>
            <time>June 08, 2021</time>
            <strong>The Plan for React 18</strong>
            <p>The React team is excited to share a few updates:
              1. We’ve started work on the React 18 release, which will be our next major version.
              2. We’ve created a Working Group to prepare the community for gradual adoption of new features in React 18.
              3. We’ve published a React 18 Alpha so that library authors can try it and provide feedback.
              These updates are primarily aimed at maintainers of third-party libraries. If you’re learning, teaching, or using React to build user-facing applications, you can safely ignore this post. But you are welcome to follow the discussions in the React 18 Working Group if you’re curious!
            </p>
          </a>
          <a>
            <time>June 08, 2021</time>
            <strong>The Plan for React 18</strong>
            <p>The React team is excited to share a few updates:
              1. We’ve started work on the React 18 release, which will be our next major version.
              2. We’ve created a Working Group to prepare the community for gradual adoption of new features in React 18.
              3. We’ve published a React 18 Alpha so that library authors can try it and provide feedback.
              These updates are primarily aimed at maintainers of third-party libraries. If you’re learning, teaching, or using React to build user-facing applications, you can safely ignore this post. But you are welcome to follow the discussions in the React 18 Working Group if you’re curious!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {

    }
  }
}