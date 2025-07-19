export interface Project {
  slug: string;
  title: string;
  description: string;       // now stores a translation key
  implementation: string;    // now stores a translation key
  image: string;
  sticker?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'join',
    title: 'Join',
    description: 'project.join.description',
    implementation: 'project.join.implementation',
    image: 'assets/img/Laptop.png',
    sticker: 'assets/img/Sticker.png'
  },
  {
    slug: 'sharkie',
    title: 'Sharkie',
    description: 'project.sharkie.description',
    implementation: 'project.sharkie.implementation',
    image: 'assets/img/sharkie.png'
  },
  {
    slug: 'pokedex',
    title: 'Pokedex',
    description: 'project.pokedex.description',
    implementation: 'project.pokedex.implementation',
    image: 'assets/img/pokedex.png'
  }
];
