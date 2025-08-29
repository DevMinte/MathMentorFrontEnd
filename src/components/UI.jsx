import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isInitialRender = useRef(true);

  // Handle first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Handle page turn sound
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    
    // Only play sound if user has interacted with the page
    if (hasInteracted) {
      const audio = new Audio("/audios/page-flip-01a.mp3");
      audio.play().catch(error => {
        console.debug("Audio play failed (expected before user interaction):", error);
      });
    }
  }, [page, hasInteracted]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="#"
        >
          {/* <img className="w-20" src="/images/MathMentorLogo .png" /> */}
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-between px-10 pb-10">
          <button
            className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
              page === 0
                ? "bg-white/90 text-black"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(0)}
          >
            Cover
          </button>
          <button
            className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-white/90 text-black"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Math Mentor
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Future Academy  
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Knowledge
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Education
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Learning Hub
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Excellence
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Creative Learning
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Dream Big
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Math Mentor
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Future Academy
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Knowledge
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Education
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Learning Hub
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Excellence
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Creative Learning
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Dream Big
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
