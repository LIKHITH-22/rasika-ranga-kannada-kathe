
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, Download, ChevronDown, File } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";

interface Story {
  id: number;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  genre: string;
  readTime: string;
  pdfUrl?: string; // Optional PDF URL
}

const stories: Story[] = [
  {
    id: 1,
    title: "ಗಿರಿಯ ಮೇಲಿನ ಮನೆ",
    summary: "A tale of an old house on a hilltop and the generations that passed through its doors.",
    content: `
      ಗಿರಿಯ ಮೇಲಿನ ಮನೆ ಬಹಳ ಹಳೆಯದು. ಯಾರೋ ಹೇಳುವ ಪ್ರಕಾರ, ೧೮೫೪ರಲ್ಲಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿತು. ಮನೆಯ ಗೋಡೆಗಳ ಮೇಲೆ ಕಂಡುಬರುವ ಬಿರುಕುಗಳಲ್ಲಿ ಕಾಲದ ಕತೆಗಳು ಅಡಗಿವೆ.
      
      ನಾನು ಮೊದಲ ಬಾರಿ ಆ ಮನೆಯನ್ನು ನೋಡಿದಾಗ, ನನ್ನ ವಯಸ್ಸು ಕೇವಲ ಹತ್ತು. ಅಜ್ಜಿ ಹೇಳುತ್ತಿದ್ದ ಕಥೆಗಳಲ್ಲಿ ಆ ಮನೆ ನನಗೆ ಕನಸಿನಂತೆ ಕಂಡಿತು. "ಅಲ್ಲಿ ಹೋಗಬೇಡ," ಅವಳು ಎಚ್ಚರಿಸುತ್ತಿದ್ದಳು, "ಆ ಮನೆಯಲ್ಲಿ ಭೂತಗಳಿವೆ."
      
      ಆದರೆ ನನ್ನ ಕುತೂಹಲ ಹೆಚ್ಚಾಯಿತು. ಮಳೆಗಾಲದ ಒಂದು ದಿನ, ಧೈರ್ಯವನ್ನು ಕೂಡಿಸಿಕೊಂಡು, ನಾನು ಮತ್ತು ನನ್ನ ಗೆಳೆಯ ರವಿ, ಬೆಟ್ಟವನ್ನು ಹತ್ತಲು ಹೊರಟೆವು.
      
      ಹಳೆಯ ಮನೆಯ ಮುಂದೆ ನಿಂತಾಗ, ನಮ್ಮ ಹೃದಯದ ಬಡಿತ ಹೆಚ್ಚಾಯಿತು. ಕಿಟಕಿಯಿಂದ ಒಳಗೆ ನೋಡಿದಾಗ, ಧೂಳು ತುಂಬಿದ ಫರ್ನಿಚರ್, ಹಳೆಯ ಫೋಟೋಗಳು, ಮತ್ತು ಹರಿದ ಪರದೆಗಳು ಕಂಡವು.
      
      ಆಗ, ಹಿಂದಿನಿಂದ ಒಂದು ಮೆಲ್ಲನೆಯ ಧ್ವನಿ, "ನೀವು ಯಾರು ಮಕ್ಕಳೇ?" ನಮ್ಮನ್ನು ಬೆಚ್ಚಿಬೀಳಿಸಿತು.
      
      ಒಬ್ಬ ವೃದ್ಧ ಅಲ್ಲಿ ನಿಂತಿದ್ದರು - ಬೆಳ್ಳಿ ಕೂದಲು, ಸ್ನೇಹಪರ ಮುಖ, ಮತ್ತು ಕೈಯಲ್ಲಿ ಒಂದು ಹಳೆಯ ಕೀಲಿಕೈ.
      
      "ನಾನು ಕೃಷ್ಣಮೂರ್ತಿ," ಅವರು ತಮ್ಮನ್ನು ಪರಿಚಯಿಸಿದರು, "ಈ ಮನೆಯ ಪಾಲಕ."
      
      ಅದು ಆರಂಭವಾಯಿತು - ನಮ್ಮ ಮತ್ತು ಕೃಷ್ಣಮೂರ್ತಿ ಅಜ್ಜನ ಸ್ನೇಹ. ಅವರು ನಮಗೆ ಮನೆಯನ್ನು ತೋರಿಸಿದರು - ಪ್ರತಿಯೊಂದು ಕೋಣೆ, ಪ್ರತಿಯೊಂದು ಮೂಲೆಯಲ್ಲಿ ಒಂದು ಕತೆ ಇತ್ತು.
      
      ಆ ಮನೆ ಭೂತಗಳಿಂದ ತುಂಬಿರಲಿಲ್ಲ, ಆದರೆ ನೆನಪುಗಳಿಂದ - ಯುದ್ಧಗಳು, ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟ, ಸಂತೋಷ, ದುಃಖ, ಜನನ ಮತ್ತು ಮರಣ.
      
      ಇಂದು, ಮೂವತ್ತು ವರ್ಷಗಳ ನಂತರ, ಆ ಮನೆ ನನ್ನದಾಗಿದೆ. ಕೃಷ್ಣಮೂರ್ತಿ ಅಜ್ಜ ನಮ್ಮನ್ನು ಬಿಟ್ಟು ಹೋದರು, ಆದರೆ ಮನೆಯನ್ನು ನನಗೆ ಉಯಿಲು ಬರೆದರು. "ನಿನ್ನ ಕುತೂಹಲ ಈ ಮನೆಯನ್ನು ಉಳಿಸುತ್ತದೆ," ಎಂದು ಅವರು ನನಗೆ ಹೇಳಿದರು.
      
      ನಾನು ಈಗ ಈ ಗಿರಿಯ ಮೇಲಿನ ಮನೆಯಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ, ಇದರ ಕತೆಗಳನ್ನು ಬರೆಯುತ್ತೇನೆ, ಮತ್ತು ಪ್ರತಿದಿನ, ಹೊಸ ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇನೆ.
    `,
    coverImage: "https://source.unsplash.com/photo-1466442929976-97f336a657be",
    genre: "Drama",
    readTime: "10 min",
    pdfUrl: "/stories/giriya-melina-mane.pdf"
  },
  {
    id: 2,
    title: "ಚಂದ್ರನ ಬೆಳಕು",
    summary: "When moonlight reveals secrets buried deep beneath the village's oldest banyan tree.",
    content: `
      ನನ್ನ ಅಜ್ಜ ಹೇಳುತ್ತಿದ್ದರು, "ಹುಣ್ಣಿಮೆಯ ರಾತ್ರಿ, ಆಲದ ಮರದ ಕೆಳಗೆ ಕೂತರೆ, ಚಂದ್ರನ ಬೆಳಕು ನಿಮಗೆ ಯಾವುದೋ ಗುಟ್ಟನ್ನು ಬಿಚ್ಚುತ್ತದೆ."
      
      ಗ್ರಾಮದ ಹಿರಿಯರು ಈ ಕತೆಯನ್ನು ನಂಬುತ್ತಿದ್ದರು, ಆದರೆ ಹೊಸ ಪೀಳಿಗೆ ಇದನ್ನು ಬರೀ ಮೂಢನಂಬಿಕೆ ಎಂದು ಕರೆಯುತ್ತಾರೆ.
      
      ಅರವತ್ತು ವರ್ಷದ ರಾಮಣ್ಣ, ಗ್ರಾಮದ ಅತಿ ಹಿರಿಯ ವ್ಯಕ್ತಿ, ಬೇಸಿಗೆಯ ಸಂಜೆಗಳಲ್ಲಿ, ಮರದ ಕೆಳಗೆ ಕೂತು, ಹುಡುಗರಿಗೆ ಹಳೆಯ ಕತೆಗಳನ್ನು ಹೇಳುತ್ತಿದ್ದರು. "ಹುಣ್ಣಿಮೆಯ ರಾತ್ರಿಯಲ್ಲಿ, ನನ್ನ ತಾತ ಈ ಮರದ ಕೆಳಗೆ ಅವರ ಜೀವನದ ಪ್ರೇಮವನ್ನು ಭೇಟಿಯಾಗುತ್ತಿದ್ದರು," ಎಂದು ರಾಮಣ್ಣ ಹೇಳುತ್ತಿದ್ದರು, "ಮತ್ತು ಅಲ್ಲಿ, ಅವರು ತಮ್ಮ ಪ್ರೇಮವನ್ನು ವ್ಯಕ್ತಪಡಿಸಿದ ಪತ್ರಗಳನ್ನು ಮರದ ಪೊಟರೆಯಲ್ಲಿ ಅಡಗಿಸಿದರು."
      
      ಎಲ್ಲರೂ ಆ ಕತೆಗಳಿಗೆ ನಗುತ್ತಿದ್ದರು, ಆದರೆ ಯಾರೂ ಹುಣ್ಣಿಮೆಯ ರಾತ್ರಿಯಲ್ಲಿ ಮರದ ಬಳಿ ಹೋಗಲು ಧೈರ್ಯ ಮಾಡುತ್ತಿರಲಿಲ್ಲ.
      
      ಒಂದು ದಿನ, ರಾಮಣ್ಣ ನನ್ನನ್ನು ಕರೆದು, "ಈ ತಿಂಗಳ ಹುಣ್ಣಿಮೆಯ ರಾತ್ರಿ, ನೀನು ಮರದ ಬಳಿ ಬರಬೇಕು," ಎಂದು ಹೇಳಿದರು. 
      
      ಆ ರಾತ್ರಿಯಲ್ಲಿ, ಭಯದಿಂದಾದರೂ ಕುತೂಹಲದಿಂದಾದರೂ, ನಾನು ಮರದ ಬಳಿ ಹೋದೆ. ಚಂದ್ರನ ಹಾಲಿನಂತಹ ಬೆಳಕಿನಲ್ಲಿ, ರಾಮಣ್ಣ ಮರದ ಪೊಟರೆಯೊಳಗೆ ಕೈ ಹಾಕಿ, ಒಂದು ಹಳೆಯ ಡಬ್ಬಿಯನ್ನು ಹೊರಗೆ ತೆಗೆದರು.
      
      "ಇದು ನನ್ನ ತಾತ ಮತ್ತು ಅಜ್ಜಿಯ ಪ್ರೇಮ ಪತ್ರಗಳು," ಅವರು ಹೇಳಿದರು, "ಮತ್ತು ಇಲ್ಲಿ, ಇದು ನನ್ನದು." 
      
      ರಾಮಣ್ಣ ಮತ್ತೊಂದು ಪತ್ರ ತೆಗೆದು, ನನಗೆ ತೋರಿಸಿದರು. ಅದು ಅವರ ಯೌವನದ ಪ್ರೇಮಿಯ, ಲಕ್ಷ್ಮಿಯ ಫೋಟೋ ಮತ್ತು ಒಂದು ಪತ್ರ ಇತ್ತು.
      
      "ನಮ್ಮ ಜಾತಿಗಳು ಬೇರೆಯಾಗಿದ್ದವು, ನಮಗೆ ಒಟ್ಟಿಗೆ ಇರಲು ಅನುಮತಿ ಇರಲಿಲ್ಲ," ರಾಮಣ್ಣ ಹೇಳಿದರು, "ಆದರೆ ನಮ್ಮ ಪ್ರೇಮ ಇಲ್ಲಿ, ಈ ಮರದಲ್ಲಿ ಜೀವಂತವಾಗಿದೆ." 
      
      ಅಂದಿನಿಂದ, ಪ್ರತಿ ಹುಣ್ಣಿಮೆಯ ರಾತ್ರಿ, ಈ ಆಲದ ಮರದ ಕೆಳಗೆ, ಯಾರಾದರೂ ಬಂದರೆ, ಅವರು ಮರದ ಪೊಟರೆಯಲ್ಲಿ ತಮ್ಮ ಗುಟ್ಟುಗಳನ್ನು ಅಡಗಿಸುತ್ತಾರೆ - ಪ್ರೇಮ ಪತ್ರಗಳು, ಕನಸುಗಳು, ಆಶೆಗಳು, ಭಯಗಳು...
      
      ಚಂದ್ರನ ಬೆಳಕು, ನಮ್ಮೆಲ್ಲರ ಗುಟ್ಟುಗಳನ್ನು ಕಾಪಾಡುತ್ತದೆ, ಇದು ನಮ್ಮ ಗ್ರಾಮದ ಹೃದಯ.
    `,
    coverImage: "https://source.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    genre: "Romance",
    readTime: "8 min",
    pdfUrl: "/stories/chandrana-belaku.pdf"
  },
  {
    id: 3,
    title: "ರೈತನ ಕನಸು",
    summary: "A farmer's journey through drought, innovation, and the dreams that transform a village.",
    content: `
      ಮಳೆ ಕಡಿಮೆಯಾದಾಗ, ಎಲ್ಲರೂ ಊರು ಬಿಡಲು ಸಿದ್ಧರಾದರು. ಆದರೆ ಮಲ್ಲಿಕಾರ್ಜುನ, ಊರಿನ ಅತ್ಯಂತ ಬಡ ರೈತನಿಗೆ, ಹೋಗಲು ಬೇರೆ ಜಾಗವಿರಲಿಲ್ಲ. ಕೆಲವು ಎಕರೆ ಭೂಮಿ, ಒಂದು ಹಳೆಯ ಮನೆ, ಮತ್ತು ಐದು ಮಕ್ಕಳು - ಇದೇ ಅವನ ಸಂಪತ್ತು.
      
      "ನೀರಿಲ್ಲದೆ ನಾವು ಬದುಕಲಾರೆವು," ಅವನ ಹೆಂಡತಿ ಹೇಳಿದಳು.
      
      ಮಲ್ಲಿಕಾರ್ಜುನ ಮತ್ತು ಅವನ ಹೆಂಡತಿ ಮಾತಾಡುತ್ತಿದ್ದಾಗ, ಅವರ ಇಪ್ಪತ್ತು ವರ್ಷದ ಮಗ ಚಂದ್ರು, ಹೊರಗಿನಿಂದ ಬಂದು, "ಅಪ್ಪಾ, ನಾನು ಒಂದು ವಿಧಾನ ಕಂಡುಹಿಡಿದಿದ್ದೇನೆ," ಎಂದು ಹೇಳಿದ.
      
      ಸಣ್ಣವಯಸ್ಸಿನಿಂದಲೇ, ಚಂದ್ರು ವಿಜ್ಞಾನದ ಪುಸ್ತಕಗಳನ್ನು ಓದುತ್ತಿದ್ದ. ಊರಿನ ಶಾಲೆಯಲ್ಲಿ ಓದುವಾಗ, "ಆ ಹುಡುಗ ಹುಚ್ಚ, ಯಾವಾಗಲೂ ವಿಚಿತ್ರವಾದ ಪ್ರಯೋಗಗಳನ್ನು ಮಾಡುತ್ತಾನೆ," ಎಂದು ಜನ ಅವನ ಬಗ್ಗೆ ಹೇಳುತ್ತಿದ್ದರು.
      
      ಚಂದ್ರು ಅವರನ್ನು ಹೊಲಕ್ಕೆ ಕರೆದೊಯ್ದ. ಅಲ್ಲಿ, ಅವನು ಕಟ್ಟಿದ ವಿಚಿತ್ರ ಯಂತ್ರವನ್ನು ತೋರಿಸಿದ - ಪ್ಲಾಸ್ಟಿಕ್ ಶೀಟ್‌ಗಳು, ಕೊಳವೆಗಳು, ಮತ್ತು ಹಳೆಯ ತಂತಿಗಳನ್ನು ಬಳಸಿ ಮಾಡಿದ ಯಂತ್ರ.
      
      "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?" ಮಲ್ಲಿಕಾರ್ಜುನ ಕೇಳಿದ.
      
      "ಬೆಳಗಿನಜಾವ, ನೀರಿನ ಹನಿಗಳು ಗಾಳಿಯಲ್ಲಿರುತ್ತವೆ, ಅಪ್ಪಾ. ನಾವು ಅವುಗಳನ್ನು ಹಿಡಿಯಬಹುದು," ಚಂದ್ರು ಹೇಳಿದ, "ಈ ಪ್ಲಾಸ್ಟಿಕ್ ನೀರಿನ ಹನಿಗಳನ್ನು ಹಿಡಿದು, ನಮ್ಮ ಟ್ಯಾಂಕ್‌ಗೆ ಸಂಗ್ರಹಿಸುತ್ತದೆ."
      
      "ಇದು ಎಂದಿಗೂ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ," ಮಲ್ಲಿಕಾರ್ಜುನನ ಹೆಂಡತಿ ಹೇಳಿದಳು, "ನೀನು ಈ ಅಮೂಲ್ಯವಾದ ಸಮಯವನ್ನು ವ್ಯರ್ಥ ಮಾಡುತ್ತಿರುವೆ."
      
      ಆದರೆ ಚಂದ್ರು ತನ್ನ ವಿಶ್ವಾಸವನ್ನು ಕಳೆದುಕೊಳ್ಳಲಿಲ್ಲ. ರಾತ್ರಿಯಿಡೀ, ಅವನು ತನ್ನ ಯಂತ್ರವನ್ನು ಸರಿಪಡಿಸಿದ.
      
      ಮರುದಿನ ಬೆಳಗಿನಜಾವ, ಅದ್ಭುತವಾಗಿ, ಟ್ಯಾಂಕ್‌ನಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು ಸಂಗ್ರಹವಾಗಿತ್ತು. "ಇದು ಸಾಕಾಗುವುದಿಲ್ಲ," ಮಲ್ಲಿಕಾರ್ಜುನ ಹೇಳಿದ, "ಆದರೆ ಇದು ಪ್ರಾರಂಭ."
      
      ವಾರಗಳ ಕಾಲ, ಚಂದ್ರು ತನ್ನ ಯಂತ್ರವನ್ನು ಸುಧಾರಿಸಿದ, ವಿಸ್ತರಿಸಿದ. ಒಂದು ಯಂತ್ರವಾಯಿತು, ನಂತರ ಐದು, ನಂತರ ಹತ್ತು. ಧೀರೆ ಧೀರೆ, ಅವರು ಸಾಕಷ್ಟು ನೀರನ್ನು ಸಂಗ್ರಹಿಸಲು ಪ್ರಾರಂಭಿಸಿದರು - ಕುಡಿಯಲು, ಬೆಳೆ ಬೆಳೆಯಲು, ಮತ್ತು ಜೀವಿಸಲು.
      
      ಊರಿನ ಇತರ ರೈತರು ಚಂದ್ರುವಿನ ಯಂತ್ರದ ಬಗ್ಗೆ ಕೇಳಿದರು, ಮತ್ತು ಅವರೂ ಇಂತಹ ಯಂತ್ರಗಳನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರಾರಂಭಿಸಿದರು.
      
      ಐದು ವರ್ಷಗಳ ನಂತರ, ಚಂದ್ರುವಿನ ಊರಿನಲ್ಲಿ ಹಸುರು ಹೆಚ್ಚಾಗಿತ್ತು, ಮತ್ತು ಊರಿನ ಗಾಳಿಯಲ್ಲಿ ನೀರಿನ ಹನಿಗಳನ್ನು ಹಿಡಿಯುವ ಯಂತ್ರಗಳು ಎಲ್ಲೆಡೆ ಇದ್ದವು. ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳಿಂದ ಜನರು ಚಂದ್ರುವಿನ ತಂತ್ರಜ್ಞಾನವನ್ನು ನೋಡಲು ಬರುತ್ತಿದ್ದರು.
      
      ದೊಡ್ಡ ಕಂಪನಿಗಳು ಬಂದು ಚಂದ್ರುವಿಗೆ ಕೆಲಸವನ್ನು ನೀಡಿದವು, ಆದರೆ ಅವನು ನಿರಾಕರಿಸಿದ. "ನನ್ನದು ಒಂದೇ ಕನಸು - ನನ್ನ ಊರು ಹಸುರಾಗಿರಬೇಕು," ಎಂದು ಅವನು ಹೇಳಿದ.
      
      ಇಂದು, ಮಲ್ಲಿಕಾರ್ಜುನನ ಮಗ ಚಂದ್ರು, 'ನೀರಿನ ಮನುಷ್ಯ' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತಾನೆ, ಮತ್ತು ಅವನ ತಂತ್ರಜ್ಞಾನ ರಾಜ್ಯದ ಹಲವು ಬರಪೀಡಿತ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬಳಸಲ್ಪಡುತ್ತಿದೆ.
      
      ಸಣ್ಣ ರೈತನ ಕನಸಿನಿಂದ, ಒಂದು ಕ್ರಾಂತಿ ಹುಟ್ಟಿತು.
    `,
    coverImage: "https://source.unsplash.com/photo-1500673922987-e212871fec22",
    genre: "Folk Tale",
    readTime: "12 min",
    pdfUrl: "/stories/raitana-kanasu.pdf"
  }
];

const StoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAllContent, setShowAllContent] = useState(false);

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story);
    setIsDialogOpen(true);
    setShowAllContent(false);
  };

  const handleDownload = (story: Story) => {
    if (story.pdfUrl) {
      // In a real application, this would be a real download link
      toast({
        title: "Download Started",
        description: `${story.title} is now downloading as PDF.`,
        duration: 3000,
      });
      
      // Simulate download (in real application, this would be a direct link)
      const link = document.createElement('a');
      link.href = story.pdfUrl;
      link.download = `${story.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="stories" className="py-24 bg-gradient-to-b from-kannada-blue/5 to-kannada-ivory">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center relative">
          {/* Karnataka-inspired decorative element */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-kannada-gold/10 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-kannada-gold/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-kannada-gold/30 rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kannada-black inline-flex flex-col items-center">
            <span className="text-kannada-red">ಕನ್ನಡ</span> 
            <span>Stories</span>
          </h2>
          <div className="h-1 w-24 bg-kannada-gold mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            ಕರ್ನಾಟಕದ ಸಂಪ್ರದಾಯಗಳನ್ನು ಹೊಸ ಕಥೆಗಳ ಮೂಲಕ ಪರಿಚಯಿಸುತ್ತೇವೆ.
            <br />
            <span className="text-sm text-gray-500">Written tales that bring Karnataka's rich traditions and modern narratives to life.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-kannada-gold/20 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={story.coverImage} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="inline-block bg-kannada-gold text-kannada-black text-xs px-3 py-1 rounded-full mb-2 font-medium">
                      {story.genre}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{story.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Book size={16} className="mr-1" /> {story.readTime} read
                  </span>
                  <span className="text-kannada-red text-sm font-medium">ಓದಿರಿ (Read)</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{story.summary}</p>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleStoryClick(story)}
                    variant="default"
                    className="flex-1 bg-kannada-blue hover:bg-kannada-blue/90 text-white rounded-full"
                  >
                    <BookOpen size={16} className="mr-2" /> Read
                  </Button>
                  <Button 
                    onClick={() => handleDownload(story)}
                    variant="outline"
                    className="border-kannada-gold text-kannada-gold hover:bg-kannada-gold/10 rounded-full"
                  >
                    <Download size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-hidden bg-kannada-ivory/95 border border-kannada-gold/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-kannada-red flex items-center gap-2">
              {selectedStory?.title}
              {selectedStory?.pdfUrl && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="ml-4 text-xs border-kannada-gold text-kannada-gold hover:bg-kannada-gold/10"
                  onClick={() => selectedStory && handleDownload(selectedStory)}
                >
                  <File size={14} className="mr-1" /> Download PDF
                </Button>
              )}
            </DialogTitle>
            <DialogDescription>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                <span>{selectedStory?.genre}</span>
                <span className="flex items-center">
                  <BookOpen size={14} className="mr-1" /> {selectedStory?.readTime} read
                </span>
              </div>
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="max-h-[calc(90vh-180px)]">
            <div className="space-y-6 p-2">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-md border border-kannada-gold/20">
                <img 
                  src={selectedStory?.coverImage} 
                  alt={selectedStory?.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`space-y-4 whitespace-pre-line text-gray-700 ${!showAllContent ? "line-clamp-10" : ""}`}>
                {selectedStory?.content}
              </div>
              
              {!showAllContent && (
                <div className="pt-4 flex justify-center">
                  <Button 
                    variant="ghost"
                    onClick={() => setShowAllContent(true)}
                    className="text-kannada-blue flex items-center gap-1"
                  >
                    See More <ChevronDown size={16} />
                  </Button>
                </div>
              )}
              
              <div className="pt-6 border-t border-kannada-gold/20 flex justify-between">
                <Button
                  variant="outline"
                  className="border-kannada-red text-kannada-red hover:bg-kannada-red/10"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
                
                <Button 
                  onClick={() => selectedStory && handleDownload(selectedStory)}
                  className="bg-kannada-gold hover:bg-kannada-gold/90 text-kannada-black"
                >
                  <Download size={16} className="mr-2" /> Download as PDF
                </Button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StoriesSection;
