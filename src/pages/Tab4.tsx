import {IonContent, IonPage} from "@ionic/react";
import React, {ReactElement} from "react";
import ProfilHeader from "../components/molecules/ProfilHeader";
import {ChevronRight, Contact, LogOut, Settings, User} from "lucide-react";
import {useHistory} from "react-router-dom";


const Tab4: React.FC = () => {
    const history = useHistory();


    return (<IonPage>
        <IonContent fullscreen>
            <ProfilHeader title={"Ismail Marjuki"} description={"085211818885"}/>
            <div className="space-y-4 bg-white py-8 px-8 mx-4 rounded-xl ">

                <ItemMenu title={"Profil Lengkap"}
                          icon={<User className={"w-6 h-6"} strokeWidth={1}/>}
                          handleClick={() => history.replace("/profil")}
                />

                <ItemMenu title={"Kontak Admin"}
                          icon={<Contact className={"w-6 h-6"} strokeWidth={1}/>}
                          handleClick={() => history.replace("/kontak-admin")}
                />

                <ItemMenu title={"Versi 1.0.0"}
                          icon={<Settings className={"w-6 h-6"} strokeWidth={1}/>}
                />

                <ItemMenu title={"Keluar"}
                          icon={<LogOut className={"w-6 h-6"} strokeWidth={1}/>}
                          handleClick={() => console.log('hello world')}
                />


            </div>
        </IonContent>
    </IonPage>);
};

const ItemMenu = ({title, icon, handleClick}: { title: string, icon: ReactElement, handleClick?: () => void }) => {
    return <div className={"flex justify-between items-center border-b-2 border-[#f7fcf4] "} onClick={handleClick}>
        <div className={"pb-2 flex gap-8 items-center"}>
            <div className={"p-2 bg-[#f7fcf4] rounded-full"}>
                {icon}
            </div>
            {title}
        </div>
        <ChevronRight className={"w-6 h-6"} strokeWidth={1}/>
    </div>
}

export default Tab4;
