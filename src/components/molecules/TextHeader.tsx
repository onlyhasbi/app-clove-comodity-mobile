import React from 'react';

const TextHeader = ({title}: { title: string }) => {
    return (<div className={"w-full  py-6  items-center text-center"}>
        <h1 className={" text-[#000] text-xl"}>{title}</h1>
    </div>)
}
export default TextHeader;
