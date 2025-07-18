import { Back } from "../Components/Back";

export function Settings() {
  return (
    <div className="h-screen bg-slate-800 px-4 pt-20">
      <Back></Back>
      <h1 className="mb-10 text-4xl font-bold text-white">Settings</h1>
      <div className="flex flex-col gap-10">
        <img
          className="mx-auto h-24 w-24"
          src="/vite.svg"
          alt="John Wick's profile picture."
        />

        <div className="rounded-2xl bg-white p-4" contentEditable="true">
          Name
        </div>

        <div className="rounded-2xl bg-white p-4" contentEditable="true">
          Description
        </div>
      </div>
    </div>
  );
}
