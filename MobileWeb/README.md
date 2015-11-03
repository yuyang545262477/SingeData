#Touch 基础事件
## 常见的事件属性
### 1.Touchstart:手指触碰到屏幕触发
### 2.Touchmove:滑动.
### 3.Touchend:手指离开.
### 4.Touchcancel:系统取消touch时候触发(不常用)
## 专有的触摸属性
### 1.touches:跟踪触摸操作的touch对象数组.
### 2.targetTouches:特定事件目标的touch对象数组.
### 3.changeTouches:上次触摸改变的touch对象数组.
## 对象属性
### 1. clientX :触摸目标在viewport的x坐标
### 2. clientY :同上(Y)坐标
### 3. identifier: 识别触摸的唯一ID
### 4. pageX :触摸目标在页面中的X坐标
### 5. pageY :触摸目标在页面中的Y坐标
### 6. screenX :触摸目标在屏幕中的X坐标
### 7. screenY :触摸目标在屏幕中的Y坐标
### 8. target :触目的DOM节点目标。

# 弹性滚动
###局部的弹性滚动
	body{
		overflow:scroll;
		-webkit-overflow-scrolling:touch;
	}
# 上拉加载
###	 使用scroll事件