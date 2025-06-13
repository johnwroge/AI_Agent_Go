# AI_Agent_Go

- Building a code editing agent in Go with Anthropic API. 

This project is a local AI agent powered by Anthropic Claude, written entirely in Go. The agent supports conversational chat, file reading, file listing, and file editing through Anthropic’s Tool Use API.


## ✨ Features

* Reads and edits files on your local file system
* Supports Claude Tool Use protocol via custom tools
* all state is maintained in memory

## Setup

### Clone the repository

```bash
git clone https://github.com/johnwroge/AI_Agent_Go.git
cd AI_Agent_Go
```

### Create your `.env` file

Create a `.env` file in the root directory:

```bash
touch .env
```

Inside `.env` add:

```env
ANTHROPIC_API_KEY=sk-ant-your-api-key-goes-here
```

You need a valid Anthropic API key. You can obtain one from [Anthropic Console](https://console.anthropic.com/).

### Install dependencies

Go modules are already managed, but run:

```bash
go mod tidy
```

### Run the agent

```bash
go run main.go
```

You should see:

```
Chat with Claude (use 'ctrl-c' to quit)
You:
```

You can now chat with Claude interactively.

---

## 🔨 Available Tools

| Tool         | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `read_file`  | Reads and returns contents of a file                                        |
| `list_files` | Lists files and folders in a given directory                                |
| `edit_file`  | Creates or edits files by replacing strings or writing new content entirely |

The agent automatically calls these tools when appropriate based on conversation context.

---

## Example Interaction

```
You: create a fizzbuzz function in js that prints 1 - 15
Claude: I've created a file named `fizzbuzz.js`...
```

The agent will generate files locally based on instructions.

---


