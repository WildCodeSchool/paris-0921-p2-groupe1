const userName = localStorage.getItem('username');

const characterData = {
  'half-orc': {
    name: `${userName}`,
    race: 'half-orc',
    img: './src/components/images/Half-orc.png',
    img2: './src/components/images/Half-orc2.png',
    img3: './src/components/images/Half-orc3.png',
    strength: 60,
    intelligence: 10,
    life: 100,
    level: 1,
    spell: [
      {
        id: 1,
        name: 'Polymorph',
        description:
          'This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a wisdom saving throw to avoid the effect. A shape-shifter automatically succeeds on this saving throw.',
        damage: -5,
      },
      {
        id: 2,
        name: 'Earthquake',
        description:
          'You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.',
        damage: -20,
      },
      {
        id: 3,
        name: 'Circle of Death',
        description:
          'A sphere of negative energy ripples out in a 60-foot radius sphere from a point within range. Each creature in that area must make a constitution saving throw.',
        damage: -25,
      },
    ],
    equipment: [
      {
        id: 1,
        name: 'Curved Sword',
        damage: -15,
      },
      {
        id: 2,
        name: 'War Hammer',
        damage: -20,
      },
      {
        id: 3,
        name: 'Orc Shield',
        damage: -15,
      },
    ],
  },
  dwarf: {
    name: `${userName}`,
    race: 'dwarf',
    img: './src/components/images/Dwarf.png',
    img2: './src/components/images/Dwarf2.png',
    img3: './src/components/images/Dwarf3.png',
    strength: 35,
    intelligence: 30,
    life: 100,
    level: 1,
    spell: [
      {
        id: 1,
        name: 'Arcane Sword',
        description: 'You create a sword-shaped plane of force that hovers within range.',
        damage: -15,
      },
      {
        id: 2,
        name: 'Blade Barrier',
        description: 'You create a vertical wall of whirling, razor-sharp blades made of magical energy.',
        damage: -20,
      },
      {
        id: 3,
        name: 'Control Weather',
        description:
          "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.",
        damage: -15,
      },
    ],
    equipment: [
      {
        id: 1,
        name: 'Axes',
        damage: -15,
      },
      {
        id: 2,
        name: 'Hammer',
        damage: -20,
      },
      {
        id: 3,
        name: 'Magic Powder',
        damage: -15,
      },
    ],
  },
  elf: {
    name: `${userName}`,
    race: 'elf',
    img: './src/components/images/Elf2.png',
    img2: './src/components/images/Elf3.png',
    img3: './src/components/images/Elf4.png',
    strength: 45,
    intelligence: 50,
    life: 100,
    level: 1,
    spell: [
      {
        id: 1,
        name: 'Fireball',
        description:
          'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.',
        damage: -15,
      },
      {
        id: 2,
        name: 'Wall of Fire',
        description:
          'You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick.',
        damage: -20,
      },
      {
        id: 3,
        name: 'Acid Arrow',
        description:
          'A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target.',
        damage: -10,
      },
    ],
    equipment: [
      {
        id: 1,
        name: 'Bow',
        damage: -20,
      },
      {
        id: 2,
        name: 'Sword',
        damage: -20,
      },
      {
        id: 3,
        name: 'Elf Armor',
        damage: -15,
      },
    ],
  },
  human: {
    name: `${userName}`,
    race: 'human',
    img: './src/components/images/Human.png',
    img2: './src/components/images/Human2.png',
    img3: './src/components/images/Human3.png',
    strength: 40,
    intelligence: 30,
    life: 100,
    level: 1,
    spell: [
      {
        id: 1,
        name: 'Disguise Self',
        description:
          'You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between.',
        damage: -5,
      },
      {
        id: 2,
        name: 'Stinking Cloud',
        description:
          'You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured.',
        damage: -25,
      },
      {
        id: 3,
        name: 'Vicious Mockery',
        description: 'You unleash a string of insults laced with subtle enchantments at a creature you can see within range.',
        damage: -15,
      },
    ],
    equipment: [
      {
        id: 1,
        name: 'Buffoon disguise',
        damage: -10,
      },
      {
        id: 2,
        name: 'Domination Scepter',
        damage: -30,
      },
      {
        id: 3,
        name: 'Book of Jokes',
        damage: -15,
      },
    ],
  },
};

export const getCharacterData = (id) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    resolve(characterData[id]);
  });
};
