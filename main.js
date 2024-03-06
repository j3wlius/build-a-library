class Media {
  constructor(title) {
    this._title = title;
    this._isCheckOut = false;
    this._rating = [];
  }

  get title() {
    return this._title;
  }

  get isCheckOut() {
    return this._isCheckOut;
  }

  get rating() {
    return this._rating;
  }

  toggleCheckOutStatus() {
    this._isCheckOut = !this._isCheckOut;
  }

  getAverageRating() {
    let ratingSum = this._rating.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );

    return ratingSum / this._rating.length;
  }

  addRating(lastVal) {
    this._rating.push(lastVal);
  }
  set isCheckOut(val) {
    this._isCheckOut = val;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  'Bill Bryson',
  'A Short History of Nearly Everything',
  544
);

historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
//console.log(speed.isCheckOut)
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
// console.log(speed.getAverageRating())
