## 问题日志

1. 状态data和属性prop，如何定义data和prop一直是一个比较关键的问题，选中选定方案如下：

   - 所有数据都同时定义为data和prop，保证两者始终一致
   - prop可以传递两种形式，基本类型或者sinal，基本类型表示是一次性的，不会在父子组件中同步状态，signal则会在父子组件中国呢同步状态
   - signal本身是没有做任何限制的，如果要限制在制定区间变化目前好像比较有难度，可以通过封装createSignal函数实现
