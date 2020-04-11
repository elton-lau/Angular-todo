import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: Todo[] = [];

  constructor() { }

  /**
   * 新增待辦事項
   *
   * @param {string} title - 待辦事項的標題
   * @memberof TodoListService
   */
  add(title: string): void {

    // 避免傳入的 title 是無效值或空白字串，稍微判斷一下
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }

  }

    /**
   * 取得待辦事項清單
   *
   * @returns {Todo[]}
   * @memberof TodoListService
   */
  getList(): Todo[] {
    return this.list;
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }

  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }

  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
