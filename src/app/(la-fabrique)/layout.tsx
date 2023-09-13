import Breadcrumbs from "@/components/breadcrumbs"

export default function FabriqueLayout({
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
