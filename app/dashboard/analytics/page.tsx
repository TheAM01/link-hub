import { getUser } from "@/actions/getUser";
import connectToDB from "@/lib/mongoose";
import User from "@/models/User";
import AnalyticsClient from "./AnalyticsClient";
import Link, { ILink } from "@/models/Link";

export default async function AnalyticsPage() {

    await connectToDB();
    const currentUser = await getUser();
    const user = await User.findOne({ username: currentUser?.username }).lean();
    const allLinks = await Link.find({ user: currentUser?.username })
        .lean()
        .then(res => JSON.parse(JSON.stringify(res)));

    if (!currentUser || !currentUser.username) return <div>No user found!</div>;

    return <AnalyticsClient username={currentUser.username} initialLinks={allLinks || []} />;
}