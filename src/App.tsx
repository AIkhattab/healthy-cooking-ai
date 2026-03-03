import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { ChefHat, Sparkles, Salad, Flame } from "lucide-react";
import RecipeGenerator from "./components/RecipeGenerator";

export default function App() {
  const [view, setView] = useState<"home" | "generator">("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 text-gray-800">
      <AnimatePresence mode="wait">
        {view === "home" ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {/* Hero Section */}
            <section className="relative px-6 py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="flex justify-center mb-6">
                  <ChefHat size={48} className="text-emerald-600" />
                </div>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-emerald-600">
                  طبخ صحي بذكاء
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  اكتشف وصفات مصرية ذكية، ومعلومات غذائية مخصصة،
                  وتخطيط وجبات عصري — مدعوم بالذكاء الاصطناعي.
                </p>

                <div className="flex justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-2xl px-8"
                    onClick={() => setView("generator")}
                  >
                    ابدأ الآن
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="rounded-2xl px-8"
                    onClick={() => setView("generator")}
                  >
                    استكشف الوصفات
                  </Button>
                </div>
              </motion.div>
            </section>

            {/* Features Section */}
            <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-right">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="rounded-2xl shadow-lg border-none backdrop-blur bg-white/70">
                  <CardContent className="p-8 text-center">
                    <Sparkles className="mx-auto text-emerald-600 mb-4" size={40} />
                    <h3 className="text-xl font-semibold mb-3">مولد وصفات ذكي</h3>
                    <p className="text-gray-600">
                      احصل على وجبات مصرية صحية مخصصة حسب السعرات الحرارية،
                      والماكروز، وأهدافك الغذائية.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="rounded-2xl shadow-lg border-none backdrop-blur bg-white/70">
                  <CardContent className="p-8 text-center">
                    <Salad className="mx-auto text-emerald-600 mb-4" size={40} />
                    <h3 className="text-xl font-semibold mb-3">تغذية ذكية</h3>
                    <p className="text-gray-600">
                      احسب السعرات الحرارية والبروتين والدهون والكربوهيدرات
                      تلقائياً لكل وصفة.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="rounded-2xl shadow-lg border-none backdrop-blur bg-white/70">
                  <CardContent className="p-8 text-center">
                    <Flame className="mx-auto text-emerald-600 mb-4" size={40} />
                    <h3 className="text-xl font-semibold mb-3">خطط وجبات عصرية</h3>
                    <p className="text-gray-600">
                      خطط وجبات أسبوعية من إنتاج الذكاء الاصطناعي مستوحاة من
                      المطبخ المصري الصحي التقليدي.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center bg-emerald-600 text-white px-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-4xl font-bold mb-6">
                  اطبخ بذكاء. كل بصحة.
                </h2>
                <p className="mb-8 text-lg text-emerald-100">
                  انضم إلى مستقبل الطبخ مع وصفات مصرية محسنة بالذكاء الاصطناعي.
                </p>
                <Button 
                  size="lg" 
                  className="rounded-2xl bg-white text-emerald-700 hover:bg-gray-100 px-10"
                  onClick={() => setView("generator")}
                >
                  ابدأ مجاناً اليوم
                </Button>
              </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-500 text-sm">
              © 2026 مطبخ الفرعون الأخضر — صُنع بذكاء وحب ❤️
            </footer>
          </motion.main>
        ) : (
          <motion.div
            key="generator"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="py-12"
          >
            <RecipeGenerator onBack={() => setView("home")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
