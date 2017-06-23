import { GameTheoryPage } from './app.po';

describe('game-theory App', () => {
  let page: GameTheoryPage;

  beforeEach(() => {
    page = new GameTheoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
