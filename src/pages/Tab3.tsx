import {IonContent, IonPage} from "@ionic/react";
import React from "react";
import TextHeader from "../components/molecules/TextHeader";

const Tab3: React.FC = () => {
    return (<IonPage>
        <IonContent fullscreen>
            <TextHeader title={"Penghasilan"}/>
            <div className={"mx-4 px-4 py-3 bg-white rounded-xl flex justify-between items-center "}>
                <div className={"space-y-1"}>
                    <h3 className={"font-semibold"}>Kebun Malino</h3>
                </div>
                <div className={"space-y-1"}>
                    <p className={"text-xs"}>Rp.150.000</p>
                </div>
            </div>
            {[1, 1, 1, 1, 1].map((item,index) => <div
                key={index}
                className={"mx-4 my-2 px-4 py-3 bg-white rounded-xl flex justify-between items-center "}>
                <div className={"space-y-2"}>
                    <h3 className={"font-semibold"}>Petik Cengkeh</h3>
                    <div className={"flex gap-1 items-center"}>
                        <p className={"text-xs bg-red-200 text-black rounded-full px-2 py-1"}>Belum Dibayar</p>
                        <p className={"text-xs bg-green-100 rounded-full px-2 py-1"}>10 Kg</p>
                        <p className={"text-xs bg-primary rounded-full px-2 py-1"}>Rp.300.000</p>
                    </div>


                </div>
                <div className={"flex flex-col justify-between"}>
                    <p className={"text-xs "}>21/03/2023</p>
                </div>

            </div>)}
        </IonContent>
    </IonPage>);
};

export default Tab3;
