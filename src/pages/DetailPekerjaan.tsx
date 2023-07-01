import React from 'react'
import {IonContent, IonPage} from "@ionic/react";
import TextHeader from "../../src/components/molecules/TextHeader";
import {ArrowLeft} from "lucide-react";
import {useHistory} from "react-router-dom";
export default function DetailPekerjaan(): JSX.Element {
    const history = useHistory();
    return <IonPage>
        <IonContent fullscreen>
            <div className={"w-full flex items-center mx-auto px-4"}>
                <ArrowLeft className={"w-6 h-6"} strokeWidth={1} onClick={() => history.replace('/pekerjaan') } />
                <TextHeader title={"Kebun Malino"}/>
            </div>

            <div className="space-y-6 bg-white p-4 mx-4 rounded-xl ">
                <div className={"text-xs space-y-1"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <p>Tukang Parkir</p>
                </div>
                <div className={"text-xs space-y-1"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <p>Tukang Parkir</p>
                </div>
                <div className={"text-xs space-y-1"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <p>Tukang Parkir</p>
                </div>
                <div className={"text-xs space-y-1"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <p>Tukang Parkir</p>
                </div>
                <div className={"text-xs space-y-1"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <p>Tukang Parkir</p>
                </div>
                <div className={"text-xs space-y-1"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <p>Tukang Parkir</p>
                </div>
                <button className={"w-full bg-[#f7fcf4] rounded-full py-2 px-3"}>Daftar</button>
            </div>

        </IonContent>
    </IonPage>
}