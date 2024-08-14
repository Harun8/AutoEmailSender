ALTER TABLE "my_schema"."emailTemplates" ADD COLUMN "recurring" boolean;--> statement-breakpoint
ALTER TABLE "my_schema"."emailTemplates" ADD COLUMN "text" text;--> statement-breakpoint
ALTER TABLE "my_schema"."emailTemplates" ADD COLUMN "date" date;--> statement-breakpoint
ALTER TABLE "my_schema"."emailTemplates" ADD COLUMN "theme" text;--> statement-breakpoint
ALTER TABLE "my_schema"."emailTemplates" ADD COLUMN "user_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "my_schema"."emailTemplates" ADD CONSTRAINT "emailTemplates_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "my_schema"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
