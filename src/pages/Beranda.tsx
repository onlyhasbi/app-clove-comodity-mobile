import {IonContent, IonPage} from "@ionic/react";
import React, {useEffect, useState} from "react";

import {PlusCircle} from "lucide-react";
import {Button} from '../components/ui/button'
import ProfilHeader from "../components/molecules/ProfilHeader";
import nojobSrc from '../../src/assets/images/nojob.svg'
import {Link} from "react-router-dom";
import SkeletonList from "../../src/components/molecules/SkeletonList";

const Beranda: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (<IonPage>
        <IonContent fullscreen>
            <ProfilHeader title={"Selamat Datang,"}
                          description={"Ismail Marjuki"}
                          additional={<div
                              className={"w-12 h-12 bg-white rounded-full flex items-center justify-center font-[600]"}>
                              <p>I.M.</p>
                          </div>}
            />
            {isLoading ? <SkeletonList loop={8} classname={"mx-4"}/> : <div
                className="flex flex-col justify-center text-center space-y-8 bg-white py-12 px-8 mx-4 rounded-xl ">
                <img src={nojobSrc} className={"w-full h-48"}/>
                <div>
                    <h1 className={"font-[400]"}>Belum Ada Pekerjaan </h1>
                    <h3 className={"text-[11px] text-secondary "}>Kamu belum mempunyai pekerjaan aktif sekarang</h3>
                </div>
                <Link to={"/pekerjaan"}>
                    <Button variant={"outline"} className={"max-w-md  font-[500] text-secondary mx-auto rounded-full"}>
                        <PlusCircle className={"w-4 h-4 mr-2 "} strokeWidth={1}/>
                        Daftar Pekerjaan Disini
                    </Button>
                </Link>
            </div>}
        </IonContent>
    </IonPage>);
};

export default Beranda;
