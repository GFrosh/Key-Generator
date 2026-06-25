#!/usr/bin/env node

import crypto from "crypto";

const arg = process.argv[2];

function randomHex(length = 64) {
	return crypto
		.randomBytes(Math.ceil(length / 2))
		.toString("hex")
		.slice(0, length);
}

if (!arg) {
	console.log(randomHex());
	process.exit(0);
}

if (arg === "env") {
	console.log(`JWT_SECRET=${randomHex(64)}`);
	console.log(`SESSION_SECRET=${randomHex(64)}`);
	console.log(`COOKIE_SECRET=${randomHex(64)}`);
	process.exit(0);
}

const length = Number(arg);

if (!Number.isNaN(length)) {
	console.log(randomHex(length));
	process.exit(0);
}

console.error("Invalid argument");
process.exit(1);
