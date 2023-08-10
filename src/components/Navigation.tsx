"use client"

import { useMemo } from "react"
import { navigationItems } from "@/utils/navigation-items"
import { usePathname, useSearchParams } from "next/navigation"
import {
  MainNavigation,
  type MainNavigationProps,
} from "@codegouvfr/react-dsfr/MainNavigation"

export default function Navigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams().toString()

  const activeNavigationItems = useMemo(() => {
    const currentUrl = `${pathname}${searchParams ? `?${searchParams}` : ""}`
    const activeNavigationItems = navigationItems.map(
      (item: MainNavigationProps.Item) => {
        if (item.menuLinks?.length) {
          let isActive = false
          const activeMenuLinks = item.menuLinks.map((menuLink) => {
            const menuLinkIsActive =
              currentUrl === (menuLink.linkProps.href as string)
            if (menuLinkIsActive) isActive = true
            return { ...menuLink, isActive: menuLinkIsActive }
          })

          return { ...item, isActive, menuLinks: activeMenuLinks }
        }
        if (!item.linkProps) return item
        return {
          ...item,
          isActive: pathname.startsWith(item.linkProps.href as string),
        }
      }
    )

    return activeNavigationItems
  }, [pathname, searchParams])

  // Warning: Prop `id` did not match. Server: "main-navigation-:Rt6cq:-button-0" Client: "main-navigation-:R3kpj9:-button-0"
  // https://github.com/vercel/next.js/issues/53110

  return <MainNavigation items={activeNavigationItems} />
}
