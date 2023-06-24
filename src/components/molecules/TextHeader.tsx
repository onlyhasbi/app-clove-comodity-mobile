import React from 'react';

const TextHeader = ({title}: { title: string }) => {
    return (<div className={"w-full  py-6  items-center text-center"}>
        <h1 className={"font-semibold text-black text-lg"}>{title}</h1>
    </div>)
}
export default TextHeader;
