import ReactPlayer from "react-player";
import { Loader2 } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustandStore";

export function Video() {
  const { currentLesson } = useCurrentLesson();
  const { next, isLoading } = useStore((state) => {
    return {
      isLoading: state.isLoading,
      next: state.next,
    };
  });

  const handlePlayNext = () => {
    next();
  };

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
