import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import logoUrl from "../assets/images/AppClove-04.svg";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container space-y-12">
          <img className="w-56 mx-auto" src={logoUrl}></img>
          <div>
            <div className="flex flex-col text-left">
              <label className="text-lg text-black mb-1 font-semibold">Username</label>
              <Input type="text" className="bg-white" />
            </div>

            <div className="flex flex-col text-left mt-8">
              <label className="text-lg text-black mb-1 font-semibold">Password</label>
              <Input type="text" className="bg-white" />
            </div>

            <div className="mt-2">
              <p className="text-[10px] text-primary text-center">
                Belum punya akun ?{" "}
                <span className="py-3 text-accent font-semibold">
                  Daftar disini
                </span>
              </p>
            </div>

            <Button
              variant={"primary"}
              size={"lg"}
              className="block w-full mt-10 font-semibold text-lg rounded-full"
            >
              Masuk
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
