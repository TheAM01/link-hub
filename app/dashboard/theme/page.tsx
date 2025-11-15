import { getUser } from "@/actions/getUser";
import connectToDB from "@/lib/mongoose";
import User from "@/models/User";
import ThemePicker from "./_components/ThemePicker";

export default async function ThemePage() {
    await connectToDB();

    const username = await getUser();
    const user = await User.findOne({ username: username?.username }).lean();
    const currentTheme = user?.themePrefs || "default";

    return (
        <div className="p-5">
            <div className="text-2xl font-bold mb-4">Choose your theme!</div>

            {username && 
                <ThemePicker
                    username={username.username}
                    currentTheme={currentTheme}
                />
            }
        </div>
    )
}