import React from 'react';

const ProfilHeader = ({title, description,additional}:{title:string, description:string,additional?:React.JSX.Element}) => {
    return (<div className={"w-full px-4 py-8 space-y-2  flex justify-between items-center"}>
        <div>
            <h1 className={"font-[600] text-lg"}>{title}</h1>
            <h3 className={"text-xs"}>{description}</h3>
        </div>
        {additional}
    </div>)
}
export default ProfilHeader;
