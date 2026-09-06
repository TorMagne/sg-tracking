CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`farmId` integer NOT NULL,
	`email` text NOT NULL,
	`paswordHash` text NOT NULL,
	`role` text DEFAULT 'user' NOT NULL,
	`createAt` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`farmId`) REFERENCES `farms`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);