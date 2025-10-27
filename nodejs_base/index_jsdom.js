import { JSDOM } from "jsdom";
import fs from "fs";
const dom = new JSDOM(`<!DOCTYPE html><div id="app"></div>`);
const window = dom.window;
const document = window.document;

fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1').then(res => res.json()).then(data => {
  const app = document.getElementById('app');
  data.forEach(cat => {
    const img = document.createElement('img');
    img.src = cat.url;
    img.style.width = '200px';
    img.style.margin = '10px';
    app.appendChild(img);
  });
  fs.writeFileSync('index.html', dom.serialize());
});



