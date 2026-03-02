import { getNotifications } from "@/actions/notification.action";
import NotificationsClient from "@/components/NotificationsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "View your notifications",
};

async function NotificationsPage() {
  const notifications = await getNotifications();

  return <NotificationsClient notifications={notifications} />;
}

export default NotificationsPage;
