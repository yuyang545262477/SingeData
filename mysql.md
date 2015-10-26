##Mysql的笔记
#2015.10.25

- 插入记录

>* 方法一：


	mysql> INSERT users VALUES(DEFAULT(改为NUL也可以，都表示自增加),'Tom','123',25,1)==>对应的是id,username,password,age,sex
	mysql> INSERT users VALUES(DEFAULT,'Tom','123',25,1),(NULL,'Jim','456',26,0); ==>这样同时增加了两条记录。
>* 方法二：使用关键字'set'


	mysql> INSERT users SET username = 'Ben' age = '16';
- 查看记录



	mysql> SELECT * FROM users;
- 删除单列



	mysql> ALTER TABLE users(tablename) DROP COLUMNS pid(需要删除的单列)
- 更新记录



	mysql> UPDATE users SET age = age + 5;//对users这个表，年龄都增加5;
	mysql> UPDATE users SET age = age -id ,sex = 0;//对这个表，1:年龄减去所对应的id数，2.将所有的sex调整为0；
	mysql> UPDATE users SET age  = age +10 WHERE id%2=0;对这个表，id是偶数的年龄加上10;
- 删除记录


	mysql> DELETE FROM users WHERE id=6;//删除第六条信息
- 记录查询结构分组


	mysql> SELECT * FROM users GROUP BY sex; //对查询结果，以性别分组。
- 记录查询，对复合条件的结果，进行分组。


	mysql> SELECT * FROM users GROUP BY sex HAVING age >16;//对年龄满16岁的，进行性别分组。
- 记录查询，进行排序


	mysql> SELECT * FROM users ORDER BY id DESC;// 对查询结果，按id的倒序排列。(ASC正序)

- 限制查询结果返回数量。



	mysql> SELECT * FROM users LIMIT 2;//返回两条信息。
	mysql> SELECT * FROM users LIMIT 2,2;//从整个表中，的第三行，开始，返回两条数据回来。(以0开始。)



#2015.10.24

### 数据类型
>* 整型
>* 浮点型
>* 字符型
>* 日期型
    
### 数据表操作
- 如何创建数据表


	mysql> CREATE TABLE tablename

- 记录插入


	mysql> INSERT tablename(key) VALUES('value');
- 记录查找


	mysql> SELECT * FROM tablename;
- 查看数据表结构


	mysql> SHOW COLUMNS FROM tablename;
- 在数据表中，添加单列


	mysql> ALTER TABLE user1(tablename) ADD age(key) SMALLINT UNSIGNED NOT NULL DEFAULT 10 ;
- 修改数据表，添加主键约束


	mysql> ALTER TABLE user2(tablename) ADD CONSTRANIT(可添加) PK_user2_id(添加后，所必需的名称) PRIMARY KEY (id) (主键以及主键的名称);
- 修改数据表，添加唯一约束


	mysql> ALTER TABLE user2(tablename) ADD UNIQUE(唯一约束标识) (username) (添加唯一约束的key);
- 修改数据表，添加外键约束


	mysql> ALTER TABLE user2(tablename) ADD FOREIGN KEY (pid)(local key) REFRENCES provices(relation tablename) (id)(relation key);
- 添加或删除 默认约束



	mysql> ALTER TABLE user2(tablename) ALTER age(changed key) SET(ways) DEFAULT(默认约束) 15;==>添加默认约束
	mysql> ALTER TABLE user2(tablename) ALTER age DROP DEFAULT; ==> 删除默认约束。
- 删除主键约束


	mysql> ALTER TABLE user2(tablename) DROP PRIMARY KEY;
- 通过索引 查看约束的名字（在删除唯一约束时候用到）


	mysql> SHOW INDEXES FROM user2;
- 删除唯一约束



	mysql> ALTER TABLE user2(tablename) DROP INDEX(索引) username(属性对应的KEY);==> 个人感觉，删除唯一约束，当删除索引理解。
- 删除外键约束（一定要查看外键约束的名称



	mysql> SHOW CREATE TABLE user2;==>第一步查找外键约束的名称。


![图片](https://drive.google.com/thumbnail?id=0B2HQUGLufNv4bDVFNFUxekJXbmc&authuser=0&v=1445702398859&sz=w1896-h888)


	mysql> ALTER TABLE user2 DROP FOREIGN KEY user2_ibfk_1;==> 外键的名称，通过上图所得。
- 修改列定义(指key的数据类型，在table中的顺序)


	mysql> ALTER TABLE user2(tablename) MODIFY id(需要修改的key) SMALLINT UNSIGNED NOT NULL(相关属性，不需要修改) FIRST(你需要调整的位置);==>将id移到整个列表的第一个。
	mysql> ALTER TABLE user2(tablename) MODIFY id TINYINT(以前是SMALLINT 现在修改为TINYINT) UNSIGNED NOT NULL; ==> 修改数据类型。由大类型改为小类型，有可能造成数据丢失。
- 修改列名称。


	mysql> ALTER TABLE user2 CHANGE(关键字) pid p_id TINYINT UNSIGNED NOT NULL; ==> CHANGE 既可以修改列名称，又可以修改列属性。
－ 修改数据表的名称


	mysql> ALTER TABLE user2 RENAME(关键字) user3; ==>方法一
	mysql> RENAME TABLE user2(旧名称) TO user3(新名称); ==> 方法二。
－ 查看当前数据库下所有的数据表


	mysql> SHOW TABLES;


### 约束
>* 外键约束
>* PRIMARY KEY(主键约束)
>* UNIQUE KEY(唯一约束)
>* DEFAULT(默认约束)
>* NOT NULL(非空约束)

### 如何显示是否有 索引


	mysql>  SHOW INDEXES FROM provices;

### 外键约束的参照操作


1. CASCADE : 从父表删除或更新且自动删除或更新子表当中的比配行
2. SET NULL : 从父表删除或更新，且设置子表中的外键列为NULL。如果使用该选项,必须保证子列表没有指定的NOT NULL.
3. RESCRICK : 拒绝父表的删除或者更新.
4. NOT ACTION : 标准的SQL的关键字,在MySql中与RESCRICT相同.

### 回顾
![图片](https://drive.google.com/thumbnail?id=0B2HQUGLufNv4QVBBNk82UmpYVWM&authuser=0&v=1445703656964&sz=w1896-h888)


# 2015.10.22


### 启动mysql服务

	net start mysql ==> windows

	mysql.server start ==> mac

### 登陆mysql服务

>* -D 打开指定数据库
>* -h 服务器名称
>* -p 密码
>* -P 端口号（默认为3306）
>* -u 用户名
>* -V 输出版本号

**示例**:

	mysql -uroot -ppassword;

### 常用命令

	SELECT VERSION() ==> 当前的服务版本
	SELECT NOW() ==> 当前的日期
	SELECT USER() ==> 显示当前用户

### mysql 语句的规范

>* 关键字与函数名称全部**大写**
>* 数据库名称，表名称，字段名称名称全部*小些*
>* mysql语句，使用‘;’结尾.

### 创建数据库
	CREATE DATABASE t1;

