ALTER TABLE `farms` ADD `createdAt` integer DEFAULT (unixepoch()) NOT NULL;--> statement-breakpoint
ALTER TABLE `farms` DROP COLUMN `createAt`;--> statement-breakpoint
ALTER TABLE `users` ADD `password` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `createdAt` integer DEFAULT (unixepoch()) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `paswordHash`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `createAt`;