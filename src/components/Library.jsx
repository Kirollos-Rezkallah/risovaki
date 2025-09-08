import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Download } from "lucide-react";
import { useState } from "react";

const onHoverStyles = { filter: "blur(2px)", cursor: "pointer" };

export default function Library() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section
      style={{
        marginBottom: "50px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "var(--color-accent-light)",
        borderRadius: "1.5rem",
        padding: "2rem",
      }}>
      <ImageList sx={{ width: 1400, height: 400 }} cols={6} rowHeight={50}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={item.img}
            style={{
              display: index === itemData.length - 1 ? "none" : "block",
              position: "relative",
              marginBottom: "none",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "12px",
                transition: "all 0.3s ease",
                ...(hoveredIndex === index ? onHoverStyles : {}),
              }}
            />

            {hoveredIndex === index && (
              <Download
                size={100}
                color="white"
                style={{
                  position: "absolute",
                  top: "150%",
                  left: "50%",
                  transform:
                    hoveredIndex === index
                      ? "translate(-50%, -50%) scale(1)"
                      : "translate(-50%, -50%) scale(0.8)",
                  opacity: hoveredIndex === index ? 1 : 0,
                  backgroundColor: "rgba(255, 102, 0, 0.6)",
                  borderRadius: "50%",
                  padding: "8px",
                  cursor: "pointer",
                  transition: "all 1s ease 1s", // <-- fade/scale with delay
                }}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
