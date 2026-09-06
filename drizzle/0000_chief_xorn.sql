CREATE TABLE `farms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`createAt` integer DEFAULT (unixepoch()) NOT NULL
);
