1、G函数里面存储的记录时间，怎么取出来？？
2、路由地址在$GLOBALS['_SERVER']里面。






运行步骤
	index.php：
			公共入口文件；
			定义调试工具；
			定义项目应用目录；
			引入thinkPHP的核心文件；
	ThinkPHP/ThinkPHP.php：
			定义系统常量；
			加载核心类ThinkPHP/Library/Think.class.php；
			运行核心类的start()方法；
	ThinkPHP/Library/Think.class.php：
			start():
					应用程序初始化；
					自动加载，错误异常处理定义
					根据ThinkPHP/Mode/common.php里面记载的模式文件；
					加载框架底层语言包；
					用C()函数设置配置参数；
					检查目录文件，没有的话就新建；
					运行应用，app:run()；
	ThinkPHP/Library/App.class.php：
			run()：
					应用初始化标签，钩子函数；
			init()：
					定义当前请求的系统常量，路由地址在$GLOBALS['_SERVER']里面；
					根据ThinkPHP/Library/Dispatcher.class.php->display()方法进行路由调度；
			exec()：
					根据路由调度的路由地址；
					是否绑定模块，空控制器，绑定控制器，绑定方法，来进行各类对象模型的实例；
			invokeAction()：
					判断方法是不是public和不是static；
					空方法；
					前置方法；
					执行当前方法；
					后置方法；