CREATE TYPE "public"."book_status" AS ENUM('OUT_OF_STOCK', 'IN_STOCK');--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "status" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "status" SET DATA TYPE "public"."book_status" USING "status"::text::"public"."book_status";--> statement-breakpoint
ALTER TABLE "books" ALTER COLUMN "status" SET DEFAULT 'IN_STOCK';