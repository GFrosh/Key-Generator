# Usage Guide

This project exposes a single CLI command: `rk`.

## Behaviors

- No arguments: prints a default-length random hexadecimal string.
- A numeric argument: prints a hexadecimal string with that exact length.
- `uuid`: prints a random UUID.
- `pass`: prints a random password.
- `pass <length>`: prints a password with the requested length.
- `env`: prints a small environment variable template.
- `copy`: copies a generated value to the clipboard.

## Password Rules

Passwords are built from:

- Uppercase letters
- Lowercase letters
- Numbers
- Symbols: `!@#$%^&*`

## Clipboard Output

When using `copy`, the CLI writes the generated value to the system clipboard and prints `Copied to clipboard`.
