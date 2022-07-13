import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/comments/Utterances')
  },
  { ssr: false }
)
const GiscusComponent = dynamic(
  () => {
    return import('@/components/comments/Giscus')
  },
  { ssr: false }
)
const DisqusComponent = dynamic(
  () => {
    return import('@/components/comments/Disqus')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }) => {
  const comment = siteMetadata?.comment
  if (!comment || Object.keys(comment).length === 0) return <></>
  return (
    <div id="comment">
      {/* {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )} */}
      {
        <div className="post-comments">
          <p className="py-8">
            Comments are closed but If you want to respond, please send me a message over{' '}
            <a
              href={siteMetadata.messanger}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-400"
            >
              facebook
            </a>{' '}
            or{' '}
            <a
              href={siteMetadata.twitter}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-400"
            >
              tweet
            </a>{' '}
            or{' '}
            <a href="mailto:admin@khalilganiga.com" className="underline decoration-slate-400">
              send email
            </a>
            .
          </p>
        </div>
      }
    </div>
  )
}

export default Comments
