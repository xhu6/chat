export class Queue<T> {
  public f: T[] = [];
  public b: T[] = [];

  private norm() {
    if (this.f.length == 0) {
      this.f = this.b.reverse();
      this.b = [];
    }
  }

  public front(): T | undefined {
    this.norm();
    return this.f[this.f.length - 1];
  }

  public push(item: T) {
    this.b.push(item);
  }

  public pop(): T | undefined {
    this.norm();
    return this.f.pop();
  }
}
