import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-transform: mr-3 rounded-full bg-slate-100 px-3 text-sm  font-medium uppercase capitalize text-black-800 text-primary-500">
        {text}
      </a>
    </Link>
  )
}

export default Tag
