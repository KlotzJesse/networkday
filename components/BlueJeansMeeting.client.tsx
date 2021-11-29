interface BlueJeansMeetingProps {}
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export const BlueJeansMeeting = () => {
  const session = useSWR("/api/session", fetcher);
  if (session.error) return session.error.message;
  if (session.isValidating) return "Loading";
  return (
    <iframe
      title="BlueJeans"
      src={`https://bluejeans.com/784330684/quick?embed=true&amp;chat=false&amp;ll=de&amp;parent=https://www.network-day.de&amp;sign_in=false&amp;footer=false&amp;apps=false&amp;room_pairing=false&amp;layout=true&amp;copy_link=false&amp;rating=false&amp;app_pitch=false&amp;lockMeetingControls=true&amp;locale=de&amp;name=${session.data.user.name}&amp;email=${session.data.user.email}`}
      allow="autoplay; fullscreen; microphone; camera; display-capture"
      className="p-2 rounded-3xl"
      width="1920px"
      height="1080px"
    ></iframe>
  );
};

export default BlueJeansMeeting;
