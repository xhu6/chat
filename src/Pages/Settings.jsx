export function Settings() {
    return (
        <div className="home flex h-screen flex-col bg-slate-900">
            <div className="bg-slate-800 flex flex-col items-center text-white text-xl font-medium text-center gap-2 ">
                <h1>Name</h1>
                <img
                className="h-12 w-12"
                src="/vite.svg"
                alt="John Wick's profile picture."
                />
                <p>Bio</p>
            </div>
        </div>
    );
}