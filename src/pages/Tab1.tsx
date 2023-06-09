import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import logoUrl from "../assets/images/AppClove-04.svg";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="bg-red-700">
        <div className="container space-y-4">
          <img className="w-60 mx-auto" src={logoUrl}></img>
          <div className="bg-secondary rounded-xl mx-auto w-5/6 px-6 py-12 space-y-6">
            <div className="flex flex-col text-left">
              <label className="text-lg mb-1">Username</label>
              <input className="border-[1px] border-accent rounded-md text-lg"></input>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col text-left">
                <label className="text-lg mb-1">Password</label>
                <input className="border-[1px] border-accent rounded-md text-lg"></input>
              </div>
              <p className="text-xs text-primary">
                Belum punya akun ?{" "}
                <span className="py-3 text-accent font-semibold">Daftar disini</span>
              </p>
            </div>

            <button className="bg-accent px-4 py-2 rounded-full text-secondary font-semibold block w-full">
              Masuk
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
