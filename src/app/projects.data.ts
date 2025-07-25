export interface Project {
  slug: string;
  title: string;
  description: string;      
  implementation: string;   
  image: string;
  sticker?: string;
  githubUrl?: string;        
  liveUrl?: string;          
}

export const PROJECTS: Project[] = [
  {
    slug: 'join',
    title: 'Join',
    description: 'project.join.description',
    implementation: 'project.join.implementation',
    image: 'assets/img/Laptop.png',
    sticker: 'assets/img/Sticker.png',
    githubUrl: 'https://github.com/Getinger96/Join',
    liveUrl: 'https://andre-sutter.ch/join/'
  },
  {
    slug: 'sharkie',
    title: 'Sharkie',
    description: 'project.sharkie.description',
    implementation: 'project.sharkie.implementation',
    image: 'assets/img/sharkie.png',
    githubUrl: 'https://github.com/AndreSutter/sharkie',
    liveUrl: 'https://andre-sutter.ch/sharkie/'
  },
  {
    slug: 'pokedex',
    title: 'Pokedex',
    description: 'project.pokedex.description',
    implementation: 'project.pokedex.implementation',
    image: 'assets/img/pokedex.png',
    githubUrl: 'https://github.com/AndreSutter/pokedex', 
    liveUrl: 'https://andre-sutter.ch/pokedex'
  }
];

