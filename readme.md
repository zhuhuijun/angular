# 1.angular的模块划分
> angualr  是由控制器，指令，服务，路由，过滤器构成
>
> 双向数据绑定

# 2.指令

> directive:hello-word对应的是helloWord

> 1.先从ng-app上开始递归子层的Dom元素收集所有的指令

> 2.编译指令，链接scope,如果有必要为scope生成新的scope

> 3.link是用来添加事件,添加样式

> 4.指令如果提供了compile函数也会执行此方法