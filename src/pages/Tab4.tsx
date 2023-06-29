import {IonContent, IonPage} from "@ionic/react";
import React from "react";
import ProfilHeader from "../components/molecules/ProfilHeader";
import {Contact, LogOut, Settings, UserCheck, UserCircle} from "lucide-react";

const Tab4: React.FC = () => {
    return (<IonPage>
        <IonContent fullscreen>
            <ProfilHeader title={"Ismail Marjuki"} description={"085211818885"}/>
            <div className="space-y-8 bg-white py-4 px-4 mx-4 rounded-xl border-t-2 border-accent">
                <div className={"border-b-[1px] border-accent pb-2 flex gap-8 items-center"}>
                    <UserCircle className={"w-6 h-6"} strokeWidth={1} />
                    Profil Lengkap
                </div>
                <div className={"border-b-[1px] border-accent pb-2 flex gap-8 items-center"}>
                    <Contact className={"w-6 h-6"} strokeWidth={1} />
                    Kontak Admin
                </div>
                <div className={"border-b-[1px] border-accent pb-2 flex gap-8 items-center"}>
                    <Settings className={"w-6 h-6"} strokeWidth={1} />
                    Versi 1.0.0
                </div>
                <div className={"border-b-[1px] border-accent pb-2 flex gap-8 items-center"}>
                    <LogOut className={"w-6 h-6"} strokeWidth={1} />
                    Keluar
                </div>
            </div>
        </IonContent>
    </IonPage>);
};

export default Tab4;
