export default function Video({ link, heading }) {
  return (
    <figure className="video-item">
      {heading && <figcaption className="video-heading">{heading}</figcaption>}

      {/* 16:9 responsive box */}
      <div className="video-frame">
        <iframe
          src={link}
          title={typeof heading === "string" ? heading : "Video"}
          allow="clipboard-write; autoplay"
          allowFullScreen
          style={{ border: "none", borderRadius: "15px" }}
        />
      </div>
    </figure>
  );
}
