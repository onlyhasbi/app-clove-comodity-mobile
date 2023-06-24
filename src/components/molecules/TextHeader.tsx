import React from 'react';

const TextHeader = ({title, description}:{title:string, description:string}) => {
    return (<div className={"w-full px-4 py-8 space-y-2  flex justify-between items-center"}>
        <div>
            <h1 className={"font-[500] text-lg"}>{title}</h1>
            <h3 className={"text-xs"}>{description}</h3>
        </div>
        <div className={"w-12 h-12 bg-white rounded-full flex items-center justify-center font-[600]"}>
            <p>I.M.</p>
        </div>
    </div>)
}
export default TextHeader;
