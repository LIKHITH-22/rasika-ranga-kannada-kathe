
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  year: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "ಮಳೆಯ ಮೊದಲ ಹನಿ",
    description: "The story of a village's first rainfall after years of drought, symbolizing hope and renewal.",
    thumbnail: "https://source.unsplash.com/photo-1500673922987-e212871fec22",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "14:25",
    year: "2023"
  },
  {
    id: 2,
    title: "ನಾಡಿನ ಅಡುಗೆ",
    description: "A culinary journey through Karnataka's diverse food traditions and the stories they tell.",
    thumbnail: "https://source.unsplash.com/photo-1426604966848-d7adac402bff",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "18:10",
    year: "2022"
  },
  {
    id: 3,
    title: "ಮಧುಮಗಳು",
    description: "The tale of traditional honey gatherers in the Western Ghats and their harmonious relationship with nature.",
    thumbnail: "https://source.unsplash.com/photo-1523712999610-f77fbcfc3843",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "22:45",
    year: "2021"
  }
];

const MoviesSection = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsDialogOpen(true);
  };

  return (
    <section id="movies" className="py-24 bg-kannada-ivory">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kannada-black">
            <span className="text-kannada-red">Short</span> Films
          </h2>
          <div className="h-1 w-20 bg-kannada-gold mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Visual stories that capture the essence of Karnataka's culture, traditions, and contemporary life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={movie.thumbnail} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button 
                    onClick={() => handleMovieClick(movie)}
                    variant="outline"
                    className="rounded-full bg-kannada-red/80 hover:bg-kannada-red border-none text-white"
                  >
                    <Play size={20} className="mr-2" />
                    Watch
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-kannada-red/80 text-white text-xs px-2 py-1 rounded">
                  {movie.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{movie.title}</h3>
                  <span className="text-sm text-gray-500">{movie.year}</span>
                </div>
                <p className="text-gray-600 text-sm">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl text-kannada-red">
              {selectedMovie?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative pt-[56.25%] w-full">
            {selectedMovie && (
              <iframe
                src={selectedMovie.videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="mt-2">
            <p className="text-gray-600">{selectedMovie?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MoviesSection;
