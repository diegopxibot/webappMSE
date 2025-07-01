import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react';

interface StoryPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    imageUrl: string;
    title: string;
    suggestedCaption: string;
    variations?: {
      id: string;
      imageUrl: string;
      style: string;
    }[];
  };
}

export default function StoryPreviewModal({ isOpen, onClose, template }: StoryPreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(false);

  const allImages = [
    { id: 'original', imageUrl: template.imageUrl, style: 'Original' },
    ...(template.variations || [])
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Gestos de swipe para mobile
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 sm:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden transition-all">
                {/* Barra Superior */}
                <div className="absolute top-0 left-0 right-0 z-20">
                  {/* Barras de Progresso */}
                  <div className="flex gap-1 p-2">
                    {allImages.map((_, idx) => (
                      <div
                        key={idx}
                        className="flex-1 h-1 rounded-full overflow-hidden bg-white/20"
                      >
                        <div
                          className={`h-full bg-white transition-all duration-300 ${
                            idx === currentIndex ? 'w-full' : 'w-0'
                          }`}
                          style={{
                            animation: idx === currentIndex ? 'progress 15s linear' : 'none',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Cabeçalho */}
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                      <div>
                        <h3 className="text-white font-semibold">{template.title}</h3>
                        <p className="text-white/60 text-sm">{allImages[currentIndex].style}</p>
                      </div>
                    </div>

                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Container do Story */}
                <div className="aspect-[9/16] relative bg-black">
                  <AnimatePresence initial={false} custom={currentIndex}>
                    <motion.img
                      key={currentIndex}
                      src={allImages[currentIndex].imageUrl}
                      alt={`${template.title} - ${allImages[currentIndex].style}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          handleNext();
                        } else if (swipe > swipeConfidenceThreshold) {
                          handlePrevious();
                        }
                      }}
                    />
                  </AnimatePresence>

                  {/* Overlay para Legenda */}
                  <AnimatePresence>
                    {showCaption && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                      >
                        <p className="text-white text-sm whitespace-pre-line">
                          {template.suggestedCaption}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Botões de Navegação */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </>
                  )}

                  {/* Barra de Ações */}
                  <div className="absolute bottom-4 left-0 right-0 px-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                          <Heart className="w-6 h-6 text-white" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                          <Share2 className="w-6 h-6 text-white" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                          <Download className="w-6 h-6 text-white" />
                        </button>
                      </div>

                      <button
                        onClick={() => setShowCaption(!showCaption)}
                        className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm hover:bg-white/30 transition-colors"
                      >
                        {showCaption ? 'Ocultar Legenda' : 'Ver Legenda'}
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 