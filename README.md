# testGit

## window安装nvm
- 已安装nodejs情况下(npm安装) 【若使用程序安装，安装过程中弹框显示是否关联本地node,选择是即可】
  - cmd: npm install nvm -g
  - cmd: nvm -V   // 查看nvm是否安装成功
  - cmd: nvm list   // 查看nvm下已安装的node版本
  - cmd: nvm list available   // 查看可安装的node版本
  - cmd: nvm install 14.18.2  // nvm安装14.18.2版本node
  - cmd: nvm use 14.18.2    // nvm使用14.18.2版本的node
  - cmd: node -v  // 此时的node版本14.18.2

- 安装包安装nvm 【若使用程序安装，安装过程中弹框显示是否关联本地node,选择是即可】
  - https://github.com/coreybutler/nvm-windows/releases     // 下载安装包nvm-setup.zip【安装包安装可自动配置环境变量】
  - 选择安装位置与node的位置  【本人选择node安装位置后，文件夹不知缘由不见了，不过不影响】
  - 安装完毕 设置淘宝源
    - nvm => setting.txt添加如下两行设置
    - node_mirror: https://npm.taobao.org/mirrors/node/
    - npm_mirror: https://npm.taobao.org/mirrors/npm/
  - cmd: nvm -V   // 查看nvm是否安装成功
  - cmd: nvm list   // 查看nvm下已安装的node版本
  - cmd: nvm list available   // 查看可安装的node版本
  - cmd: nvm install 14.18.2  // nvm安装14.18.2版本node
  - cmd: nvm use 14.18.2    // nvm使用14.18.2版本的node
  - cmd: node -v  // 此时的node版本14.18.2
- 安装完成后可能遇到的问题
  - nvm install正常，但nvm use xxx报错，并且node命令找不到  【可尝试管理员身份运行cmd】
  - nvm安装node后npm无法使用  【原因可能是setting.txt未设置淘宝源，node中npm未下载导致】


## git 命令

- 切换分支: #main: git checkout master 【切换到 master 分支】
- 创建分支: #main: git checkout -b test origin/main 【根据 main 分支创建 test 分支并切换到此分支】
- 合并分支: #main: git merge master 【将 master 合并到 main】
- 本地分支重命名: #main: git branch -m master newMaster 【将本地的 master 分支改名为 newMaster, 远程修改: 本地改名、远程删除 old 分支、将改名后的分支 push 到远程分支】
- 删除本地分支: #main: git branch -d master 【删除本地 master 分支】【git branch -D master: 强制删除】
- 删除远程分支: #main: git push origin --delete master
- 拉取指定分支到本地: #main: git checkout -b master origin/master 【本地创建 master 分支并与远程 master 关联】
- 拉取远程分支到本地: git fetch
- 选择某 commit 合并: git cherry-pick commitId
- git stash【缓存】
  - git stash save "描述内容" // 缓存编辑内容
  - git stash pop // 将第一个stash拉出存储栈
  - git stash pop "$stash{1}" // 将第二个stash拉出存储栈，并从栈中删除
  - git stash apply "$stash{1}" // 复制第二个stash到文件中，并不将其从stash栈删除
  - git stash drop "$stash{1}"  // 删除存储栈中的第二个stash



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
