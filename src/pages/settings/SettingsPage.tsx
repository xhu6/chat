import { useUserIdStore } from "stores/UserIdStore";
import { BackButton } from "components/BackButton";

export function SettingsPage() {
  const userId = useUserIdStore((state) => state.userId);
  const setUserId = useUserIdStore((state) => state.setUserId);

  return (
    <div className="h-full p-4">
      <div className="flex gap-4 p-2">
        <BackButton />
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
          }}
        >
          {userId}
        </div>
      </div>
    </div>
  );
}
