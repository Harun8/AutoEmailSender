CREATE TABLE "users" (
	"id" bigint  NOT NULL,
	"userName" varchar(256),
	"email" varchar(256),
	"password" varchar(256),
	CONSTRAINT "users_id" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE INDEX "name_idx" ON "users" ("userName");