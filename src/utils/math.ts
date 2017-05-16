interface IVector {
  x: number;
  y: number;
}

export default class MathUtil {
  public static addVector(partial: any, v1: any, v2: any) {
    partial.x = v1.x + v2.x;
    partial.y = v1.y + v2.y;
    return partial;
  }

  public static multiple(partial: any, v: any, scale: number) {
    partial.x = v.x * scale;
    partial.y = v.y * scale;
    return partial;
  }
}