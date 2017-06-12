import { NgNgrxTodolistPage } from './app.po';

describe('ng-ngrx-todolist App', () => {
  let page: NgNgrxTodolistPage;

  beforeEach(() => {
    page = new NgNgrxTodolistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
