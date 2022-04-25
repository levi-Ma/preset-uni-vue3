// 判断arr是否为一个数组，返回一个bool值
function isArray(arr: Array<any>): boolean {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(_object: _typeObj, _obj: _typeObj = {}): _typeObj {
  if (typeof _object !== 'object' && typeof _object !== 'function') {
    //原始类型直接返回
    return _object;
  }
  for (let i in _object) {
    if (_object.hasOwnProperty(i)) {
      _obj[i] = typeof _object[i] === 'object' ? deepClone(_object[i]) : _object[i];
    }
  }
  return _obj;
}

export default deepClone;
