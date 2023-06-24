import {IonContent, IonPage} from "@ionic/react";
import React from "react";

import {Newspaper, PlusCircle} from "lucide-react";
import {Button} from '../components/ui/button'
import ProfilHeader from "../components/molecules/ProfilHeader";
import nojobSrc from '../../src/assets/images/nojob.svg'
const Tab1: React.FC = () => {
    return (<IonPage>
        <IonContent fullscreen>
            <ProfilHeader title={"Selamat Datang,"} description={"Ismail Marjuki"}/>
            <div
                className="flex flex-col justify-center text-center space-y-8 bg-white py-12 px-8 mx-4 rounded-xl">
                {/*<div className={"rounded-full self-center flex  border-gray-200 bg-accent text-white  p-4"}>*/}
                    <img src={nojobSrc} className={"w-full h-48"} />
                {/*</div>*/}
                <div>
                    <h1 className={"font-[400]"}>Belum Ada Pekerjaan </h1>
                    <h3 className={"text-[11px] text-secondary "}>Kamu belum mempunyai pekerjaan aktif sekarang</h3>
                </div>

                <Button variant={"outline"} className={"max-w-md  font-[500] text-secondary"}>
                    <PlusCircle className={"w-4 h-4 mr-2 "} strokeWidth={2}/>
                    Daftar Pekerjaan Disini
                </Button>
            </div>
        </IonContent>
    </IonPage>);
};

export default Tab1;
