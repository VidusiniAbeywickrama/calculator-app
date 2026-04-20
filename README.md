# Simple Calculator

A small Node.js calculator app with both a browser frontend and a CLI mode.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Browser UI served by Express
- CLI usage from the terminal

## Requirements

- Node.js 18 or newer

## Install

```bash
npm install
```

## Run the Web App

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## Use the CLI

```bash
npm run cli -- add 10 5
npm run cli -- subtract 10 5
npm run cli -- multiply 10 5
npm run cli -- divide 10 5
```

You can also use symbols:

```bash
npm run cli -- + 10 5
npm run cli -- - 10 5
npm run cli -- "*" 10 5
npm run cli -- / 10 5
```

## API

The frontend uses this endpoint:

- `POST /api/calculate`

Request body:

```json
{
  "operation": "add",
  "a": 10,
  "b": 5
}
```

Response:

```json
{
  "result": 15
}
```

## Project Structure

- `calculator.js` shared calculator logic
- `index.js` CLI entrypoint
- `server.js` Express server
- `public/` browser frontend files

## Notes

- Division by zero returns an error.
- Invalid operations return a helpful message.
