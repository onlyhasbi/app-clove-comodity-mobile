import {cn} from "../../lib/utils";
import {HTMLAttributes} from "react";
import React from 'react'
function Skeleton({
                      className,
                      ...props
                  }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-green-50", className)}
            {...props}
        />
    )
}

export { Skeleton }