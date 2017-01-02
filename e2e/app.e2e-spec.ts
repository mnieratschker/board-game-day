import { BoardGameDayPage } from './app.po';

describe('board-game-day App', function() {
  let page: BoardGameDayPage;

  beforeEach(() => {
    page = new BoardGameDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
