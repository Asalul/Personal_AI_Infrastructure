---
name: pai
description: Personal AI Infrastructure (PAI) for OpenClaw. Implements The Algorithm, TELOS, and systematic problem-solving.
---

# PAI Skill 🦞

**Personal AI Infrastructure** for magnifying human capabilities. This skill implements the systematic rigor of PAI v3.0 within OpenClaw.

## The PAI Algorithm (v1.4.0)

For any complex task, you MUST follow these 7 phases:

1.  **OBSERVE**: Reverse engineer the request. Define the Ideal State Criteria (ISC).
2.  **THINK**: Pressure test assumptions. Identify risks and capabilities needed.
3.  **PLAN**: Create a PRD (Persistent Requirements Document) and execution strategy.
4.  **BUILD**: Create artifacts (code, files, config). Re-read criteria before building.
5.  **EXECUTE**: Run the work. Deploy or apply changes.
6.  **VERIFY**: Prove success against ISC with concrete evidence.
7.  **LEARN**: Structural reflection on the algorithm's performance.

## TELOS System

Manage your North Star files in `~/.openclaw/workspace/TELOS/`:
- **MISSION.md**: Your primary purpose.
- **GOALS.md**: Long-term and short-term objectives.
- **BELIEFS.md**: Core values and principles.
- **PROJECTS.md**: Active technical and life projects.

## Commands

- `node lib/pai-cli.js status`: Show current mission, active goals, and latest memory summary.
- `node lib/pai-cli.js goal-set <name> <description>`: Append a new goal to `TELOS/GOALS.md`.
- `node lib/pai-cli.js mission-set <text>`: Overwrite `TELOS/MISSION.md` with new purpose.
- `pai algorithm <task>`: Manually initiate a full algorithm run for a specific task.

## PRD Management

Every major task must have a PRD in `~/.openclaw/workspace/.prd/`. Use the PRD to track progress across sessions.

---
*Inspired by Daniel Miessler's PAI. Ported to OpenClaw by Cika.*
