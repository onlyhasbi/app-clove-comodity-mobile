import React, {HTMLInputTypeAttribute} from "react"
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/Form";
import {Input} from "../ui/Input";


type IFormInput<T> = {
    fieldName: keyof T
    label: string
    form: any
    required: boolean
    type: HTMLInputTypeAttribute
}
export default function FormInput<T>({
                                         form,
                                         label,
                                         fieldName,
                                         required,
                                         type
                                     }: IFormInput<T>) {
    return (
        <FormField
            control={form.control}
            name={fieldName.toString()}
            render={({field}) => (
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
                        <Input type={type} {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
        />
    )
}
