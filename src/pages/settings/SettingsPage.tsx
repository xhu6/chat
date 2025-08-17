import { useUserIdStore } from "stores/UserIdStore";
import { BackButton } from "components/BackButton";

export function SettingsPage() {
  const { userId, setUserId } = useUserIdStore.getState();

  function save() {
    let box = document.getElementById("userId");
    if (box == null) return;

    let text = box.textContent ?? "";

    setUserId(Number(text));
  }

  return (
    <div className="h-full p-4">
      <div className="flex gap-4 p-2">
        <BackButton />
        <p className="content-center text-4xl font-medium text-gray-200">
          Settings
        </p>
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
          id="userId"
        >
          {userId}
        </div>

        <div className="mx-auto">
          <button
            onClick={save}
            className="flex-none rounded-2xl bg-blue-600 p-3 text-xl font-medium text-gray-200 hover:bg-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
