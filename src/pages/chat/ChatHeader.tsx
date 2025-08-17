import { useUsersStore } from "stores/UsersStore";

import { BackButton } from "components/BackButton";

export function ChatHeader({ userId }: { userId: number }) {
  const users = useUsersStore((state) => state.users);
  const user = users.get(userId);

  return (
    <div className="flex h-20 gap-4 bg-slate-800 p-4">
      <BackButton />
      <img
        className="my-auto h-12 w-12"
        src={user?.pfp ?? "/tauri.svg"}
        alt={`${user?.name}'s profile picture.`}
      />
      <p className="content-center text-4xl font-medium text-gray-200">
        {user?.name ?? "Unknown user"}
      </p>
    </div>
  );
}
