const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

const startButtonElement = document.querySelector('[data-button-start]');
const resetButtonElement = document.querySelector('[data-button-reset]');
const endButtonElement = document.querySelector('[data-button-end]');

class Game {
  private score: number = 100;
  private currentKey: string = '';
  private interval: number = 2000;
  private timerId: number = 0;

  constructor(
    private scoreElement: HTMLHeadingElement,
    private cubeScoreElement: HTMLDivElement,
    private keyElement: HTMLDivElement,
    private cubeElement?: HTMLDivElement,
    private progressBarElement?: HTMLDivElement,
  ) {}

  start() {
    alert(scoreElement.textContent);
  }

  private startKeysInterval() {
    // code...
  }

  private setScore(score: number) {
    // code...
  }

  private setKey(key: string) {
    // code...
  }

  private addScore(score: number) {
    // code...
  }

  private subscribeOnKeyPress() {
    // code...
  }

  static getRandomNumberOfRange(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

startButtonElement.addEventListener('click', () => game.start());
