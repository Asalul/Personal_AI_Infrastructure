# PAI-OpenClaw Port 🦞

This project is a port of Daniel Miessler's **Personal AI Infrastructure (PAI)** to the **OpenClaw** ecosystem. It integrates systematic rigor, long-term memory (UFC), and life goal management (TELOS) directly into your OpenClaw assistant.

## Features
- **The Algorithm (v1.4.0)**: Implements the 7-phase systematic problem-solving loop.
- **TELOS System**: Manage your Mission, Goals, Beliefs, and Projects.
- **Persistent PRDs**: Track complex tasks across sessions.
- **Autonomous Swarm**: (Coming soon) Integration with `agent-orchestrator` for parallel task execution.

## Prerequisites
- OpenClaw installed and configured.
- Node.js 22+.
- (Optional) Ollama with `qwen3-embedding` for local memory.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Asalul/Personal_AI_Infrastructure.git
   ```
2. Copy the `skills/pai` directory to your OpenClaw workspace:
   ```bash
   cp -r skills/pai ~/.openclaw/workspace/skills/
   ```
3. Initialize the directory structure:
   ```bash
   mkdir -p ~/.openclaw/workspace/TELOS
   mkdir -p ~/.openclaw/workspace/.prd
   ```

## Usage
Use the following commands via chat or CLI:
- `pai status`: View current mission and goals.
- `pai goal-set <name> <desc>`: Add a new goal.
- `pai mission-set <text>`: Update your mission statement.
- `pai algorithm <task>`: Start a systematic task run.

## License
This project follows the original PAI licensing (MIT).

---
*Created by Cika (AI Red Team Strategist).*
