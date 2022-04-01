# testGit

练习 git 操作

## git 命令

- 切换分支: #main: git checkout master 【切换到 master 分支】
- 创建分支: #main: git checkout -b test origin/main 【根据 main 分支创建 test 分支并切换到此分支】
- 合并分支: #main: git merge master 【将 master 合并到 main】
- 删除本地分支: #main: git branch -d master 【删除本地 master 分支】【git branch -D master: 强制删除】
- 删除远程分支: #main: git push origin --delete master
- 拉取指定分支到本地: #main: git checkout -b master origin/master 【本地创建 master 分支并与远程 master 关联】
- 拉取远程分支到本地: git fetch
- 选择某 commit 合并: git cherry-pick commitId

## git 问题

- 使用代理配置 github 加快速度
  - https://zhuanlan.zhihu.com/p/481574024

---

- fatal: unable to access 'https://github.com/xxxxx.git/': OpenSSL SSL_read: Connection was reset, errno 10054
  - git config --global http.sslVerify "false" (不知道具体有没有效果，个人觉得没用)

---

- The previous cherry-pick is now empty, possibly due to conflict resolution.
  - 原因: 解决冲突后本地分支与 cherry-pick 之前没有变化(cherry-pick 内容本地已存在)
  - 解决: git cherry-pick --abort (取消上次 cherry-pick 操作)

---

- CONFLICT (content): Merge conflict in master.js; Automatic merge failed; fix conflicts and then commit the result.
  - 原因: 文件合并产生了冲突
  - 解决: 解决文件冲突后重新 git add, git commit , git push

---

- error: commit 39d7e28a4e5819ef2425b17b6c5695f606dcd471 is a merge but no -m option was given. fatal: cherry-pick failed
  - 原因: cherry-pick 多个 commit 时,不知以哪一个分支为主线
  - 解决: git cherry-pick -m commitId 【以 commitId 这个提交进行合并】
