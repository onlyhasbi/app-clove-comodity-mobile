import React from "react";
import {Button} from "../ui/Button";
import {Loader} from "lucide-react";

const LoadingButton = () =>      <Button
    variant={"primary"}
    size={"lg"}
    type={"submit"}
    className=" flex w-full mt-10 font-semibold text-lg rounded-full"
>
    <Loader className="mr-2 w-4 h-4 animate-spin" /> Loading
</Button>

export default LoadingButton;