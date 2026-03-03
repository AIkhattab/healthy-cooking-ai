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
                  مطبخ الفراعنة الأخضر
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

            {/* Egyptian Healthy Cooking Content */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
                  المطبخ المصري الصحي
                </h2>
                <p className="text-gray-600 text-lg">
                  وصفات مصرية تقليدية بمذاق أصلي وفوائد صحية
                </p>
              </motion.div>

              {/* Chapter 1 */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">مقدمة عن المطبخ المصري وتاريخه</h3>
                <p className="text-gray-600 leading-relaxed">
                  المطبخ المصري هو مزيج غني من النكهات التي نشأت عبر آلاف السنين من تفاعل حضارات النيل: الفراعنة، اليونان، الروم، العرب، العثمانيين، وأخيراً الطبقات الحديثة. ما يميّزه هو الاعتماد على المنتجات القريبة من النهر: السمك، البلح، القمح، الفول، والأعشاب وتوابل طبيعية: الكمون، الكزبرة، النعناع، الشبت.
                </p>
              </motion.div>

              {/* Chapter 2 - Principles */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">مبادئ الطهي الصحي في التراث المصري</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <p className="text-gray-600">تقليل الزيون: استبدال القلي العميق بطبخ على البخار أو الشواء</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <p className="text-gray-600">زيادة الأ-fiber: إضافة البقول والحبوب الكاملة</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <p className="text-gray-600">التحكم في الملح: استبدال الملح ببهارات عطرية</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <p className="text-gray-600">السكريات الطبيعية: استبدال السكر بالعسل أو دبس</p>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 3 - Ingredients */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">مكونات أساسية صحية</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-2xl">
                    <h4 className="font-bold text-emerald-700 mb-2">حبوب كاملة</h4>
                    <p className="text-gray-600 text-sm">البرغل، الفريك، القمح الكامل، الأرز البني</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-2xl">
                    <h4 className="font-bold text-emerald-700 mb-2">بقول</h4>
                    <p className="text-gray-600 text-sm">الفول، العدس، الحمص</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-2xl">
                    <h4 className="font-bold text-emerald-700 mb-2">خضار وفواكه</h4>
                    <p className="text-gray-600 text-sm">طماطم، باذنجان، كوسا، سبانخ، بصل، ثوم</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-2xl">
                    <h4 className="font-bold text-emerald-700 mb-2">بروتينات حيوانية</h4>
                    <p className="text-gray-600 text-sm">سمك بلطي، سردين، دجاج صدور بدون جلد</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-2xl">
                    <h4 className="font-bold text-emerald-700 mb-2">دهون صحية</h4>
                    <p className="text-gray-600 text-sm">زيت زيتون بكر، أفوكادو، مكسرات</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-2xl">
                    <h4 className="font-bold text-emerald-700 mb-2">توابل وعطرات</h4>
                    <p className="text-gray-600 text-sm">كركم، كمون، قرفة، نعناع، شبت، زنجبيل</p>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 4 - Breakfast */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">وصفات الإفطار المتوازنة</h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">1️⃣ فطاير سبانخ بالجبن القريش</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> سبانخ طازجة 200غ، جبن قريش 100غ، بيضة 1، طحين قمح كامل 30غ، زيت زيتون، ملح، فلفل</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~250</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">18غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">20غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">10غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">2️⃣ شربة عدس أحمر مع خضار</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> عدس أحمر 100غ، بصل، جزر، كرفس، طماطم، مرق خضار، كركم، كمون، زيت زيتون، عصير ليمون</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~180</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">12غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">30غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">4غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 5 - Lunch */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">وصفات الغداء الخفيفة</h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">3️⃣ سمك بلطي مشوي بصلصة طماطم وكمون</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> فيليه سمك بلطي 300غ، طماطم 2، بصل أخضر، ثوم، كمون، كزبرة، زيت زيتون، عصير ليمون</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~210</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">30غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">8غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">8غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">4️⃣ ورق عنب محشي بأرز بني وخضار</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> ورق عنب 8، أرز بني 120غ، بصل، طماطم، جزر، نعناع، شبت، زيت زيتون، عصير ليمون</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~130</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">5غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">22غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">3غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 6 - Dinner */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">وصفات العشاء القليلة السعرات</h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">5️⃣ سلطة الفول الأخضر مع طحينة خفيفة</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> فول أخضر 150غ، طماطم كرزية 8، خيار، بقدونس، طحينة قليلة الدسم، عصير ليمون، زيت زيتون</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~180</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">9غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">23غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">6غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">6️⃣ شوربة خضار صيفية مع كينوا</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> كينوا 50غ، كوسا 100غ، جزر 80غ، بصل أخضر، مرق خضار، كركم، زعتر، زيت زيتون</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~210</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">7غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">34غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">4غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 7 - Desserts */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">حلويات صحية مستوحاة من التراث</h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">7️⃣ بسبوسة جوز الهند قليلة السكر</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> دقيق سمر 100غ، جوز هند 50غ، عسل 2 ملعقة، حليب قليل الدسم 100مل، بيضة 1، خميرة، فانيليا، زيت زيتون</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~120</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">4غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">15غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">5غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-emerald-600 mb-3">8️⃣ كنافة قشطة كيتو باللوز</h4>
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4">
                    <p className="text-gray-600"><strong>المكونات:</strong> دقيق لوز 80غ، بياض بيض 2، كريمة خفق خالية الدسم 100مل، محلى ستيفيا، فستق، ماء زهر</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">~140</p>
                      <p className="text-sm text-gray-600">سعرة حرارية</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">6غ</p>
                      <p className="text-sm text-gray-600">بروتين</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">4غ</p>
                      <p className="text-sm text-gray-600">كربوهيدرات</p>
                    </div>
                    <div className="text-center bg-emerald-100 p-3 rounded-xl">
                      <p className="text-2xl font-bold text-emerald-700">12غ</p>
                      <p className="text-sm text-gray-600">دهون</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 8 - Storage Tips */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">نصائح لتخزين المكونات وتحضير الوجبات مسبقاً</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-2xl">
                    <span className="text-2xl">🧊</span>
                    <div>
                      <h4 className="font-bold text-emerald-700">تجميد البروتين</h4>
                      <p className="text-gray-600 text-sm">قطّع الدجاج أو السمك في أكياس فراغية مع قليل من عصير الليم</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-2xl">
                    <span className="text-2xl">🧂</span>
                    <div>
                      <h4 className="font-bold text-emerald-700">تحضير البهارات الممزوجة</h4>
                      <p className="text-gray-600 text-sm">اخلط الكمون، الكزبرة، الفلفل الحار، القرفة، والهيل</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-2xl">
                    <span className="text-2xl">🌿</span>
                    <div>
                      <h4 className="font-bold text-emerald-700">حفظ الأعشاب الطازجة</h4>
                      <p className="text-gray-600 text-sm">ضع الأعشاب في كوب ماء داخل الثلاجة واستخدمها خلال أسبوع</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-2xl">
                    <span className="text-2xl">🍚</span>
                    <div>
                      <h4 className="font-bold text-emerald-700">تحضير الحبوب والبقول مسبقاً</h4>
                      <p className="text-gray-600 text-sm">اسلق العدس والفاصوليا والحمص ودّعيها في الثلاجة</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 9 - Nutrition Table */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">ملاحق غذائية (قيمة الطاقة لكل 100غ)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-emerald-100">
                        <th className="p-3 text-right rounded-rtl">العنصر</th>
                        <th className="p-3 text-center">سعرة</th>
                        <th className="p-3 text-center">بروتين</th>
                        <th className="p-3 text-center">دهون</th>
                        <th className="p-3 text-center">كربوهيدرات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-3">برغل (مسلوق)</td><td className="p-3 text-center">83</td><td className="p-3 text-center">3.1غ</td><td className="p-3 text-center">0.4غ</td><td className="p-3 text-center">18.5غ</td></tr>
                      <tr className="border-b"><td className="p-3">فول أخضر (مسلق)</td><td className="p-3 text-center">70</td><td className="p-3 text-center">5.0غ</td><td className="p-3 text-center">0.5غ</td><td className="p-3 text-center">12.0غ</td></tr>
                      <tr className="border-b"><td className="p-3">سمك بلطي (مشوي)</td><td className="p-3 text-center">115</td><td className="p-3 text-center">22.0غ</td><td className="p-3 text-center">3.5غ</td><td className="p-3 text-center">0</td></tr>
                      <tr className="border-b"><td className="p-3">دقيق سمر</td><td className="p-3 text-center">350</td><td className="p-3 text-center">13.0غ</td><td className="p-3 text-center">2.5غ</td><td className="p-3 text-center">70</td></tr>
                      <tr className="border-b"><td className="p-3">عدس أحمر (مسلوق)</td><td className="p-3 text-center">116</td><td className="p-3 text-center">9.0غ</td><td className="p-3 text-center">0.4غ</td><td className="p-3 text-center">20</td></tr>
                      <tr className="border-b"><td className="p-3">كينوا (مسلوقة)</td><td className="p-3 text-center">120</td><td className="p-3 text-center">4.1غ</td><td className="p-3 text-center">1.9غ</td><td className="p-3 text-center">21</td></tr>
                      <tr className="border-b"><td className="p-3">طحينة</td><td className="p-3 text-center">595</td><td className="p-3 text-center">17.0غ</td><td className="p-3 text-center">53.0غ</td><td className="p-3 text-center">21</td></tr>
                      <tr><td className="p-3">عسل طبيعي</td><td className="p-3 text-center">304</td><td className="p-3 text-center">0.3غ</td><td className="p-3 text-center">0</td><td className="p-3 text-center">82</td></tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <div className="text-center mb-12">
                <p className="text-2xl font-bold text-emerald-600">بالهنا والشفا! 🌿🍲</p>
              </div>
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
