import React from "react";
import { Button } from "../../components/ui/Button";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import { usePost } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/ui/Form";
import FormInput from "../../components/molecules/FormInput";
import LoadingButton from "../../components/molecules/LoadingButton";

const schema = z.object({
  nomor_telpon: z
    .string()
    .min(10, "Nomor Telepon Minimal 10 Karakter")
    .nonempty(),
  sandi: z.string().nonempty(),
});

type IFormData = z.infer<typeof schema>;
const LoginPage: React.FC = () => {
  const form = useForm<IFormData>({
    resolver: zodResolver(schema),
  });

  const { mutate, isLoading } = usePost<IFormData>({
    endpoint: "authentication-buruh",
    mutationOptions: {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        if (error?.response?.status?.toString() === "400") {
          form.setError("nomor_telpon", {
            message: error.response.data.message,
          });
        }
      },
    },
  });

  const handleLogin = (data: IFormData) => {
    mutate({
      ...data,
    });
  };

  return (
    <AuthLayout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className={"space-y-6"}>
          <FormInput<IFormData>
            fieldName={"nomor_telpon"}
            label={"Nomor Telepon"}
            form={form}
            required={false}
            type={"text"}
          />

          <FormInput<IFormData>
            fieldName={"sandi"}
            label={"Password"}
            form={form}
            required={false}
            type={"password"}
          />

          <LinkRegistrasi />

          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button
              variant={"primary"}
              size={"lg"}
              type={"submit"}
              className="block w-full mt-10 font-semibold text-lg rounded-full"
            >
              Masuk
            </Button>
          )}
        </form>
      </Form>
    </AuthLayout>
  );
};

const LinkRegistrasi = () => (
  <div className="mt-2">
    <p className="text-xs text-secondary text-center">
      Belum punya akun ?{" "}
      <Link to="/registrasi">
        <span className="py-3 text-accent font-semibold">Daftar disini</span>
      </Link>
    </p>
  </div>
);

export default LoginPage;
