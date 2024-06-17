/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @param parent
 * @returns array
 */
export const searchRoute = (path, routes, parent = '') => {
  let result = {}
  for (let item of routes) {
    const _path = parent.length > 0 ? (parent + '/' + item.path) : item.path
    if (_path === path) {
      return item
    }
    if (item.children) {
      const res = searchRoute(path, item.children, _path)
      if (Object.keys(res).length) {
        result = res
      }
    }
  }
  return result
}