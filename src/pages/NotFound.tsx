import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="text-5xl md:text-6xl mb-6">This table isn't set.</h1>
      <p className="max-w-md text-dark/60 font-light mb-10">
        The page you're looking for wandered off. Let's get you back to something delicious.
      </p>
      <Button to="/">Back to Home</Button>
    </div>
  );
}
