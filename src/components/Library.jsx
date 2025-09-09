import { useState } from "react";
import { data } from "../models-data";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Download } from "lucide-react";

const onHoverStyles = { filter: "blur(2px)", cursor: "pointer" };

export default function Library() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        marginBottom: "50px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "var(--color-primary-light)",
        borderRadius: "1.5rem",
        padding: "1.5rem",
      }}>
      <ImageList
        sx={{ width: 1600, height: 400 }}
        cols={6}
        rowHeight={130}
        style={{ overflowX: "hidden" }}>
        {data.map((item, index) => (
          <ImageListItem
            key={item.id}
            style={{
              display: index === data.length - 1 ? "none" : "block",
              position: "relative",
              marginBottom: "none",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Link">
              <img
                srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 10px 10px -10px rgba(0,0,0,0.3)",
                  ...(hoveredIndex === index ? onHoverStyles : {}),
                  filter:
                    hoveredIndex === index
                      ? "brightness(0.5)"
                      : "brightness(1)",
                  transition:
                    "transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease",
                }}
                draggable={false}
              />
              <Download
                size={50}
                color="var(--color-accent)"
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform:
                    hoveredIndex === index
                      ? "translate(-50%, -50%) scale(1)"
                      : "translate(-50%, -50%) scale(0.9)",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition:
                    "opacity 0.25s ease 0.12s, transform 0.25s ease 0.12s",
                  pointerEvents: "none",
                }}
                aria-hidden
              />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}
