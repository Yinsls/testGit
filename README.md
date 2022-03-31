# testGit

练习 git 操作

## git 命令

- 切换分支: #main: git checkout master 【切换到 master 分支】
- 创建分支: #main: git checkout -b test origin/main 【根据 main 分支创建 test 分支并切换到此分支】
- 设置代理: git config --global http.https://github.com.proxy socks5://127.0.0.1:10808 【设置 socks 代理,如我的 v2ray.socks 监听端口为 10808】
- 设置代理: git config --global http.https://github.com.proxy http://127.0.0.1:40022 【设置 http 代理,如我的 v2ray.http 监听端口为 40022】

## git 问题

- fatal: unable to access 'https://github.com/xxxxx.git/': OpenSSL SSL_read: Connection was reset, errno 10054
  - git config --global http.sslVerify "false" (不知道具体有没有效果，个人觉得没用)
