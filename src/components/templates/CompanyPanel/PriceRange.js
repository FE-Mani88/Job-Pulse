'use client'
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function PriceRange({ className, ...props }) {

    const [price, setPrice] = useState([50])

    const changeHandler = (value) => {
        setPrice(value)
        console.log(value[0])
    }

    return (
        <>
            <div>
                <span>Suggested Price: {price[0]}$</span>
            </div>
            <Slider
                defaultValue={[50]}
                min={10}
                max={100}
                step={1}
                className={cn("", className)}
                value={price}
                onValueChange={changeHandler}
                {...props}
            />

            <div className="flex items-center justify-between w-full mx-auto text-sm text-muted-foreground">
                <span>10</span>
                <span>100</span>
            </div>
        </>
    );
}