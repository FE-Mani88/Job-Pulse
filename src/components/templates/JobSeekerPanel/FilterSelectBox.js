import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export function FilterSelectBox() {
  return (
    <Select defaultValue='newest'>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort Favorites By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By:</SelectLabel>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
