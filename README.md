# testGit

练习 git 操作

## git 命令

- 切换分支: #main: git checkout master 【切换到 master 分支】
- 创建分支: #main: git checkout -b test origin/main 【根据 main 分支创建 test 分支并切换到此分支】

## git 问题

- fatal: unable to access 'https://github.com/xxxxx.git/': OpenSSL SSL_read: Connection was reset, errno 10054
  - git config --global http.sslVerify "false" (不知道具体有没有效果，个人觉得没用)
