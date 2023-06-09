import React from "react";
import { Button } from "../../components/ui/button";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
const PilihRegistrasiPage: React.FC = () => {
  return (
    <AuthLayout>
      <div>
        <Link to="/registrasi-pedagang">
          <Button
            variant={"primary"}
            size={"lg"}
            className="block w-full mt-10  text-lg rounded-full"
          >
            Registrasi Pedagang
          </Button>
        </Link>

        <Link to="/registrasi-petani">
          <Button
            variant={"outline"}
            size={"lg"}
            className="block w-full mt-10  text-lg rounded-full"
          >
            Registrasi Petani
          </Button>
        </Link>
        <div className="mt-4">
          <p className="text-[10px] text-primary text-center ">
            Kembali ke halaman login{" "}
            <Link to="/login">
              <span className="py-3 text-accent font-semibold">Disini</span>
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default PilihRegistrasiPage;
