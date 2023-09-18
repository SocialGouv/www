import { MDXRemote } from "next-mdx-remote/rsc"

import type { VFile } from "vfile"
import type { MDXComponents } from "mdx/types"

export default function MDXComponent({
  markdown,
}: {
  markdown: string | VFile
}) {
  const component = {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="fr-h1">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="fr-h2 text-blue-900">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h2 className="fr-h3">{children}</h2>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-6">{children}</p>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="mb-6">{children}</ul>
    ),
    a: ({ children, ...props }: { children: React.ReactNode }) => (
      <a {...props} target="_blank" rel="noopener">
        {children}
      </a>
    ),
  } as MDXComponents

  return <MDXRemote source={markdown} components={component} />
}
