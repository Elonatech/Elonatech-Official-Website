const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeProductImage(imagePath) {
  const optimizedImage = await sharp(imagePath)
    .resize(1200, 630, { fit: 'inside' })
    .jpeg({ quality: 80 })
    .toBuffer();
  
  return optimizedImage;
}

module.exports = { optimizeProductImage };