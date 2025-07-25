import dotenv from "dotenv";
import axios from 'axios';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;


function cleanGeminiResponse(text) {
  if (!text) return "";
  return text
    .replace(/```json\s*/i, '')  // Remove starting ```json 
    .replace(/```/g, '')          // Remove ending ```
    .trim();
}

export const getRiskAnalysis = async (req, res) => {
  const { userText } = req.body;

  if (!userText) {
    return res.status(400).json({ error: "Please Enter a text first !" });
  }

  const prompt = `
    Analyze the following contract text for potential risks.

    Please return the result as a JSON object with the following keys:
    - "riskScore": a number from 0 to 100 indicating overall risk
    - "riskyClauses": a list of clauses that may pose risk, with a short explanation of why each is risky
    - "summary": a short summary (max 3 sentences) highlighting the key risk areas
    - "recommendations": 3 actionable review recommendations for a legal team

    Contract Text:
    ${userText}
  `;

  try {
    const response = await axios.post(
      GEMINI_URL,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const rawText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    const cleanedText = cleanGeminiResponse(rawText);

    try {
      const parsed = JSON.parse(cleanedText);
      res.json({ analysis: parsed });
    } catch (parseError) {
      console.error("Failed to parse Gemini JSON:", parseError.message);
      // Fallback: send cleaned text string if parsing fails
      res.json({ analysis: cleanedText });
    }
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to analyze risk" });
  }
};


