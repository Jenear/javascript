/**
 * 1：在写dotolist的时候checkbox方法，返回item的时候直接返回了，item，这样默认是返回了原来的对象，所有react不会去更新，需要对返回的对象进行复制为一个新的
 * eg ： reactredux项目中的toggle reduer
 * [TOGGELTODO]:(state,{payload})=> (
 *    state.updateIn(['lists'], x =>
 *      x.map(item => {
 *        if(item.id === payload.id) {
 *          item.completed=!item.completed;
 *        }
 *        return {...item}//此处不可以直接返回item，需要返回一个新的
 *      })
 *    )
 *  ),
 */