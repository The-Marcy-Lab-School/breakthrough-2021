CREATE TABLE "tasks" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text,
  "due_date" date,
  "created_at" timestamp,
  "updated_at" timestamp
);