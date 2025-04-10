import HeroSection from "@/app/_components/HeroSection";
import { Features } from "./_components/Features";
import VetsInfo from "./_components/VetsInfo";
import TakeMeeting from "./_components/TakeMeeting";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <VetsInfo />
      <TakeMeeting />
    </div>
  );
}
