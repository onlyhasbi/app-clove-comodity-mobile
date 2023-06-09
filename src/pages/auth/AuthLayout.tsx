/* eslint-disable react/react-in-jsx-scope */
import { IonContent, IonPage } from "@ionic/react";
import { ReactNode } from "react";
import logoUrl from "../../assets/images/AppClove-04.svg";

type props =  {
    children: ReactNode
}
const AuthLayout = ({children} : props) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container space-y-12">
          <img className="w-56 mx-auto" src={logoUrl}></img>
          {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AuthLayout;
