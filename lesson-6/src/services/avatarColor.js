class AvatarColor {
  constructor() {
    this.COLORS = [
      '#C2272D',
      '#F8931F',
      '#FFFF01',
      '#009245',
      '#0193D9',
      '#0C04ED',
      '#612F90',
    ];
    this._color = this.shuffle(this.COLORS)[0];
  }

  get color() {
    return this._color;
  }

  shuffle(array) {
    var tmp,
      current,
      top = array.length;

    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }

    return array;
  }
}

export default new AvatarColor();
