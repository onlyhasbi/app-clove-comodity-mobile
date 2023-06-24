import React from 'react';
import {IonContent, IonPage} from '@ionic/react';
import TextHeader from "../components/molecules//TextHeader";

const Tab2: React.FC = () => {
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (<IonPage>

        <IonContent fullscreen>
            <TextHeader title={"Pekerjaan"}/>
            <div className={"px-4"}>
                <input
                    className={"w-full bg-white text-black" + " rounded-full py-4 px-4 text-xs"}
                    placeholder={"Cari"}/>
            </div>
            <div className={"space-y-2.5 m-4"}>
                {items.map((item, index) => <Item key={index}  /> )}
            </div>

        </IonContent>
    </IonPage>);
};

const Item = () => {
    return <div className={"min-h-[50px] bg-white p-4 rounded-xl flex gap-3 items-center justify-between"}>
        <div>
            <h2 className={"font-semibold text-sm"}>Cengkeh Malino</h2>
            <p className={"text-xs mt-1"}>Makassar, Barana</p>
        </div>
        <div className={"text-xs"}>
            120 M<sup>2</sup>
        </div>
    </div>
}

export default Tab2;
