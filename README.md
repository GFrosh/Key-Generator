# random_key_generator

`random_key_generator` is a small Node.js CLI for generating random values for local development, secrets, and quick one-off copies to the clipboard.

## Features

- Generate random hexadecimal strings.
- Generate UUIDs.
- Generate passwords with a configurable length.
- Print a ready-to-use environment variable block.
- Copy generated values directly to the clipboard.

## Installation

Install the package locally:

```bash
npm install
```

If you want to use the CLI globally during development, link it:

```bash
npm link
```

## Usage

The CLI is exposed as `rk`.

```bash
rk
```

Generate a hex string of a specific length:

```bash
rk 32
```

Generate a UUID:

```bash
rk uuid
```

Generate a password:

```bash
rk pass
rk pass 24
```

Print a sample environment block:

```bash
rk env
```

Copy a generated value to the clipboard:

```bash
rk copy
rk copy pass
rk copy uuid
```

## Command Reference

| Command | Description |
| --- | --- |
| `rk` | Prints a random hexadecimal string with the default length. |
| `rk <number>` | Prints a hexadecimal string with the requested length. |
| `rk uuid` | Prints a random UUID. |
| `rk pass` | Prints a random password with the default length. |
| `rk pass <number>` | Prints a password with the requested length. |
| `rk env` | Prints a sample set of environment variables for app setup. |
| `rk copy` | Copies a default hex string to the clipboard. |
| `rk copy pass` | Copies a generated password to the clipboard. |
| `rk copy uuid` | Copies a generated UUID to the clipboard. |

## Examples

```bash
$ rk
488c319f0dca10ab0989447a021eb8b82dff76c6ecc4718448fbeda381d78f67
```

```bash
$ rk pass 12
Mq91c6cl6sP*
```

```bash
$ rk env
PORT=3000
JWT_SECRET=...
DB_PASSWORD=...
DB_NAME=mydatabase
SESSION_SECRET=...
COOKIE_SECRET=...
PASSWORD=...
```

## Project Structure

```text
package.json
bin/rk.js
```

## Notes

- The CLI uses Node's built-in `crypto` module for randomness.
- Clipboard support is provided by `clipboardy`.
