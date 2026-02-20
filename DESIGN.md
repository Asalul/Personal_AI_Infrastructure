# Design Document: PAI-OpenClaw Porting

## 1. Overview
The goal is to integrate the systematic rigor of PAI v3.0 into the OpenClaw ecosystem. This will be implemented as an OpenClaw skill that provides commands and enhances the agent's reasoning.

## 2. Component Mapping

| PAI v3.0 Component | OpenClaw Mapping |
|--------------------|-------------------|
| The Algorithm | `AGENTS.md` Instructions + `/pai algorithm` command |
| TELOS (Mission/Goals) | `~/.openclaw/workspace/TELOS/` directory |
| UFC (Memory) | OpenClaw Memory (Mem0 + `MEMORY.md`) |
| PRDs | `~/.openclaw/workspace/.prd/` |
| Actions (`A_`) | Scripts in `skills/pai/lib/actions/` |
| Hooks | OpenClaw `hooks/` system |

## 3. Command Interface
The following slash commands will be available via the `pai` skill:

- `/pai status`: Displays current task, goals, and system health.
- `/pai goal-set <name> <desc>`: Adds a new goal to `TELOS/GOALS.md`.
- `/pai mission-set <text>`: Updates `TELOS/MISSION.md`.
- `/pai algorithm <task>`: Manually triggers a multi-phase algorithm run for a complex task.

## 4. Directory Structure
```
~/.openclaw/workspace/
├── TELOS/
│   ├── MISSION.md
│   ├── GOALS.md
│   ├── BELIEFS.md
│   └── PROJECTS.md
├── .prd/
│   └── PRD-YYYYMMDD-slug.md
└── skills/
    └── pai/
        ├── SKILL.md
        ├── package.json
        ├── lib/
        │   ├── actions/
        │   └── pai-cli.js
        └── templates/
```

## 5. The "Queen Bee" Implementation
The `pai` skill will utilize `agent-orchestrator` to spawn specialized workers for the **Build** and **Execute** phases of The Algorithm, ensuring parallel and efficient task completion.

---
*Created by Cika (AI Red Team Strategist).*
