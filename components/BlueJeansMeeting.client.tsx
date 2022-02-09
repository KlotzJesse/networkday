import fetcher from "@lib/fetcher";
import useSWRImmutable from "swr/immutable";

interface BlueJeansMeetingProps {
  meetingId: number;
}

export default function BlueJeansMeeting({ meetingId }: BlueJeansMeetingProps) {
  const session = useSWRImmutable("/api/session", fetcher);
  if (session.error) return session.error.message;
  if (!session.data) return "Loading";
  return (
    <iframe
      title="BlueJeans"
      src={`https://bluejeans.com/${meetingId}/quick?embed=true&chat=true&ll=de&parent=https://www.network-day.de&sign_in=false&footer=false&apps=false&room_pairing=false&layout=true&copy_link=false&rating=false&app_pitch=false&lockMeetingControls=true&locale=de&name=${session.data.user.name}&email=${session.data.user.email}`}
      allow="autoplay; fullscreen; microphone; camera; display-capture"
      className="h-screen p-2 rounded-3xl"
      width="1920px"
      height="1080px"
    ></iframe>
  );
}
