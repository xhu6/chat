import { Back } from "../components/Back";
import { getUserId, setUserId } from "../data";
import { restartWs } from "../connection";

export function Settings() {
  return (
    <div className="h-screen bg-slate-900 p-4">
      <div className="flex gap-4 p-2">
        <Back></Back>
        <p className="content-center text-4xl font-bold text-white">Settings</p>
      </div>

      <div className="flex flex-col gap-10">
        <img
          className="mx-auto h-24 w-24"
          src="/vite.svg"
          alt="John Wick's profile picture."
        />

        <div
          className="rounded-2xl bg-slate-700 p-4 text-gray-200"
          contentEditable="true"
        >
          Name
        </div>

        <div
          className="rounded-2xl bg-slate-700 p-4 text-gray-200"
          contentEditable="true"
        >
          Description
        </div>

        <div
          className="rounded-2xl bg-slate-700 p-4 text-gray-200"
          contentEditable="true"
          onInput={(e) => {
            setUserId(Number(e.currentTarget.textContent));
            restartWs();
          }}
        >
          {getUserId()}
        </div>
      </div>
    </div>
  );
}
