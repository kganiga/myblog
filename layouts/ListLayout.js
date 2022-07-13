import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Script from 'next/script'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="my-4 flex-grow self-stretch md:flex">
          <div className="site-main mt-4 flex-none rounded-lg bg-gray p-4 sm:w-full md:mr-4 md:mt-0 md:w-2/3">
            <ul>
              {!filteredBlogPosts.length && 'No posts found.'}
              {displayPosts.map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter
                return (
                  <>
                    <li key={slug} className="py-8">
                      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        {/* <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl> */}
                        <div className="space-y-3 xl:col-span-3">
                          <div>
                            <dd className="flex space-x-1 pb-5 text-xs text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date)}</time>
                            </dd>
                            <h3 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h3>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                          <div className="flex flex-wrap py-4">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                      </article>
                    </li>
                    <hr className="border-gray-200 dark:border-white-700 pt-5" />
                  </>
                )
              })}
            </ul>
          </div>
          <div className="site-sidebar bg-white-100 mt-4 rounded-lg p-4 sm:w-full md:mt-0 md:w-1/3 ">
            {/* <h3 className="pt-10 text-lg">Site-Sidebar section</h3>
            <div className="site-box site-accordion my-2 overflow-hidden rounded-lg bg-white p-4 shadow-sm">
              {/*            TODO: add title/icon space to box. for use activating accordion.  */}
            {/* TODO: use HeroIcons for this title/icon box header area as well as Hero Patterns to give it a bit of a nice flare of bg. Try to add more padding, and put patterns just in corner of header? Do it subtly.   TODO: figure out how to use Hero Icons via CDN.          */}
            {/* <div className="site-box-header -m-4 mb-4 bg-indigo-500 p-4 text-lg ">
                <h4 className="text-xl">Site-box-header -RESUME w/ BG TEXTURE HERE.</h4>
              </div>
              Site-box.site-accordion. RESUME w/ textures etc here! asdfasf saf sdf sf
              <div className="-mx-4 -mb-4 text-center">
                <i className="his his-chevron-down rounded-full bg-indigo-400 text-3xl text-white  hover:bg-indigo-500" />
                {/*               <i class="his his-chevron-down text-3xl text-indigo-700 bg-white rounded-full "></i> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="site-box site-accordion my-2 rounded-lg bg-white p-4 shadow-sm"> */}
            {/* Site-box.site-accordion. */}
            {/* </div> */}
            <>
              {/* <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9693146779273135"
                data-ad-slot="4287335348"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins> */}
              {/* <Script strategy="lazyOnload" id="gadsense-script">
                (adsbygoogle = window.adsbygoogle || []).push({});
              </Script>{' '} */}
            </>
          </div>
        </div>
      </div>

      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
