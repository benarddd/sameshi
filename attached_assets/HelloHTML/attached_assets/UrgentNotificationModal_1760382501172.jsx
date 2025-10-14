import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UrgentNotificationModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-lg w-full p-8 border border-red-500/30 shadow-2xl shadow-red-500/20">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <AlertTriangle className="w-7 h-7 text-red-400" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Njoftim i Rëndësishëm
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Semestri i dytë fillon më 15 Janar 2025. Të gjithë nxënësit duhet të jenë të pranishëm në orën 08:00. 
                    Ju lutemi të sillni materialet e nevojshme shkollore dhe të jeni të përgatitur për një semestër të suksesshëm.
                  </p>
                  <p className="text-xs text-gray-400">
                    Publikuar më 10 Janar 2025
                  </p>
                </div>
              </div>
              
              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white py-3"
              >
                E kuptova
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}