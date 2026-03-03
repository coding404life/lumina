"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const AddNewBookPage = () => {
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

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
        </form>

        <aside className="space-y-6">
          <div className="glass-morphism rounded-3xl border border-white/10 p-6">
            <h2 className="font-bebas-neue text-3xl tracking-widest text-white">
              Book Cover
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

              <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
                <input
                  id="coverFile"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
                <label htmlFor="coverFile" className="cursor-pointer">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-admin/15">
                    <Image
                      src="/icons/upload.svg"
                      alt="upload"
                      width={22}
                      height={22}
                    />
                  </div>
                  <p className="mt-3 text-sm text-white">
                    Drop image here or click to choose file
                  </p>
                  <p className="mt-1 text-xs text-light-100/70">
                    PNG, JPG up to 5MB
                  </p>
                </label>

                <Button
                  type="button"
                  className="mt-4 w-full bg-primary-admin text-white hover:bg-primary-admin/90"
                >
                  Upload Cover Image
                </Button>
              </div>
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
                onClick={() => setIsPublishModalOpen(false)}
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
