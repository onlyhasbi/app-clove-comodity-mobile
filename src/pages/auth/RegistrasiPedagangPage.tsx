import React from "react";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import AuthLayout from "./AuthLayout";
import {Link} from "react-router-dom";

const RegistrasiPedagangPage: React.FC = () => {
    return (
        <AuthLayout>
            <div>
                <div className="flex flex-col text-left">
                    <label className="text-lg text-black mb-1 font-semibold">
                        Username
                    </label>
                    <Input type="text" className="bg-white"/>
                </div>

                <div className="flex flex-col text-left mt-8">
                    <label className="text-lg text-black mb-1 font-semibold">
                        Password
                    </label>
                    <Input type="text" className="bg-white"/>
                </div>

                <div className="mt-2">
                    <p className="text-[10px] text-primary text-center">
                        Kembali ke halaman login{" "}
                        <Link to="/login">
                            <span className="py-3 text-accent font-semibold">Disini</span>
                        </Link>
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
        </AuthLayout>
    );
};

export default RegistrasiPedagangPage;
