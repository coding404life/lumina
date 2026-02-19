const TooFastPage = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold uppercase">Whoa, too fast!</h1>
      <p className="text-lg text-center">
        looks like you've a little too much energy. Please slow down.
      </p>
      <p className="text-lg text-center">
        You are making too many requests. Please try again later.
      </p>
    </main>
  );
};

export default TooFastPage;
