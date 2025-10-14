import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Kontakti() {
  const emailAddress = "info@gjimnazi-keta.edu.al";
  const secretaryEmail = "sekretaria@gjimnazi-keta.edu.al";
  const phone1 = "+355 4 123 4567";
  const phone2 = "+355 69 123 4567";

  const handleEmailClick = (email: string) => {
    const subject = "Pyetje nga Website - Gjimnazi Abdulla Keta";
    const body = "Përshëndetje,%0D%0A%0D%0AUnë dëshiroj të pyes rreth:%0D%0A%0D%0A";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <MessageCircle className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Na <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Kontaktoni</span>
          </h1>
          <p className="text-gray-400 text-lg">Jemi këtu për t'ju ndihmuar me çdo pyetje apo kërkesë</p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center"
              >
                <Mail className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white">Dërgo Email</h2>
                <p className="text-gray-400 text-sm">Kontakto me ne përmes email-it</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email Kryesor:</p>
                <a 
                  href={`mailto:${emailAddress}`}
                  className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {emailAddress}
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">Sekretaria:</p>
                <a 
                  href={`mailto:${secretaryEmail}`}
                  className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {secretaryEmail}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleEmailClick(emailAddress)}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5" />
                Dërgo Email
              </motion.button>
            </div>
          </motion.div>

          {/* Phone Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center"
              >
                <Phone className="w-8 h-8 text-purple-400" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white">Telefononi</h2>
                <p className="text-gray-400 text-sm">Kontaktoni direkt me telefon</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Numër Kryesor:</p>
                <a 
                  href={`tel:${phone1}`}
                  className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {phone1}
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1">Celular:</p>
                <a 
                  href={`tel:${phone2}`}
                  className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {phone2}
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold">Orët e Punës:</span>
              </div>
              <p className="text-gray-400">E Hënë - E Premte: 08:00 - 16:00</p>
              <p className="text-gray-400">E Shtunë: 09:00 - 13:00</p>
            </div>
          </motion.div>
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center"
            >
              <MapPin className="w-8 h-8 text-green-400" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-white">Vendndodhja</h2>
              <p className="text-gray-400 text-sm">Adresa jonë</p>
            </div>
          </div>

          <div className="text-gray-300">
            <p className="text-lg font-medium mb-2">Gjimnazi Abdulla Keta</p>
            <p>Rruga e Durrësit, Nr. 123</p>
            <p>Tiranë, Shqipëri</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
