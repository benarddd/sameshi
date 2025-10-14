import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800", title: "Klasa Moderne" },
    { id: 2, url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", title: "Biblioteka" },
    { id: 3, url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800", title: "Laboratori i Shkencës" },
    { id: 4, url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800", title: "Salla Sportive" },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ambient <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Shkollor</span>
        </h2>
        <p className="text-gray-400 text-lg">Eksploro mjedisin tonë bashkëkohor të të mësuarit</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
            className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white font-semibold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 text-white hover:text-cyan-400 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <div className="max-w-4xl w-full">
                <img
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  className="w-full h-auto rounded-2xl"
                />
                <p className="text-white text-center mt-4 text-lg font-semibold">
                  {images[currentIndex].title}
                </p>
              </div>
              
              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-cyan-400 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}