import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DisplayFilterInput() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Display Cards Count" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Numbers</SelectLabel>
          <SelectItem value="5">Show 5 Cards</SelectItem>
          <SelectItem value="10">Show 10 Cards</SelectItem>
          <SelectItem value="15">Show 15 Cards</SelectItem>
          <SelectItem value="All">Show All Cards</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
