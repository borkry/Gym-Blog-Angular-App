export class Post {
  private _id: number;
  private _title: string;
  private _description: string;
  private _category: string;
  private _content: string;
  private _author: string;
  private _create_date: Date;

  constructor(id: number,
    title: string,
    description: string,
    category: string,
    content: string,
    author: string,
    create_date: Date
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._category = category;
    this._content = content;
    this._author = author;
    this._create_date = create_date;
    }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(new_title: string) {
  this._title = new_title;
  }
  
  get description(): string {
    return this._description;
  }

  set description(new_description: string) {
    this._description = new_description;
  }

  get category(): string {
    return this._category;
  }

  set category(new_category: string) {
    this._category = new_category;
  }

  get content(): string {
    return this._content;
  }

  set content(new_content: string) {
    this._content = new_content;
  }

  get author(): string {
    return this._author;
  }

  set author(new_author: string) {
    this._author = new_author;
  }

  get create_date(): Date {
    return this._create_date;
  }

  set create_date(new_create_date: Date) {
    this._create_date = new_create_date;
  }
}

