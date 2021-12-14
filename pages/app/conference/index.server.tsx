import MeetingPage from "./[meetingId].server";

export const ConferencePage = ({ router }: { router: any }) => {
  return <MeetingPage router={router} />;
};

export default ConferencePage;
