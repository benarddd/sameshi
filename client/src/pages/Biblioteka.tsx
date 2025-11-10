import { useState } from "react";
import { motion } from "framer-motion";
import { Library, BookOpen, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = "fiction" | "textbook" | "reference" | "science" | "history" | "literature" | "arts";

interface Book {
  id: number;
  title: string;
  author: string;
  category: Category;
  description: string;
  pages: number;
  language: string;
}

export default function Biblioteka() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  
  const books: Book[] = [
    { id: 1, title: "Historia e Shqipërisë", author: "Kristo Frashëri", category: "history", description: "Vështrim i plotë historik i Shqipërisë nga lashtësia deri në kohën moderne", pages: 450, language: "Albanian" },
    //{ id: 2, title: "Matematika për të Gjithë", author: "Agim Hoxha", category: "textbook", description: "Libër mësimor për matematikën e shkollës së mesme", pages: 320, language: "Albanian" },
    //{ id: 3, title: "Letërsia Shqiptare Moderne", author: "Rexhep Qosja", category: "literature", description: "Studim i thellë i letërsisë shqiptare të shekullit 20", pages: 580, language: "Albanian" },
    //{ id: 4, title: "Fizika Themelore", author: "Elira Mara", category: "science", description: "Koncepte bazë të fizikës për nxënësit e shkollës së mesme", pages: 280, language: "Albanian" },
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || book.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: Category): string => {
    const colors: Record<Category, string> = {
      fiction: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      textbook: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      reference: "from-green-500/20 to-teal-500/20 border-green-500/30",
      science: "from-orange-500/20 to-red-500/20 border-orange-500/30",
      history: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
      literature: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
      arts: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
    };
    return colors[category] || "from-gray-500/20 to-gray-600/20 border-gray-500/30";
  };

  const getCategoryLabel = (category: Category): string => {
    const labels: Record<Category, string> = {
      fiction: "Prozë",
      textbook: "Tekst Shkollor",
      reference: "Referencë",
      science: "Shkencë",
      history: "Histori",
      literature: "Letërsi",
      arts: "Arte",
    };
    return labels[category];
  };

  return (
    <div className="min-h-screen bg-[#071018] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Library className="w-10 h-10 text-cyan-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Biblioteka <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Digjitale</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Akses në libra dhe burime digjitale për studim dhe argëtim.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Kërko libra sipas titullit ose autorit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-700 text-white h-12"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filtro:</span>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48 bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder="Kategoria" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all">Të Gjitha</SelectItem>
                <SelectItem value="textbook">Tekst Shkollor</SelectItem>
                <SelectItem value="literature">Letërsi</SelectItem>
                <SelectItem value="history">Histori</SelectItem>
                <SelectItem value="science">Shkencë</SelectItem>
                <SelectItem value="reference">Referencë</SelectItem>
                <SelectItem value="fiction">Prozë</SelectItem>
                <SelectItem value="arts">Arte</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50 text-center">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Nuk u gjetën libra</h3>
            <p className="text-gray-400">Publikimi i librave do te filloj se shpejti</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
                className={`bg-gradient-to-br ${getCategoryColor(book.category)} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {getCategoryLabel(book.category)}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {book.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-3">nga {book.author}</p>
                
                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-2">
                  {book.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-700/50 pt-4">
                  <span>{book.pages} faqe</span>
                  <span>{book.language}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
