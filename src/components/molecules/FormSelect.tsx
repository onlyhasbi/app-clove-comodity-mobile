import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";

import { ScrollArea } from "../ui/ScrollArea";
import {Selectx, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/Selectx";

export type IFormSelect<T> = {
  fieldName: keyof T;
  placeholder: string;
  label: string;
  form: any;
  required: boolean;
  items: IFormSelectItem[];
};
export type IFormSelectItem = {
  label: string;
  value: string;
};
export default function FormSelect<T>({
  form,
  fieldName,
  label,
  required,
  items,
  placeholder,
}: IFormSelect<T>) {
  return (
    <FormField
      control={form.control}
      name={fieldName.toString()}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={"text-[12px] font-semibold"}>
            {label}{" "}
            {required && (
              <small className={"ml-2 text-[10px] font-semibold  text-red-600"}>
                (wajib diisi)
              </small>
            )}
          </FormLabel>
          <Selectx onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  placeholder={placeholder}
                  className={"text-[12px] hover:text-white hover:bg-primary"}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <ScrollArea className={"min-h-[50px]"}>
                {items.map((item, index) => (
                  <SelectItem
                    value={item.value}
                    className={"text-[12px] hover:text-white hover:bg-primary"}
                    key={index}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Selectx>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
