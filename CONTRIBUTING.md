# Contributing

This repository is intentionally small, so contributions should stay focused and minimal.

## Local Setup

```bash
npm install
```

## Development Notes

- The CLI entrypoint lives in `bin/rk.js`.
- The package is configured as an ES module project.
- Keep new commands simple and documented in `README.md` and `USAGE.md`.

## Validation

Before opening a change, run a quick manual check:

```bash
node bin/rk.js
node bin/rk.js uuid
node bin/rk.js pass 12
```
