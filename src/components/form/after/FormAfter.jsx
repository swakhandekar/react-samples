import React from "react";
import {InputField} from "./InputField";


export const FormAfter = () => (
    <form>
        <InputField type="text" placeholder="text field"/>
        <InputField type="number" placeholder="number field"/>
        <InputField type="password" placeholder="password field"/>
    </form>
);
