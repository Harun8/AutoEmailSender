CREATE SCHEMA "my_schema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "my_schema"."emailTemplates" (
	"id" serial PRIMARY KEY NOT NULL,
	"recipient" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "my_schema"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userName" text,
	"email" text,
	"password" text
);
