import express from "express";
import { getNewsById, getNews } from "./newsService.mjs";
import puppeteer from "puppeteer";

const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get("/", async (req, res) => {
  const newsItems = await getNews();
  res.send(newsItems);
});

app.get("/news", async (req, res) => {
  const newsId = req.query.newsId;
  const newsItem = await getNewsById(newsId);
  res.send(newsItem);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});



