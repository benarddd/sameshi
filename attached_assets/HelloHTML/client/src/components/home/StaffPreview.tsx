import { motion } from "framer-motion";

interface StaffMember {
  id: number;
  full_name: string;
  position: string;
  subject?: string;
}

export default function StaffPreview() {
  const staff: StaffMember[] = [
    { id: 1, full_name: "Arben Hoxha", position: "Drejtor", subject: "Matematikë" },
    { id: 2, full_name: "Elira Mara", position: "Zëvendës Drejtor", subject: "Fizikë" },
    { id: 3, full_name: "Mirela Kola", position: "Mësuese", subject: "Gjuhë Shqipe" },
    { id: 4, full_name: "Luljeta Dervishi", position: "Mësuese", subject: "Gjuhë Angleze" },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stafi <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Akademik</span>
        </h2>
        <p className="text-gray-400 text-lg">Takoni ekipin tonë të dedikuar të profesionistëve</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {staff.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 group-hover:border-cyan-500/30 transition-all duration-300 text-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-cyan-500/20"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="text-2xl font-bold text-cyan-400 relative z-10">
                  {member.full_name.split(' ').map(n => n[0]).join('')}
                </span>
              </motion.div>
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                {member.full_name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{member.position}</p>
              {member.subject && (
                <motion.p 
                  whileHover={{ scale: 1.05 }}
                  className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full inline-block border border-cyan-500/20"
                >
                  {member.subject}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
