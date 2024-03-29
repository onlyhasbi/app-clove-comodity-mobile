import {IonContent, IonPage} from "@ionic/react";
import React, {useEffect, useState} from "react";
import TextHeader from "../components/molecules/TextHeader";
import SkeletonList from "../../src/components/molecules/SkeletonList";

const Penghasilan: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (<IonPage>
        <IonContent fullscreen>
            <TextHeader title={"Penghasilan"}/>
            {isLoading ?  <SkeletonList loop={8} classname={"mx-4"}/> : <>
                <div className={"mx-4 px-4 py-3 bg-green-50 rounded-xl flex justify-between items-center "}>
                    <div className={"space-y-1"}>
                        <h3 className={"font-semibold text-sm"}>Kebun Malino</h3>
                    </div>
                    <div className={"space-y-1"}>
                        <p className={"text-xs"}>Rp.150.000</p>
                    </div>
                </div>
                {[1, 1, 1, 1, 1].map((item, index) => <div
                    key={index}
                    className={"mx-4 my-2 px-4 py-3 border-b-2 border-green-100 flex justify-between items-center "}>
                    <div className={"space-y-2"}>
                        <h3 className={"font-semibold text-xs"}>Petik Cengkeh</h3>
                        <div className={"flex gap-1 items-center"}>
                            <p className={"text-xs bg-red-200 text-black rounded-full px-2 py-1"}>Belum Dibayar</p>
                            <p className={"text-xs bg-orange-100 rounded-full px-2 py-1"}>10 Kg</p>
                            <p className={"text-xs bg-primary rounded-full px-2 py-1"}>Rp.300.000</p>
                        </div>


                    </div>
                    <div className={"flex flex-col self-start"}>
                        <p className={"text-xs "}>21/03/2023</p>
                    </div>

                </div>)}
            </>}
        </IonContent>
    </IonPage>);
};

export default Penghasilan;
