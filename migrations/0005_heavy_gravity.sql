CREATE TABLE "books" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"genre" varchar(255) NOT NULL,
	"rating" integer,
	"total_copies" integer NOT NULL,
	"available_copies" integer,
	"description" text,
	"cover_image" text,
	"status" "status" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "books_id_unique" UNIQUE("id")
);
