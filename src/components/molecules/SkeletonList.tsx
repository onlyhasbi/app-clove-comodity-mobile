import {Skeleton} from "../ui/skeleton";
import React from "react";
import {cn} from "../../lib/utils";

export default function SkeletonList({loop, classname}: { loop: number, classname?: string }) {
    const items = new Array(loop).fill(null)
    return <div className={cn("space-y-4",classname)}>
        {items.map((item, index) => <Skeleton className={`w-full h-16`} key={index}/>)}

    </div>
}