/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { Course } from 'src/app/view/declarations';

const getRandomDate = function() {
    const start = new Date();
    start.setMonth(start.getMonth() + 1);

    const end = new Date();
    end.setMonth(end.getMonth() - 1);

    const from = start.getTime();
    const to = end.getTime();

    return new Date(from + Math.random() * (to - from));
};

const nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
];

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private data: Course[] = [];

  constructor() {}

  getHeroes() {
    this.data = Array(15).fill(null).map((_, i) => i).map(i => ({
      id: 'id' + i,
      title: nameList[i],
      date: getRandomDate(),
      duration: Math.floor(Math.random() * 3.6e+6) + 0,
      description: 'description' + i + ' dfdf dfdfd dffdfd dderere rerer erere ererer  sdsd xzzzxzcvcxvcxv cxcxd swss23 23 sddf',
      topRated: Math.random() < 0.5,
    }));
    return this.data;
  }
}