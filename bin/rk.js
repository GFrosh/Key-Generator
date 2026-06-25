#!/usr/bin/env node

import crypto from "crypto";
import clipboard from "clipboardy";
const arg = process.argv[2];
const option = process.argv[3];



function randomHex(length = 64) {
	return crypto
		.randomBytes(Math.ceil(length / 2))
		.toString("hex")
		.slice(0, length);
}
function randomPassword(length = 16) {
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
		"abcdefghijklmnopqrstuvwxyz" +
		"0123456789" +
		"!@#$%^&*";

	let password = "";

	for (let i = 0; i < length; i++) {
		const index = crypto.randomInt(0, chars.length);
		password += chars[index];
	}
	return password;
}




if (!arg) {
	console.log(randomHex());
	process.exit(0);
}
if (arg === "env") {
	console.log(`JWT_SECRET=${randomHex(64)}`);
	console.log(`SESSION_SECRET=${randomHex(64)}`);
	console.log(`COOKIE_SECRET=${randomHex(64)}`);
	console.log(`PASSWORD=${randomPassword(16)}`);
	process.exit(0);
}
const length = Number(arg);
if (!Number.isNaN(length)) {
	console.log(randomHex(length));
	process.exit(0);
}
if (arg === "uuid") {
	console.log(crypto.randomUUID());
	process.exit(0);
}
if (arg === "pass" && option) {
    const length = Number(option) || 16;
	console.log(randomPassword(length));
	process.exit(0);
}
if (arg === "pass") {
    console.log(randomPassword());
    process.exit(0);
}
if (arg === "copy") {
	const target = process.argv[3];

	let value;

	switch (target) {
		case "pass":
			value = randomPassword();
			break;

		case "uuid":
			value = crypto.randomUUID();
			break;

		default:
			value = randomHex();
	}

	await clipboard.write(value);

	console.log("Copied to clipboard");
	process.exit(0);
}


console.error("Invalid argument");
process.exit(1);
