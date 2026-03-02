import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddNewBookPage = () => {
  return (
    <div className="space-y-6">
      <section className="glass-morphism relative overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9">
        <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary-admin/40 blur-[90px]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-admin">
            Admin Panel
          </p>
          <h1 className="mt-3 font-bebas-neue text-5xl tracking-[0.08em] text-white sm:text-6xl">
            Add New Book
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-light-100/80 sm:text-base">
            This page is currently UI-only for admin users. It does not create
            API calls or write to the database.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <form className="glass-morphism space-y-5 rounded-3xl border border-white/10 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm text-light-100/80">
                Book Title
              </label>
              <Input
                id="title"
                placeholder="The Great Gatsby"
                className="h-12 border-white/15 bg-white/5 text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="author" className="text-sm text-light-100/80">
                Author
              </label>
              <Input
                id="author"
                placeholder="F. Scott Fitzgerald"
                className="h-12 border-white/15 bg-white/5 text-white"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="space-y-2">
              <label htmlFor="genre" className="text-sm text-light-100/80">
                Genre
              </label>
              <Input
                id="genre"
                placeholder="Fiction"
                className="h-12 border-white/15 bg-white/5 text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="rating" className="text-sm text-light-100/80">
                Rating
              </label>
              <Input
                id="rating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                placeholder="4.8"
                className="h-12 border-white/15 bg-white/5 text-white"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="totalCopies"
                className="text-sm text-light-100/80"
              >
                Total Copies
              </label>
              <Input
                id="totalCopies"
                type="number"
                min="1"
                placeholder="10"
                className="h-12 border-white/15 bg-white/5 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm text-light-100/80">
              Description
            </label>
            <Textarea
              id="description"
              rows={5}
              placeholder="Add a concise, reader-friendly description..."
              className="border-white/15 bg-white/5 text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="summary" className="text-sm text-light-100/80">
              Summary
            </label>
            <Textarea
              id="summary"
              rows={8}
              placeholder="Write a richer summary for the details page..."
              className="border-white/15 bg-white/5 text-white"
            />
          </div>
        </form>

        <aside className="space-y-6">
          <div className="glass-morphism rounded-3xl border border-white/10 p-6">
            <h2 className="font-bebas-neue text-3xl tracking-widest text-white">
              Media & Theme
            </h2>
            <div className="mt-5 space-y-4">
              <div className="space-y-2">
                <label htmlFor="coverUrl" className="text-sm text-light-100/80">
                  Cover Image URL
                </label>
                <Input
                  id="coverUrl"
                  placeholder="https://..."
                  className="h-12 border-white/15 bg-white/5 text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="videoUrl" className="text-sm text-light-100/80">
                  Preview Video URL
                </label>
                <Input
                  id="videoUrl"
                  placeholder="/sample-video.mp4"
                  className="h-12 border-white/15 bg-white/5 text-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="coverColor"
                  className="text-sm text-light-100/80"
                >
                  Cover Theme Color
                </label>
                <Input
                  id="coverColor"
                  placeholder="#1c1f40"
                  className="h-12 border-white/15 bg-white/5 text-white"
                />
              </div>
            </div>
          </div>

          <div className="glass-morphism rounded-3xl border border-primary-admin/25 bg-primary-admin/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
              Preview
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Book Card Snapshot
            </h3>
            <p className="mt-2 text-sm text-light-100/80">
              Fill in the form to prepare content. Backend wiring can be added
              later to save this data.
            </p>

            <div className="mt-6 flex gap-3">
              <Button
                type="button"
                className="bg-primary-admin text-white hover:bg-primary-admin/90"
              >
                Save Draft
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-white/15 bg-white/5 text-light-100 hover:bg-white/10 hover:text-white"
              >
                Preview
              </Button>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default AddNewBookPage;
