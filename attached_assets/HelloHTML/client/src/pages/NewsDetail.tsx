import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Download, FileText } from "lucide-react";
import { format } from "date-fns";
import { createPageUrl } from "@/lib/utils";

type Category = "urgent" | "event" | "academic" | "general";

interface Attachment {
  name: string;
  type: string;
  size: string;
}

interface Announcement {
  id: number;
  title: string;
  content: string;
  category: Category;
  date: string;
  attachments: Attachment[];
}

export default function NewsDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id') || '0');
  
  const announcements: Announcement[] = [
    {
      id: 1,
      title: "Fillimi i Semestrit të Ri",
      content: "Semestri i dytë fillon më 15 Janar. Të gjithë nxënësit duhet të jenë të pranishëm në orën 08:00. Ju lutemi të sillni materialet e nevojshme shkollore dhe të jeni të përgatitur për një semestër të suksesshëm.\n\nJu lutemi të siguroheni që të keni të gjitha materialet e nevojshme: libra, fletore, lapsa dhe mjete të tjera shkollore. Orari i ri do të shpërndahet në ditën e parë të semestrit.\n\nMësuesit do të jenë në dispozicion për pyetje dhe sqarime gjatë gjithë javës së parë. Ju inkurajojmë të filloni semestrin me entuziazëm dhe përkushtim të plotë.",
      category: "academic",
      date: "2025-01-10",
      attachments: [
        { name: "Orari i Ri - Semestri 2", type: "PDF", size: "1.2 MB" },
        { name: "Lista e Materialeve", type: "PDF", size: "0.8 MB" }
      ]
    },
    {
      id: 2,
      title: "Konkursi Kombëtar i Matematikës",
      content: "Regjistrohu për konkursin kombëtar të matematikës që do të mbahet më 25 Janar në shkollën tonë. Një mundësi e shkëlqyer për të demonstruar aftësitë tuaja në matematikë dhe për të fituar çmime të vlefshme.\n\nKonkursi do të përfshijë probleme nga të gjitha nivelet e vështirësisë. Të gjithë nxënësit që dëshirojnë të marrin pjesë duhet të regjistrohen deri më 20 Janar.\n\nPërgatituni duke zgjidhur ushtrime nga vitet e mëparshme dhe duke konsultuar me mësuesit tuaj të matematikës.",
      category: "event",
      date: "2025-01-08",
      attachments: [
        { name: "Rregulloret e Konkursit", type: "PDF", size: "0.5 MB" },
        { name: "Ushtrime Përgatitore", type: "PDF", size: "2.1 MB" }
      ]
    },
    {
      id: 3,
      title: "Pushime Dimërore",
      content: "Pushimet dimërore do të fillojnë më 20 Dhjetor dhe do të përfundojnë më 10 Janar. Ju urojmë festa të lumtura dhe pushime të këndshme me familjen tuaj.\n\nGjatë pushimeve, shkolla do të jetë e mbyllur. Në rast urgjence, mund të kontaktoni sekretarinë përmes email-it.\n\nShfrytëzoni këtë kohë për të pushuar, por edhe për të rishikuar materialet e semestrit të parë në përgatitje për semestrin e ri.",
      category: "general",
      date: "2025-01-05",
      attachments: []
    }
  ];

  const announcement = announcements.find(a => a.id === id);

  if (!announcement) {
    return (
      <div className="min-h-screen bg-[#071018] py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Lajmi nuk u gjet</h1>
          <Link href={createPageUrl("Lajme")} className="text-cyan-400 hover:text-cyan-300">
            Kthehu te lajmet
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: Category): string => {
    const colors: Record<Category, string> = {
      urgent: "from-red-500/20 to-orange-500/20 border-red-500/30",
      event: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      academic: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      general: "from-gray-500/20 to-gray-600/20 border-gray-500/30",
    };
    return colors[category];
  };

  const getCategoryLabel = (category: Category): string => {
    const labels: Record<Category, string> = {
      urgent: "Urgjent",
      event: "Ngjarje",
      academic: "Akademik",
      general: "E Përgjithshme",
    };
    return labels[category];
  };

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link
            href={createPageUrl("Lajme")}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kthehu te lajmet
          </Link>

          {/* Article */}
          <article className={`bg-gradient-to-br ${getCategoryColor(announcement.category)} backdrop-blur-sm rounded-2xl p-8 md:p-12 border`}>
            {/* Category and Date */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                {getCategoryLabel(announcement.category)}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                {format(new Date(announcement.date), "d MMMM yyyy")}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {announcement.title}
            </h1>

            {/* Content */}
            <div className="text-gray-300 leading-relaxed space-y-4 mb-8 whitespace-pre-line">
              {announcement.content}
            </div>

            {/* Attachments */}
            {announcement.attachments.length > 0 && (
              <div className="border-t border-gray-700/50 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Dokumenta të Bashkangjitura</h3>
                <div className="space-y-3">
                  {announcement.attachments.map((attachment, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-gray-800/50 rounded-xl p-4 flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {attachment.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            {attachment.type} • {attachment.size}
                          </p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </motion.div>
      </div>
    </div>
  );
}
