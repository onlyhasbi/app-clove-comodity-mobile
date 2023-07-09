import React from "react";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import AuthLayout from "./AuthLayout";
import {Link} from "react-router-dom";
import {Eye, EyeOff} from "lucide-react";

const LoginPage: React.FC = () => {
    const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false)
    return (<AuthLayout>
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
                <div className={"relative"}>
                    <Input type={isShowPassword ? "text" : "password"} className="bg-white"/>
                    {isShowPassword ? <Eye className={"absolute right-2 top-2 text-secondary"}
                                           onClick={() => setIsShowPassword(prev => !prev)}/> :
                        <EyeOff className={"absolute right-2 top-2 text-secondary"}
                                onClick={() => setIsShowPassword(prev => !prev)}/>}
                </div>
            </div>

            <div className="mt-2">
                <p className="text-xs text-secondary text-center">
                    Belum punya akun ?{" "}
                    <Link to="/registrasi">
              <span className="py-3 text-accent font-semibold">
                Daftar disini
              </span>
                    </Link>
                </p>
            </div>
            <Link to={"/beranda"}>
                <Button
                    variant={"primary"}
                    size={"lg"}
                    className="block w-full mt-10 font-semibold text-lg rounded-full"
                >
                    Masuk
                </Button>
            </Link>
        </div>
    </AuthLayout>);
};

export default LoginPage;
