import MDXComponent from "@/components/mdx-component"
import getLocalContent from "./get-local-content"

export default function LocalContent({ id }: { id: string }) {
  const markdown = getLocalContent(id)

  return (
    <>
      {markdown ? (
        <div className="fr-py-6w">
          <div className="fr-container">
            <MDXComponent markdown={markdown} />
          </div>
        </div>
      ) : null}
    </>
  )
}
