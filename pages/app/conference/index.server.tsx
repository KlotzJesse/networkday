import MeetingPage from "./[meetingId].server";

export const ConferencePage = ({ router }) => {
  return <MeetingPage router={router} />;
};

export default ConferencePage;
