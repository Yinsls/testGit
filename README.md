# testGit

练习 git 操作

## git 命令

- 切换分支: #main: git checkout master 【切换到 master 分支】
- 创建分支: #main: git checkout -b test origin/main 【根据 main 分支创建 test 分支并切换到此分支】

## git 问题

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
