import { PageSEO } from '@/components/SEO'
import siteMetadata, { image } from '@/data/siteMetadata'
import Image from 'next/image'
export default function Gallery({ feed }) {
  const images = feed.data
  console.log(images)
  return (
    <>
      <PageSEO
        title={`Instagram Gallery | ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            My Recent Clicks
          </h1>
        </div>
        <div className=" divide-y divide-gray-200 dark:divide-gray-700"></div>
        <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {images &&
            images.map((image, index) => {
              let caption
              if (null != image.caption) {
                caption = image.caption.replace(/#\S+/g, '')
              }
              return !image.media_url.includes('video') ? (
                <div className="overflow-hidden rounded shadow-lg">
                  <a href={image.permalink} target="_blank" rel="noreferrer">
                    {' '}
                    <Image
                      className="w-full grayscale filter transition duration-200 hover:filter-none"
                      src={image.media_url}
                      alt={caption}
                      width={500}
                      height={500}
                    />
                  </a>

                  <div className="px-6 py-4">
                    <p className="text-base text-gray-700">{caption}</p>
                  </div>
                </div>
              ) : (
                <></>
              )
            })}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${process.env.INSTAGRAM_KEY}&count=200`
  const result = await fetch(url)
  const feed = await result.json()
  return {
    props: {
      feed,
    },
  }
}
