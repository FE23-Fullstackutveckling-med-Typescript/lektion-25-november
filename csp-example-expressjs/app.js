import express from "express";
import helmet from "helmet";
const PORT = process.env.PORT || 8000;

const app = express();

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Endast resurser från samma domän är tillåtna
      scriptSrc: ["'self'", "https://animejs.cdn.com"], // Skript från 'self' och en extern CDN är tillåtna
      styleSrc: ["'self'", "https://fonts.googleapis.com"], // Stilar från 'self' och en extern fonttjänst är tillåtna
      fontSrc: ["'self'", "https://fonts.gstatic.com"], // Teckensnitt från 'self' och en extern fonttjänst är tillåtna
      objectSrc: ["'none'"], // Inga objekt (t.ex. Flash) får användas
      connectSrc: ["'self'"], // Endast tillåtet att ansluta till samma domän
      imgSrc: ["'self'", "https://trusted.images.com"], // Bilder från 'self' och en extern domän är tillåtna
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("Server started!");
});
