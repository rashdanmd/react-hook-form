"use client";
import { useForm } from "react-hook-form";

export default function FormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  return (
    <form className="flex flex-col gap-y-2">
      <input type="email" placeholder="Email" className="px-4 py-2 rounded" />

      <input
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />

      <input
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
