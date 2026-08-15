export type ProjectCategory = 'dev' | 'ai' | 'design' | 'experiments'

export type Project = {
  title: string
  slug: string
  category: ProjectCategory
  description: string
  long?: string
  technologies?: string[]
  github?: string
  featured?: boolean
}

export const githubProfile = 'https://github.com/ishankrishna2012'
export const githubAvatar = 'https://github.com/ishankrishna2012.png?size=420'

export const projects: Project[] = [
  { title: 'Antigravity-Jarvis', slug: 'antigravity-jarvis', category: 'ai', featured: true, github: `${githubProfile}/Antigravity-Jarvis`, technologies: ['AI', 'voice', 'automation', 'ElevenLabs', 'WebSockets', 'ESP32'], description: 'A voice-first AI automation system that connects LLMs, desktop control, trading alerts and multi-device microphone nodes.', long: 'Built like a personal operating layer: voice interaction, ElevenLabs speech, TradingView webhooks, WebSocket plumbing, desktop automation, phone microphones, cloud scaling ideas and ESP32 microphone nodes.' },
  { title: 'NyayaMind', slug: 'nyayamind', category: 'ai', featured: true, github: `${githubProfile}/NyayaMind`, technologies: ['AI', 'legal search', 'similarity', 'research UX'], description: 'An AI legal research prototype for searching judgments in natural language and comparing related cases.', long: 'Explores natural-language legal search, case similarity, confidence scores, highlighted judgment paragraphs, bookmarking and case comparison without pretending the machine is a lawyer.' },
  { title: 'Smart Traffic Management System', slug: 'smart-traffic', category: 'dev', featured: true, github: `${githubProfile}/Smart-traffic-Project-`, technologies: ['React', 'TypeScript', 'Tailwind', 'Zustand', 'React Router', 'Recharts', 'Google Maps', 'Vite'], description: 'A real-time school traffic coordination system with smart signals, bus tracking, pickup flow and safety signals.', long: 'Designed for school mobility: AI-powered traffic signals, school bus tracking, pickup coordination, live maps, traffic insights, weather-aware predictions, pedestrian safety and notifications.' },
  { title: 'IJP — Ishan Janta Party', slug: 'ijp-ishan-janta-party', category: 'dev', featured: true, github: `${githubProfile}/ijp-ishan-janta-party`, technologies: ['full-stack', 'community', 'web app', 'product'], description: 'An experimental full-stack student-community platform framed as a playful product system, not a political campaign.' },
  { title: 'Hand Tracking Slides', slug: 'hand-tracking-slides', category: 'dev', featured: true, github: `${githubProfile}/Hand-Tracking-Slides`, technologies: ['computer vision', 'interaction', 'slides', 'prototype'], description: 'A gesture-controlled presentation experiment where hands become the interface.' },
  { title: 'DPS Dubai Pickup App', slug: 'dps-dubai-pickup-app', category: 'dev', featured: true, github: `${githubProfile}/dps-dubai-pickup-app`, technologies: ['school mobility', 'utility app', 'coordination'], description: 'A focused utility application for making school pickup coordination less chaotic.' },
  { title: 'Student Music Experiment', slug: 'student-music-experiment', category: 'experiments', featured: true, github: `${githubProfile}/studmusicexpermental`, technologies: ['music', 'creative code', 'experiment'], description: 'A small creative experiment around student-made music and interface play.' },
  { title: 'Alexa', slug: 'alexa', category: 'ai', github: `${githubProfile}/Alexa`, technologies: ['voice', 'assistant', 'automation'], description: 'A voice-assistant experiment exploring conversational control and everyday automation.' },
  { title: 'TRACKING', slug: 'tracking', category: 'experiments', github: `${githubProfile}/TRACKING`, technologies: ['tracking', 'prototype', 'interaction'], description: 'A tracking prototype filed under: yes, it probably started as a stupid idea.' },
  { title: 'Portfolio', slug: 'portfolio', category: 'design', github: `${githubProfile}/Portfolio`, technologies: ['identity', 'interface', 'archive'], description: 'The portfolio as a living interface system for experiments, projects and notes.' },
]

export const categories = [
  { path: '/dev', label: 'dev', description: 'things i built, broke, rebuilt and somehow shipped.' },
  { path: '/ai', label: 'ai', description: 'machines, assistants and research prototypes with opinions.' },
  { path: '/design', label: 'design', description: 'interfaces, identity fragments and the quiet parts of product work.' },
  { path: '/experiments', label: 'experiments', description: 'small strange things that escaped the notebook.' },
  { path: '/writing', label: 'writing', description: 'build logs and notes will live here when they exist.' },
]
