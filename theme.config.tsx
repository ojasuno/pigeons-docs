import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Unoffocial Don't Feed The Pigeons</span>,
  project: {
    link: 'https://github.com/ojasuno/pigeons-docs',
  },
  chat: {
    link: "https://discord.com/invite/josie",
  },
  docsRepositoryBase: 'https://github.com/ojasuno/pigeons-docs',
  footer: {
    text: "[Unofficial Don't Feed The Pigeons]",
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://pigeons.monster${asPath}`} />
      <meta property="og:title" content={frontMatter.title || "Pigeons"} />
      <meta property="og:description" content={frontMatter.description || "Unoffical Don't Feed The Pigeons"} />
    </>
  },
}

export default config
