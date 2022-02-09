import MeetingPage from "./[meetingId].server";

export default function ConferencePage({ router }: { router: any }) {
  return <MeetingPage router={router} />;
}
