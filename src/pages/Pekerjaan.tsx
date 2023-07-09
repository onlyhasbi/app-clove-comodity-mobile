import React, {useEffect, useState} from 'react';
import {IonContent, IonPage} from '@ionic/react';
import TextHeader from "../components/molecules//TextHeader";
import {Link} from "react-router-dom";
import {Filter, Map} from "lucide-react";
import SkeletonList from "../../src/components/molecules/SkeletonList";

const Pekerjaan: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (<IonPage>
        <IonContent fullscreen>
            <TextHeader title={"Pekerjaan"}/>
            <div className={"px-4"}>
                <input
                    className={"w-full bg-white text-black" + " rounded-xl py-4 px-4 text-xs"}
                    placeholder={"Cari"}/>
            </div>
            <div className={" m-4 "}>
                {isLoading ? <SkeletonList loop={8}/> : <>
                    {items.map((item, index) => <Item key={index}/>)}
                </>}
            </div>

        </IonContent>
    </IonPage>);
};

const Item = () => {
    return <Link to={`/pekerjaan/1`}>
        <div className={"min-h-[50px] bg-white p-4 my-2 rounded-xl flex gap-3 items-center justify-between "}>

            <div>
                <h2 className={"font-semibold text-xs"}>Cengkeh Malino</h2>
                <p className={"text-xs mt-1"}>Makassar, Barana</p>
            </div>

            <div className={"text-xs"}>
                <Map className={"mx-auto w-4 h-4 text-accent mb-1"} strokeWidth={1}/>
                120 M<sup>2</sup>
            </div>
        </div>
    </Link>
}

export default Pekerjaan;
