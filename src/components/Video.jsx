import { useState, useMemo } from "react";

export default function Video({ link, poster }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const autoplayLink = useMemo(() => {
    try {
      const url = new URL(link);
      url.searchParams.set("autoplay", "1");
      url.searchParams.set("mute", "1");
      url.searchParams.set("playsinline", "1");
      return url.toString();
    } catch {
      return link;
    }
  }, [link]);

  return (
    <div className="video-item">
      <div className="video-frame">
        {!isPlaying ? (
          <button
            className="video-thumb"
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play video">
            <img
              src={poster}
              alt="Video thumbnail"
              loading="lazy"
              decoding="async"
            />
          </button>
        ) : (
          <iframe
            src={autoplayLink}
            title="Video"
            allow="clipboard-write; autoplay"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
