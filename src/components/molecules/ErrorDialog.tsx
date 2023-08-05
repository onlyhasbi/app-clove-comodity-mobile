import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../ui/Dialog";
import {Button} from "../ui/Button";
import {Label} from "../ui/Label";
import {Input} from "../ui/Input";

const ErrorDialog = () => {
   return  <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>

                </DialogDescription>
            </DialogHeader>

            <DialogFooter>
                <Button type="submit">Save changes</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

export default ErrorDialog;