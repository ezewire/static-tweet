import type { FC } from 'react'
import { useRouter } from 'next/router'
import { EmbeddedTweet, TweetSkeleton } from 'next-tweet'
import type { Tweet } from 'next-tweet/api'
import clsx from 'clsx'
import TweetMeta from './tweet-meta'
import { A } from './landing/core'
import s from './tweet-page.module.css'

const TweetPage: FC<{ tweet: Tweet; className: string }> = ({
  tweet,
  className,
}) => {
  const { isFallback } = useRouter()

  return (
    <div className={clsx(s.page, className)}>
      <TweetMeta />

      <main className={s.main}>
        {isFallback ? (
          <TweetSkeleton />
        ) : (
          <EmbeddedTweet tweet={tweet} priority />
        )}
      </main>

      <footer className={s.footer}>
        <p>
          🤯 This tweet was statically generated. <A href="/">See how</A>
        </p>
      </footer>
    </div>
  )
}

export default TweetPage
