import fs from "fs"
import path from "path"

export default function getLocalContent(id: string) {
  const filePath = path.join(process.cwd(), `src/content/startups/${id}.mdx`)

  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf8")
  }

  return null
}
