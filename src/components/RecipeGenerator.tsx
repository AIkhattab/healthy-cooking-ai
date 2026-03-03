import React, { useState } from "react";
import { GoogleGenAI, Type } from "@google/genai";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Loader2, ChefHat, Flame, Clock, Utensils, ArrowLeft, Salad } from "lucide-react";

interface Recipe {
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
}

export default function RecipeGenerator({ onBack }: { onBack: () => void }) {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [goal, setGoal] = useState("");

  const generateRecipe = async () => {
    if (!goal) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `قم بإنشاء وصفة مصرية صحية لـ: ${goal}. 
        يجب أن تكون الاستجابة باللغة العربية بالكامل.
        تأكد من تضمين المعلومات الغذائية (السعرات الحرارية، البروتين، الكربوهيدرات، الدهون).
        ركز على المكونات التقليدية ولكن بلمسة صحية.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "اسم الوصفة" },
              description: { type: Type.STRING, description: "وصف الوصفة" },
              calories: { type: Type.NUMBER },
              protein: { type: Type.NUMBER },
              carbs: { type: Type.NUMBER },
              fats: { type: Type.NUMBER },
              ingredients: { type: Type.ARRAY, items: { type: Type.STRING }, description: "المكونات" },
              instructions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "خطوات التحضير" },
              prepTime: { type: Type.STRING, description: "وقت التحضير" },
            },
            required: ["name", "description", "calories", "protein", "carbs", "fats", "ingredients", "instructions", "prepTime"],
          },
        },
      });

      const data = JSON.parse(response.text || "{}");
      setRecipe(data);
    } catch (error) {
      console.error("Error generating recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-right">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="ml-2 h-4 w-4 rotate-180" /> العودة للرئيسية
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <ChefHat className="mx-auto h-12 w-12 text-emerald-600" />
          <h2 className="text-3xl font-bold">مولد الوصفات الذكي</h2>
          <p className="text-gray-600">ماذا تشتهي اليوم؟ سنجعلها صحية ومصرية.</p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="مثلاً: كشري صحي، ملوخية قليلة الكربوهيدرات، فلافل غنية بالبروتين..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && generateRecipe()}
          />
          <Button onClick={generateRecipe} disabled={loading || !goal}>
            {loading ? <Loader2 className="animate-spin" /> : "توليد"}
          </Button>
        </div>

        {recipe && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid gap-6"
          >
            <Card className="overflow-hidden border-none shadow-xl bg-white/80 backdrop-blur">
              <CardHeader className="bg-emerald-600 text-white p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl mb-2">{recipe.name}</CardTitle>
                    <p className="text-emerald-50 opacity-90">{recipe.description}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <Clock size={16} /> {recipe.prepTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Nutrition Grid */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-emerald-50 rounded-2xl">
                    <Flame className="mx-auto text-emerald-600 mb-1" size={20} />
                    <div className="text-xl font-bold">{recipe.calories}</div>
                    <div className="text-xs text-gray-500 uppercase">سعرة</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-2xl">
                    <Utensils className="mx-auto text-blue-600 mb-1" size={20} />
                    <div className="text-xl font-bold">{recipe.protein}ج</div>
                    <div className="text-xs text-gray-500 uppercase">بروتين</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-2xl">
                    <Salad className="mx-auto text-orange-600 mb-1" size={20} />
                    <div className="text-xl font-bold">{recipe.carbs}ج</div>
                    <div className="text-xs text-gray-500 uppercase">كربوهيدرات</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-2xl">
                    <Flame className="mx-auto text-purple-600 mb-1" size={20} />
                    <div className="text-xl font-bold">{recipe.fats}ج</div>
                    <div className="text-xs text-gray-500 uppercase">دهون</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <Utensils size={20} className="text-emerald-600" /> المكونات
                    </h4>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <ChefHat size={20} className="text-emerald-600" /> طريقة التحضير
                    </h4>
                    <ol className="space-y-4">
                      {recipe.instructions.map((step, i) => (
                        <li key={i} className="flex gap-4 text-gray-700">
                          <span className="font-bold text-emerald-600">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
