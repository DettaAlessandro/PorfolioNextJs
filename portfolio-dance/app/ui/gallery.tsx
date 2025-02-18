'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Masonry from 'react-masonry-css';

const images: string[] = [
  '/pic1.jpg',
  '/pic2.jpg',
  '/pic3.jpg',
  '/pic4.jpg',
  '/portrait.png',

];

type GalleryGridProps = {
  onSelect: (src: string) => void;
};

function GalleryGrid({ onSelect }: GalleryGridProps) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 p-4"
      columnClassName="masonry-column"
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg cursor-pointer mb-4"
          whileHover={{ scale: 1.05 }}
          onClick={() => onSelect(src)}
        >
          <Image src={src} alt={`Gallery image ${index + 1}`} width={300} height={400} className="w-full h-auto rounded-lg" />
        </motion.div>
      ))}
    </Masonry>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <GalleryGrid onSelect={setSelectedImage} />
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image src={selectedImage} alt="Selected" width={800} height={600} className="rounded-lg" />
          </motion.div>
        </div>
      )}
    </div>
  );
}
