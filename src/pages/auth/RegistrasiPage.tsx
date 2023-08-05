import React from "react";
import { Button } from "../../components/ui/Button";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePost } from "../../hooks/useApi";
import { Form } from "../../components/ui/Form";
import FormInput from "../../components/molecules/FormInput";
import LoadingButton from "../../components/molecules/LoadingButton";
import FormSelect from "../../components/molecules/FormSelect";
import FormTextarea from "../../components/molecules/FormTextarea";

const schema = z.object({
  nomor_telpon: z
    .string()
    .min(10, "Nomor Telepon Minimal 10 Karakter")
    .nonempty(),
  nama: z.string().nonempty(),
  tanggal_lahir: z.string(),
  jenis_kelamin: z.string(),
  alamat: z.string(),
  sandi: z.string().nonempty(),
});

type IFormData = z.infer<typeof schema>;
const RegistrasiPage: React.FC = () => {
  const form = useForm<IFormData>({
    resolver: zodResolver(schema),
  });

  const { mutate, isLoading } = usePost<IFormData>({
    endpoint: "user-buruh",
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

  return (
    <AuthLayout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data: IFormData) => {
          mutate({
            ...data,
          });
        })} className={"space-y-6"}>
          <FormInput<IFormData>
            fieldName={"nama"}
            label={"Nama Lengkap"}
            form={form}
            required={false}
            type={"text"}
          />
          <FormInput<IFormData>
            fieldName={"nomor_telpon"}
            label={"Nomor Telepon"}
            form={form}
            required={false}
            type={"text"}
          />

          <FormInput<IFormData>
            fieldName={"tanggal_lahir"}
            label={"Tanggal Lahir"}
            form={form}
            required={false}
            type={"date"}
          />

          <FormSelect<IFormData>
            fieldName={"jenis_kelamin"}
            label={"Jenis Kelamin"}
            form={form}
            required={false}
            items={[{ label: "Laki-Laki", value: "Laki-Laki" },
              { label: "Perempuan", value: "perempuan" }]}
           placeholder={"Pilih Jenis Kelamin"}
          />

          <FormTextarea<IFormData>
            fieldName={"alamat"}
            label={"Alamat Lengkap"}
            form={form}
            required={false}
          />

          <FormInput<IFormData>
            fieldName={"sandi"}
            label={"Password"}
            form={form}
            required={false}
            type={"password"}
          />

          <LinkLogin />

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

const LinkLogin = () => (
  <div className="mt-2">
    <p className="text-xs text-secondary text-center">
      Kembali ke halaman login{" "}
      <Link to="/login">
        <span className="py-3 text-accent font-semibold">Disini</span>
      </Link>
    </p>
  </div>
);

export default RegistrasiPage;
