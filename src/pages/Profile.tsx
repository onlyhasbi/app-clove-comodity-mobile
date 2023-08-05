import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import {ArrowLeft} from "lucide-react";
import TextHeader from "../../src/components/molecules/TextHeader";
import {useHistory} from "react-router-dom";
import {Input} from "../components/ui/Input";
export default function Profile():JSX.Element{
    const history = useHistory();
    return <IonPage>
        <IonContent fullscreen>
            <div className={"w-full flex items-center mx-auto px-4"}>
                <ArrowLeft className={"w-6 h-6"} strokeWidth={1} onClick={() => history.replace('/pengaturan') } />
                <TextHeader title={"Profil"}/>
            </div>

            <div className="space-y-4 bg-white p-4 mx-4 rounded-xl ">
                <div className={"text-xs space-y-2"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <Input />
                </div>

                <div className={"text-xs space-y-2"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <Input />
                </div>

                <div className={"text-xs space-y-2"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <Input />
                </div>

                <div className={"text-xs space-y-2"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <Input />
                </div>

                <div className={"text-xs space-y-2"}>
                    <p className={"font-semibold"}>Nama Pekerjaan</p>
                    <Input />
                </div>

                <button className={"w-full bg-[#f7fcf4] rounded-full py-2 px-3"}>Update</button>
            </div>

        </IonContent>
    </IonPage>
}