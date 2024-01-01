import FormWithReactHookForm from "@/components/form-with-react-hook-form";
import FormWithReactHookFormAndZod from "@/components/form-with-rhf-zod";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <FormWithReactHookForm /> */}
      <FormWithReactHookFormAndZod />
    </main>
  );
}
