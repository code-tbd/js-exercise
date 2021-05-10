// // 第一题
// class People {
//   constructor(name) {
//     this.name = name
//   }

//   // TODO: 请在此处完善代码
//   // 监听事件
//   on(event, fun) {
//     if([event] in this) {
//       this[event].push(fun)
//     } else {
//       this[event] = []
//       this[event].push(fun)
//     }
//   }

//   // 解除绑定
//   off(event, fun) {
//     if([event] in this) {
//       let deleted = false
//       for(let i in this[event]) {
//         if(this[event][i] === fun) {
//           this[event].splice(i,1)
//           deleted = true
//         }
//       }
//       if(deleted) {
//         console.log(`已成功删除事件的绑定方法${fun}`)
//       } else {
//         console.log(`未找到方法${fun}`)
//       }
//     } else {
//       console.log('不存在此事件')
//     }
//   }

//   // 触发事件
//   emit(event, param) {
//     for(let i of this[event]) {
//       i(param)
//     }
//   }

//   sayHi() {
//     console.log(`Hi, I am ${this.name}`)
//   }
// }


// /* 以下为测试代码 */
// const say1 = (greeting) => {
//   console.log(`${greeting}, nice meeting you.`)
// }

// const say2 = (greeting) => {
//   console.log(`${greeting}, nice meeting you, too.`)
// }

// const jerry = new People('Jerry')
// jerry.sayHi()
// // => 输出：'Hi, I am Jerry'

// jerry.on('greeting', say1)
// jerry.on('greeting', say2)

// jerry.emit('greeting', 'Hi')
// // => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

// jerry.off('greeting', say1)
// jerry.emit('greeting', 'Hi')
// // => 只输出：'Hi, nice meeting you, too'




// // 第二题
// const sleep = (duration) => {
//   // TODO
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, duration)
//   })
// }

// const anyFunc = async () => {
//   console.log("123") // 输出 123
//   console.time('log')
//   await sleep(3000) // 暂停 300 毫秒
//   console.log("456") // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
//   console.timeEnd('log')
// }

// anyFunc()




// // 第三题
// const deepGet = (obj, prop) => {
//   // TODO: 在此处完善代码
//   prop = prop + ''
//   // console.log('============================');
//   // console.log('obj: ', obj);
//   // console.log('prop: ', prop);
//   if (/\./.test(prop)) {
//     const param = prop.split('.')[0]
//     // console.log('param: ', param);
//     const nextProp = prop.slice(param.length + 1)
//     let nextObj = null
//     if (/\[\d+\]$/.test(param)) {
//       const key = param.split(/[\[\]]/)[0]
//       const index = param.split(/[\[\]]/)[1]

//       if (!([key] in obj)) {
//         console.log('undefined')
//         return
//       }

//       nextObj = obj[key][index]
//     } else {

//       if (!([param] in obj)) {
//         console.log('undefined')
//         return
//       }

//       nextObj = obj[param]
//     }
//     deepGet(nextObj, nextProp)
//   } else {
//     if (/\[\d+\]$/.test(prop)) {
//       const key = prop.split(/[\[\]]/)[0]
//       const index = prop.split(/[\[\]]/)[1]

//       if (!([key] in obj)) {
//         console.log('undefined')
//         return
//       }

//       console.log(obj[key][index])
//     } else {
//       if (!([prop] in obj)) {
//         console.log('undefined')
//         return
//       }

//       console.log(obj[prop])
//     }
//   }
// }

// /** 以下为测试代码 */
// deepGet({
//   school: {
//     student: { name: 'Tomy' },
//   },
// }, 'school.student.name') // => 'Tomy'

// deepGet({
//   school: {
//     students: [
//       { name: 'Tomy' },
//       { name: 'Lucy' },
//     ],
//   }
// }, 'school.students[1].name') // => 'Lucy'

// // // 对于不存在的属性，返回 undefined
// deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
// deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined