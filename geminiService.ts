
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with process.env.API_KEY using the named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeReportSeverity = async (description: string) => {
  try {
    // Correct usage of ai.models.generateContent with model name and contents
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analise a seguinte descrição de problema em poste de luz e classifique a urgência de 1 a 5 (5 sendo perigo imediato como fios soltos) e dê uma breve recomendação técnica: "${description}"`,
      config: {
        responseMimeType: "application/json",
      },
    });
    // Access response text using the .text property
    return response.text;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return null;
  }
};

export const generateExecutiveSummary = async (reports: any[]) => {
  try {
    const prompt = `Gere um resumo executivo para o prefeito sobre o estado da iluminação pública baseado nestes dados: ${JSON.stringify(reports)}. Foque em bairros críticos e eficiência de resolução.`;
    // Correct usage of ai.models.generateContent with model name and contents
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    // Access response text using the .text property
    return response.text;
  } catch (error) {
    console.error("Gemini Summary Error:", error);
    return "Não foi possível gerar o resumo automático.";
  }
};