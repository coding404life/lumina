"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { addBookSchema, type AddBookSchema } from "@/lib/validations";
import { BookFormInput } from "@/components/admin/forms/BookFormInput";
import ImageUpload from "@/components/ImageUpload";
import { createNewBook } from "@/lib/actions/newBook";
import { toast } from "sonner";

const AddNewBookPage = () => {
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  const defaultValues: AddBookSchema = {
    title: "",
    author: "",
    genre: "",
    rating: 0,
    totalCopies: 1,
    availableCopies: 1,
    description: "",
    coverImage: "",
  };

  const handleSubmit = async (data: AddBookSchema) => {
    const result = await createNewBook(data);
    if (result.success) {
      setIsPublishModalOpen(false);
      toast.success(result.message);
      form.reset();
    } else {
      toast.error(result.error);
    }
  };

  const form = useForm({
    resolver: zodResolver(addBookSchema),
    defaultValues,
  });

  return (
    <div className="relative space-y-6">
      <section className="glass-morphism relative overflow-hidden rounded-3xl border border-white/10 p-7 sm:p-9">
        <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary-admin/40 blur-[90px]" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-primary-admin">
            Admin Panel
          </p>
          <h1 className="mt-3 font-bebas-neue text-5xl tracking-[0.08em] text-white sm:text-6xl">
            Add New Book
          </h1>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <form className="glass-morphism space-y-5 rounded-3xl border border-white/10 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <BookFormInput
              id="title"
              label="Book Title"
              placeholder="The Great Gatsby"
              register={form.register}
              error={form.formState.errors.title?.message}
            />

            <BookFormInput
              id="author"
              label="Author"
              placeholder="F. Scott Fitzgerald"
              register={form.register}
              error={form.formState.errors.author?.message}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <BookFormInput
              id="genre"
              label="Genre"
              placeholder="Fiction"
              register={form.register}
              error={form.formState.errors.genre?.message}
            />

            <BookFormInput
              id="rating"
              label="Rating"
              type="number"
              min={0}
              max={5}
              step="0.1"
              placeholder="4.8"
              register={form.register}
              error={form.formState.errors.rating?.message}
            />

            <BookFormInput
              id="totalCopies"
              label="Total Copies"
              type="number"
              min={1}
              placeholder="10"
              register={form.register}
              error={form.formState.errors.totalCopies?.message}
            />

            <BookFormInput
              id="availableCopies"
              label="Available Copies"
              type="number"
              min={0}
              placeholder="0"
              register={form.register}
              error={form.formState.errors.availableCopies?.message}
            />
          </div>

          <BookFormInput
            id="description"
            label="Description"
            placeholder="Add a concise, reader-friendly description..."
            isTextArea
            register={form.register}
            error={form.formState.errors.description?.message}
          />
        </form>

        <aside className="space-y-6">
          <div className="glass-morphism rounded-3xl border border-white/10 p-6">
            <h2 className="font-bebas-neue text-3xl tracking-widest text-white">
              Book Cover
            </h2>
            <div className="mt-5">
              <Controller
                name="coverImage"
                control={form.control}
                render={({ field }) => (
                  <ImageUpload
                    onFileChange={field.onChange}
                    defaultValue={field.value}
                  />
                )}
              />
              {form.formState.errors.coverImage && (
                <p className="text-xs text-red-500 mt-2">
                  {form.formState.errors.coverImage.message}
                </p>
              )}
            </div>
          </div>

          <div className="glass-morphism rounded-3xl border border-primary-admin/25 bg-primary-admin/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
              Actions
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Ready To Publish
            </h3>
            <p className="mt-2 text-sm text-light-100/80">
              Review the details, then publish when you are ready.
            </p>

            <div className="mt-6 flex gap-3 justify-end">
              <Button
                type="button"
                onClick={() => setIsPublishModalOpen(true)}
                className="bg-primary text-dark-100 hover:bg-primary/90"
              >
                Publish
              </Button>
            </div>
          </div>
        </aside>
      </section>

      {isPublishModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="glass-morphism w-full max-w-md rounded-2xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
              Warning
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Publish This Book?
            </h3>
            <p className="mt-3 text-sm text-light-100/80">
              This is a confirmation step before publishing. You can still
              cancel and edit fields.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                className="border-white/15 bg-white/5 text-light-100 hover:bg-white/10 hover:text-white"
                onClick={() => setIsPublishModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="bg-primary-admin text-white hover:bg-primary-admin/90"
                onClick={form.handleSubmit(handleSubmit)}
              >
                Confirm Publish
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewBookPage;
