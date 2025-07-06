CREATE TABLE "tbl_user" (
	"id" serial NOT NULL,
	"uuid1" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	CONSTRAINT "tbl_user_id_unique" UNIQUE("id")
);
--> statement-breakpoint
DROP TABLE "" CASCADE;