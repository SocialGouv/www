import Breadcrumbs from "@/components/breadcrumbs"

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  )
}
