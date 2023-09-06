import { remark } from "remark"

import MDXComponent from "@/components/mdx-component"

export default async function RemoteContent({
  content_url_encoded_markdown,
}: {
  content_url_encoded_markdown: string
}) {
  const markdown = await remark().process(
    decodeURIComponent(content_url_encoded_markdown)
  )

  return (
    <div className="fr-py-6w">
      <div className="fr-container">
        <MDXComponent markdown={markdown} />
      </div>
    </div>
  )
}
