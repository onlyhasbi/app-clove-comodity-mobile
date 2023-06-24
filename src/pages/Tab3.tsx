import {IonContent, IonPage} from "@ionic/react";
import React from "react";

import {Newspaper, PlusCircle} from "lucide-react";
import {Button} from '../components/ui/button'
import ProfilHeader from "../components/molecules/ProfilHeader";

const Tab3: React.FC = () => {
    return (<IonPage>
        <IonContent fullscreen>
            <ProfilHeader title={"Ismail Marjuki"} description={"085211818885"}/>

        </IonContent>
    </IonPage>);
};

export default Tab3;
