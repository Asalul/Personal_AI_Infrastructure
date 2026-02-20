#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/arca/.openclaw/workspace';
const TELOS_DIR = path.join(WORKSPACE, 'TELOS');

const args = process.argv.slice(2);
const command = args[0];

const commands = {
  status: () => {
    console.log('🦞 PAI System Status\n');
    
    if (fs.existsSync(path.join(TELOS_DIR, 'MISSION.md'))) {
      const mission = fs.readFileSync(path.join(TELOS_DIR, 'MISSION.md'), 'utf8');
      console.log('🎯 Mission:');
      console.log(mission.trim() + '\n');
    }

    if (fs.existsSync(path.join(TELOS_DIR, 'GOALS.md'))) {
      const goals = fs.readFileSync(path.join(TELOS_DIR, 'GOALS.md'), 'utf8');
      console.log('🚀 Top Goals:');
      const lines = goals.split('\n').filter(l => l.includes('- [ ]')).slice(0, 3);
      console.log(lines.join('\n') + '\n');
    }

    console.log('🧠 Memory Engine: Local Qwen (Ollama)');
    console.log('🛡️  Security: Hardened');
  },

  'goal-set': () => {
    const name = args[1];
    const desc = args.slice(2).join(' ');
    if (!name || !desc) {
      console.log('Usage: pai goal-set <name> <description>');
      return;
    }
    const goalLine = `- [ ] **${name}**: ${desc}\n`;
    fs.appendFileSync(path.join(TELOS_DIR, 'GOALS.md'), goalLine);
    console.log(`✅ Goal added: ${name}`);
  },

  'mission-set': () => {
    const mission = args.slice(1).join(' ');
    if (!mission) {
      console.log('Usage: pai mission-set <text>');
      return;
    }
    fs.writeFileSync(path.join(TELOS_DIR, 'MISSION.md'), `# Mission Statement\n${mission}\n`);
    console.log('✅ Mission updated.');
  }
};

if (commands[command]) {
  commands[command]();
} else {
  console.log('Unknown PAI command. Available: status, goal-set, mission-set');
}
