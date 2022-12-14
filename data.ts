export const testCharacter: Character = {
  name: 'My character',
  race: {
    race: 'Human',
    subrace: 'Variant'
  },
  class: [
    {
      class: 'Wizard',
      subclass: null,
      level: 1
    },
    {
      class: 'Fighter',
      subclass: null,
      level: 2
    }
  ],
  background: 'Solider',
  feats: [
    'Polearm master'
  ],
  attributes: {
    strength: 15,
    dexterity: 12,
    constitution: 14,
    intelligence: 10,
    wisdom: 8,
    charisma: 11
  },
  skills: {
    athletics: {
      skill: 'Athletics',
      attribute: 'Strength',
      isProficient: true,
      hasExpertise: false
    },
    acrobatics: {
      skill: 'Acrobatics',
      attribute: 'Dexterity',
      isProficient: false,
      hasExpertise: false
    },
    sleightOfHand: {
      skill: 'Sleight of Hand',
      attribute: 'Dexterity',
      isProficient: true,
      hasExpertise: false
    },
    stealth: {
      skill: 'Stealth',
      attribute: 'Dexterity',
      isProficient: true,
      hasExpertise: false
    },
    arcana: {
      skill: 'Arcana',
      attribute: 'Intelligence',
      isProficient: true,
      hasExpertise: false
    },
    history: {
      skill: 'History',
      attribute: 'Intelligence',
      isProficient: true,
      hasExpertise: false
    },
    investigation: {
      skill: 'Investigation',
      attribute: 'Intelligence',
      isProficient: true,
      hasExpertise: false
    },
    nature: {
      skill: 'Nature',
      attribute: 'Intelligence',
      isProficient: true,
      hasExpertise: false
    },
    religion: {
      skill: 'Religion',
      attribute: 'Intelligence',
      isProficient: true,
      hasExpertise: false
    },
    animalHandling: {
      skill: 'Animal Handling',
      attribute: 'Wisdom',
      isProficient: true,
      hasExpertise: false
    },
    insight: {
      skill: 'Insight',
      attribute: 'Wisdom',
      isProficient: true,
      hasExpertise: false
    },
    medicine: {
      skill: 'Medicine',
      attribute: 'Wisdom',
      isProficient: true,
      hasExpertise: false
    },
    perception: {
      skill: 'Perception',
      attribute: 'Wisdom',
      isProficient: true,
      hasExpertise: false
    },
    survival: {
      skill: 'Survival',
      attribute: 'Wisdom',
      isProficient: true,
      hasExpertise: false
    },
    deception: {
      skill: 'Deception',
      attribute: 'Charisma',
      isProficient: true,
      hasExpertise: false
    },
    intimidation: {
      skill: 'Intimidation',
      attribute: 'Charisma',
      isProficient: true,
      hasExpertise: false
    },
    performance: {
      skill: 'Performance',
      attribute: 'Charisma',
      isProficient: true,
      hasExpertise: false
    },
    persuasion: {
      skill: 'Persuasion',
      attribute: 'Charisma',
      isProficient: true,
      hasExpertise: false
    }
  },
  maxHitPoints: 12,
  currentHitPoints: 12,
  armorClass: 16,
  tools: [],
  languages: [
    'Common',
    'Elf'
  ]
}
