#!/usr/bin/env node

const links = {
  github: 'https://github.com/ishankrishna2012',
  portfolio: 'https://github.com/ishankrishna2012/Portfolio',
  ai: 'https://github.com/ishankrishna2012/Antigravity-Jarvis',
}

const args = new Set(process.argv.slice(2))

function printHelp() {
  console.log(`
ishan — a tiny command-line doorway into Ishan Krishna Verma's work

usage
  npx ishan          show the personal card
  npx ishan --links  show useful links only
  npx ishan --help   show this help
`)
}

function printLinks() {
  console.log(`github     ${links.github}`)
  console.log(`portfolio  ${links.portfolio}`)
  console.log(`ai lab     ${links.ai}`)
}

function printCard() {
  console.log(`
╭────────────────────────────────────────────╮
│ ishan krishna verma                        │
│ software · ai · interfaces · experiments   │
╰────────────────────────────────────────────╯

I build unusual things because I want to see if I can.

currently:
  • making AI assistants less boring
  • building school mobility and utility tools
  • turning prototypes into things you can click

links:
  github     ${links.github}
  portfolio  ${links.portfolio}

try:
  npx ishan --links
`)
}

if (args.has('--help') || args.has('-h')) {
  printHelp()
} else if (args.has('--links') || args.has('-l')) {
  printLinks()
} else {
  printCard()
}
