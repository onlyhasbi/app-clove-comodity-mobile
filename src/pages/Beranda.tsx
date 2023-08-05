import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import { PlusCircle } from "lucide-react";
import ProfilHeader from "../components/molecules/ProfilHeader";
import nojobSrc from "../../src/assets/images/nojob.svg";
import { Link } from "react-router-dom";
import SkeletonList from "../../src/components/molecules/SkeletonList";
import { useGet } from "../hooks/useApi";
import IResponse from "../interfaces/IResponse";
import { Button } from "../components/ui/Button";

const Beranda: React.FC = () => {
  const { data, isLoading } = useGet<IResponse<any>>({
    endpoint: "",
  });
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProfilHeader
          title={"Selamat Datang,"}
          description={"Ismail Marjuki"}
          additional={
            <div
              className={
                "w-12 h-12 bg-white rounded-full flex items-center justify-center font-[600]"
              }
            >
              <p>I.M.</p>
            </div>
          }
        />
        {!isLoading ? <SkeletonList loop={8} classname={"mx-4"} /> : <NoJob />}
      </IonContent>
    </IonPage>
  );
};

const NoJob = () => (
  <div className="flex flex-col justify-center text-center space-y-8 bg-white py-12 px-8 mx-4 rounded-tr-[60px] rounded-bl-[60px] border-2 border-primary">
    <img src={nojobSrc} className={"w-full h-48"} alt={"No Job"} />
    <div>
      <h1 className={"font-[400]"}>Belum Ada Pekerjaan </h1>
      <h3 className={"text-[11px] text-secondary "}>
        Kamu belum mempunyai pekerjaan aktif sekarang
      </h3>
    </div>
    <Link to={"/pekerjaan"}>
      <Button
        variant={"outline"}
        className={
          "max-w-md  font-[500] text-secondary hover:text-white mx-auto rounded-full"
        }
      >
        <PlusCircle className={"w-4 h-4 mr-2 "} strokeWidth={1} />
        Daftar Pekerjaan Disini
      </Button>
    </Link>
  </div>
);

export default Beranda;
