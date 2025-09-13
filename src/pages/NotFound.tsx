import { Link } from 'react-router-dom';
import { Cake } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-[80vh] bg-background">
      <div className="container-custom max-w-2xl">
        <div className="bg-white rounded-xl shadow-md p-10 text-center">
          <div className="mb-6 flex justify-center">
            <Cake className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-accent mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-text/80 text-lg mb-8">
            Oops! Looks like the cake you're looking for has been eaten already.
            Let's find you something else that's sweet and delicious!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/menu" className="btn btn-outline">
              Browse Our Cakes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;