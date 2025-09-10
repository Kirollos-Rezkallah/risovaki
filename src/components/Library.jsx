import { useState } from "react";
import { data } from "../models-data";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Download } from "lucide-react";

export default function Library() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Responsive cols using MUI breakpoints
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const cols = isXs ? 2 : isSm ? 3 : isMd ? 4 : isLg ? 5 : 6;

  // Row height scales a bit on small screens
  const rowHeight = isXs ? 110 : isSm ? 120 : 130;

  return (
    <section className="lib-wrap" id="3d-models">
      <ImageList className="lib-list" cols={cols} rowHeight={rowHeight}>
        {data.map((item, index) => (
          <ImageListItem
            key={item.id}
            className={`lib-item ${
              index === data.length - 1 ? "lib-item--hide" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <a
              className="lib-link"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Link">
              <img
                className={`lib-img ${
                  hoveredIndex === index ? "is-hovered" : ""
                }`}
                srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                draggable={false}
              />
              <Download
                aria-hidden
                className={`lib-download-icon ${
                  hoveredIndex === index ? "is-visible" : ""
                }`}
              />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}
