import React from 'react';

const TextHeader = ({title,additional}: { title: string, additional?: React.ReactNode }) => {
    return (<div className={`w-full flex ${additional ? 'justify-between' : 'justify-center'} px-4 py-6  items-center text-center `}>
        <h1 className={" text-[#000] text-xl"}>{title}</h1>
        {additional}
    </div>)
}
export default TextHeader;
