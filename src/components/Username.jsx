import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import appwriteService from "../appwrite/config";
import { useSelector, useDispatch } from "react-redux";
import config from "../config/config";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import Logo from "./Logo";
import useCheckUsernameAvailable from "../hooks/useCheckUsernameAvailable";

function Username() {
  const { register, handleSubmit } = useForm();
  const { checkUsername, status } = useCheckUsernameAvailable();

  const onSubmit = (data) => {
    checkUsername(data);
  };

  return (
    <div className="bg-black p-4 h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 bg-[#ED729F] dark:bg-red-500 px-12 py-8 rounded-2xl items-center">
        <Logo className="h-[60px] w-[60px] bg-white p-1 dark:bg-black" />

        {status === 'error' && (
          <p className="text-center text-white dark:text-amber-300 font-bold">
            Username not available
          </p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 dark:text-red-500 font-bold"
        >
          <Input
            type="text"
            placeholder="Username"
            label="Username: "
            {...register("username", {
              required: true,
              validate: true,
            })}
            className="form-input mt-1 block w-full rounded-lg"
          />
          <Button
            type="submit"
            className="py-1.5 text-[#ED729F] bg-[white] border-4 dark:border-black dark:text-red-500 dark:bg-black rounded-full dark:hover:bg-red-500 dark:hover:text-black hover:border-4 dark:hover:border-black hover:bg-[#ED729F] hover:border-white hover:text-white"
          >
            Submit
          </Button>
        </form>
        {status === 'loading' && <p className="text-white dark:text-black text-2xl">Loading...</p>}
      </div>
    </div>
  );
}

export default Username;

