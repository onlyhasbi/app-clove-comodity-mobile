import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Textarea } from "../ui/Textarea";

type IFormTextarea<T> = {
  fieldName: keyof T;
  label: string;
  form: any;
  required: boolean;
};
export default function FormTextarea<T>({
  form,
  label,
  fieldName,
  required,
}: IFormTextarea<T>) {
  return (
    <FormField
      control={form.control}
      name={fieldName.toString()}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={"text-sm font-semibold"}>
            {label}
            {required && (
              <small className={"text-[10px] text-red-600 ml-2  font-semibold"}>
                (wajib diisi)
              </small>
            )}
          </FormLabel>
          <FormControl>
            <Textarea {...field} className={"min-h-[100px]"} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
