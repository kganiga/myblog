import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 8

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              hi, I’m <span className="text-slate-600">Khalil Ganiga</span>
            </h1>

            <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
              {`Welcome to my blog - Thoughts from a wandering mind. I have created this site to share my thoughts and experiences. 
              `}
              <br />
              {`Have a good read!`}
            </h2>
          </div>
          <div className="flex items-center justify-center mx-2 my-12 w-96">
            <BlogNewsletterForm title="Stay updated, receive the latest post straight to your mailbox" />
          </div>
        </div>
        <h2 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest Stories
        </h2>
        <hr className="border-gray-200 dark:border-white-700" />
        <div className="flex min-h-screen items-center justify-center">
          <div className="mx-auto flex grid-cols-9 flex-col p-2 md:grid">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
              const { slug, date, title, summary, tags } = frontMatter

              return index % 2 === 0 ? (
                <>
                  <div className="flex flex-row-reverse md:contents">
                    <div className="col-start-1 col-end-5 my-4 ml-auto w-full shadow-lg shadow-blue-500/50 border border-gray-300 p-4">
                      <dd className="flex space-x-1 pb-5 text-xs text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                      <h3 className="mb-1 text-xl font-semibold text-gray-900">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                          key={index}
                        >
                          {title}
                        </Link>
                      </h3>

                      <p className="text-gray-600">{summary}</p>
                      <div className="flex flex-wrap pt-5">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>

                    <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                      <div className="flex h-full w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-full bg-gray-300 " />
                      </div>
                      <div className="shadowborder-slate-500 absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-2 border-l-8 border-slate-600 bg-gray-100" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {' '}
                  <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                      <div className="flex h-full w-6 items-center justify-center ">
                        <div className="pointer-events-none h-full w-0.5 bg-gray-300" />
                      </div>
                      <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-2 border-r-8 border-slate-600 border-slate-600 bg-gray-100 shadow" />
                    </div>
                    <div className="col-start-6 col-end-10 my-4 mr-auto w-full shadow-lg shadow-blue-500/50 border border-gray-300 p-4">
                      <dd className="flex space-x-1 pb-5 text-xs text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                      <h3 className="mb-1 text-xl font-semibold text-gray-900">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                          key={index}
                        >
                          {title}
                        </Link>
                      </h3>
                      <p className="text-gray-600">{summary}</p>
                      <div className="flex flex-wrap pt-5">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        <hr className="border-gray-200 dark:border-white-700" />
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6 pt-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
