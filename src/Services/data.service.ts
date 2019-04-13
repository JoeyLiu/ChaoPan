import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }
  fixingData(data) {
    // console.log('Fixing data series...');
    // console.log(data.length);
    // console.log(data);
    // 移除0的数据
    for (let i = 0; i < data.length; i++) {
      if (data[i][1] === 0 ) {
        // console.log('price is 0 @ ' + i + ' : ' + data[i]);
        data.splice(i, 1);
        i--;
      }
    }

    // console.log(data);
    // 替换时间index
    for (let i = 0; i < data.length; i++) {
      data[i][0] = i + 1;
    }
    return data;
  }
  polynomialData(data, order) {
    return this._polynomial(data, order, 0);
  }
  /**
   * Code extracted from https://github.com/Tom-Alexander/regression-js/
   */
  _polynomial(data, order, extrapolate) {
    if (typeof order === 'undefined') {
      order = 2;
    }
    let lhs = [], rhs = [], results = [], a = 0, b = 0, i = 0, k = order + 1;

    for (; i < k; i++) {
      for (let l = 0, len = data.length; l < len; l++) {
        if (data[l].x != null) {
          data[l][0] = data[l].x;
          data[l][1] = data[l].y;
        }
        if (data[l][1] != null) {
          a += Math.pow(data[l][0], i) * data[l][1];
        }
      }
      lhs.push(a);
      a = 0;
      let c = [];
      for (let j = 0; j < k; j++) {
        for (let l = 0, len = data.length; l < len; l++) {
          if (data[l][1]) {
            b += Math.pow(data[l][0], i + j);
          }
        }
        c.push(b);
        b = 0;
      }
      rhs.push(c);
    }
    rhs.push(lhs);

    let equation = this.gaussianElimination(rhs, k);

    let resultLength = data.length + extrapolate;
    let step = data[data.length - 1][0] - data[data.length - 2][0];
    for (let i = 0, len = resultLength; i < len; i++) {
      let answer = 0;
      let x = 0;
      if (typeof data[i] !== 'undefined') {
        x = data[i][0];
      } else {
        x = data[data.length - 1][0] + (i - data.length) * step;
      }

      for (let w = 0; w < equation.length; w++) {
        answer += equation[w] * Math.pow(x, w);
      }
      results.push([x, answer]);
    }

    results.sort(function (a, b) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
      return 0;
    });

    let string = 'y = ';

    for (let i = equation.length - 1; i >= 0; i--) {
      if (i > 1) string += Math.round(equation[i] * 100) / 100 + 'x^' + i + ' + ';
      else if (i === 1) string += Math.round(equation[i] * 100) / 100 + 'x' + ' + ';
      else string += Math.round(equation[i] * 100) / 100;
    }

    return {equation: equation, points: results, string: string};
  }
  /**
   * Code extracted from https://github.com/Tom-Alexander/regression-js/
   */
  gaussianElimination(a, o) {
    let i = 0, j = 0, k = 0, maxrow = 0, tmp = 0, n = a.length - 1, x = new Array(o);
    for (i = 0; i < n; i++) {
      maxrow = i;
      for (j = i + 1; j < n; j++) {
        if (Math.abs(a[i][j]) > Math.abs(a[i][maxrow]))
          maxrow = j;
      }
      for (k = i; k < n + 1; k++) {
        tmp = a[k][i];
        a[k][i] = a[k][maxrow];
        a[k][maxrow] = tmp;
      }
      for (j = i + 1; j < n; j++) {
        for (k = n; k >= i; k--) {
          a[k][j] -= a[k][i] * a[i][j] / a[i][i];
        }
      }
    }
    for (j = n - 1; j >= 0; j--) {
      tmp = 0;
      for (k = j + 1; k < n; k++)
        tmp += a[k][j] * x[k];
      x[j] = (a[n][j] - tmp) / a[j][j];
    }
    return (x);
  }
}
