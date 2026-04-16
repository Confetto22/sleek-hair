"use client"
import * as React from "react"
import { Tabs as BaseTabs } from "@base-ui/react/tabs"
import { cn } from "@/lib/utils"

const Tabs = ({ className, ...props }: BaseTabs.Root.Props) => (
  <BaseTabs.Root className={cn("flex flex-col gap-4", className)} {...props} />
)

const TabsList = ({ className, ...props }: BaseTabs.List.Props) => (
  <BaseTabs.List
    className={cn(
      "w-full flex justify-start border-b border-[#e8d5c4] rounded-none p-0 overflow-x-auto",
      className
    )}
    {...props}
  />
)

const TabsTrigger = ({ className, ...props }: BaseTabs.Tab.Props) => (
  <BaseTabs.Tab
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-6 py-4 text-body-bold font-body-bold border-b-2 border-transparent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#8b7b6b] data-[selected]:border-[#d4a574] data-[selected]:text-[#3d2b1f] hover:text-[#3d2b1f] hover:bg-[#f5ede4]/20",
      className
    )}
    {...props}
  />
)

const TabsContent = ({ className, ...props }: BaseTabs.Panel.Props) => (
  <BaseTabs.Panel
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full",
      className
    )}
    {...props}
  />
)

export { Tabs, TabsList, TabsTrigger, TabsContent }
