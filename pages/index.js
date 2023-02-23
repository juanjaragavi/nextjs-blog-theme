import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Image from 'next/image'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import ImagenJuan from '../assets/images/juan-jaramillo-cv-digital.png';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <header className="fixed top-0 w-[100%] min-h-[80%] h-[90%] z-30">
        <Header name={globalData.name} />
      </header>
      <section className="justify-center items-center absolute top-0 left-0 min-w-[99%] w-[100%] min-h-[99%] h-[100%]">
        <div className="min-h-[99%] h-[100%] w-[80%] mt-50 fixed top-0 left-[10%] pt-20">
          <h1 className="text-3xl lg:text-5xl text-center fixed top-[40%] left-[12%] lg:left-[10%]">
            {globalData.blogTitle}
          </h1>
          <div className='fixed bottom-0 right-0 lg:min-h-[85%] lg:h-[86%]'>
            <Image
              src={ImagenJuan}
              alt="Juan Jaramillo"
            />
          </div>
        </div>
      </section>
      <main className="lg:mt-[65%] lg:mb-[30%] mt-[90%] py-5 px-10 w-full rounded-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
        <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
