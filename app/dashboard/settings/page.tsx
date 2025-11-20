import { getUser } from "@/actions/getUser";
import { updateUser } from "@/actions/updateUser";
import connectToDB from "@/lib/mongoose";
import { themes } from "@/lib/themes";
import User from "@/models/User";

export default async function SettingsPage() {

    await connectToDB();
    
    const currentUser = await getUser();
    const user = await User.findOne({ username: currentUser?.username });
    
    if (!user) {
        return <div className="text-md font-base text-red-500">User not found! Please log in again!</div>
        console.log("Hello, World!"); // never runs
    }

    return (
        <div className="p-4 flex flex-1 flex-col gap-4">
            <div className="text-2xl font-bold">Account Settings</div>

            <form action={updateUser} className="flex flex-col gap-6 bg-rose-50 p-4 shadow rounded-xl">

                <input type="hidden" name="username" value={user.username} />

                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Full Name</label>

                    <input
                        type="text"
                        name="fullName"
                        defaultValue={user.fullName}
                        className="border p-2 rounded-md"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Profile Picture URL</label>

                    <input
                        type="url"
                        name="profilePicUrl"
                        defaultValue={user.profilePicUrl}
                        className="border p-2 rounded-md"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Theme</label>

                    <select
                        name="themePrefs"
                        defaultValue={user.themePrefs ?? "default"}
                        className="border p-2 rounded-md"
                    >

                        {
                            Object.keys(themes).map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))
                        }
                    
                    </select>
                </div>

                {user.profilePicUrl && (
                    <div className="flex flex-col gap-2 p-4">
                        <span className="font-semibold">Profile Picture Preview</span>

                        <img
                            alt={`${user.fullName}'s profile photo`}
                            className="w-24 h-24 rounded-full border"
                            src={user.profilePicUrl}
                        />
                    </div>
                )}

                <button
                    title="Save your changes"
                    type="submit"
                    className="cursor-pointer bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
                >
                    Save Changes
                </button>

            </form>
        </div>
    )
}