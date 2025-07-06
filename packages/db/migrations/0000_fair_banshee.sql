CREATE TABLE "" (
	"id" serial NOT NULL,
	"uuid1" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	CONSTRAINT "_id_unique" UNIQUE("id")
);
