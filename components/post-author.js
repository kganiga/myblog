import React, { useState } from 'react'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
const PostAuthor = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl border-t pt-8">
        <div className="space-y-4 sm:grid sm:grid-cols-6 sm:items-start sm:gap-6 sm:space-y-0">
          <Image
            className="float-right max-h-16 origin-bottom -rotate-12 rounded-3xl transition-transform hover:rotate-0 sm:float-none sm:my-6 sm:max-h-28"
            src="/static/img/avatar.jpg"
            alt="Khalil"
            width={300}
            height={300}
          />
          <div className="sm:col-span-5">
            <div className="space-y-6">
              <div className="space-y-1 text-lg leading-6">
                <h3 className="text-3xl font-extrabold tracking-tight">{siteMetadata.author}</h3>
              </div>
              <div className="prose prose-sm prose-slate pb-4">
                <p>{siteMetadata.authorDescription}</p>
                <p>Keep watching this space for more updates.</p>
              </div>
              <ul className="flex space-x-5">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer "
                    href="https://twitter.com/Im_khalil"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="h-5 w-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer "
                    href="https://linkedin.com/in/khalilg"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="h-5 w-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostAuthor
