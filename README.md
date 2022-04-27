# testGit

## 将本地项目上传到 github

- $ git init // 项目中初始化 git 仓库
- $ git add . // 添加项目到暂存区
- $ git commit -m "init Project" // 将项目提交到本地 git 仓库
- $ git remote add origin git@github.com:xxx/xxxx.git // 将本地仓库与远程仓库关联
- $ git branch -M main // 设置分支名
- $ git push -u origin main // 将本地仓库内容提交到远程仓库(初次上传时可不需要 git pull)
- 若出现报错: git@github.com: Permission denied (publickey). // github 秘钥缺失
- ssh -T git@github.com (检测是否存在秘钥)
  - Permission denied(publickey) // 未关联本机与 github(秘钥不存在了)
  - ssh-keygen -t rsa -C "xxx@xx.com" // 本地生成公钥(出现的几个选项都 enter 就好)(github 绑定的邮箱,如: 22342453@qq.com) (出现(已成功生成): Your public key has been saved in /c/Users/28263/.ssh/id_rsa.pub)
  - cat /c/Users/28263/.ssh/id_rsa.pub // 显示 id_rsa.pub 文件内容(cat 在 git 命令行中可用,也可以到文件夹中去找对应的文件)
  - 复制 id_rsa.pub 内容
  - 打开 github,点击头像下拉中的 Settings
  - 选择 SSH and GPG keys
  - 点击 New SSH key 按钮
  - 输入 Title(随意皆可，只是用来给自己标记命名，若存在多个电脑时可用来分辨秘钥情况)
  - 将 id_rsa.pub 内容粘贴到 Key 中
  - 输入完毕后点击 Add SSH key，SSH keys 列表即出现一条刚添加的 ssh 秘钥，添加成功
- 秘钥添加完成后继续提交仓库: git push -u origin main
- 若失败:
  - error: failed to push some refs to 'git@github.com.....git --- 后续中出现'git pull ...' before pushing again.
  - $ git pull --rebase origin main // 上述报错可能是 github 中存在 md 文件，本地不存在，所以需要先 pull
  - $ git push origin main // 上传仓库，ok,嗯，应该成功了吧!

## window 安装 nvm

- 已安装 nodejs 情况下(npm 安装) 【若使用程序安装，安装过程中弹框显示是否关联本地 node,选择是即可】

  - cmd: npm install nvm -g
  - cmd: nvm -V // 查看 nvm 是否安装成功
  - cmd: nvm list // 查看 nvm 下已安装的 node 版本
  - cmd: nvm list available // 查看可安装的 node 版本
  - cmd: nvm install 14.18.2 // nvm 安装 14.18.2 版本 node
  - cmd: nvm use 14.18.2 // nvm 使用 14.18.2 版本的 node
  - cmd: node -v // 此时的 node 版本 14.18.2

- 安装包安装 nvm 【若使用程序安装，安装过程中弹框显示是否关联本地 node,选择是即可】
  - https://github.com/coreybutler/nvm-windows/releases // 下载安装包 nvm-setup.zip【安装包安装可自动配置环境变量】
  - 选择安装位置与 node 的位置 【本人选择 node 安装位置后，文件夹不知缘由不见了，不过不影响】
  - 安装完毕 设置淘宝源
    - nvm => setting.txt 添加如下两行设置
    - node_mirror: https://npm.taobao.org/mirrors/node/
    - npm_mirror: https://npm.taobao.org/mirrors/npm/
  - cmd: nvm -V // 查看 nvm 是否安装成功
  - cmd: nvm list // 查看 nvm 下已安装的 node 版本
  - cmd: nvm list available // 查看可安装的 node 版本
  - cmd: nvm install 14.18.2 // nvm 安装 14.18.2 版本 node
  - cmd: nvm use 14.18.2 // nvm 使用 14.18.2 版本的 node
  - cmd: node -v // 此时的 node 版本 14.18.2
- 安装完成后可能遇到的问题
  - nvm install 正常，但 nvm use xxx 报错，并且 node 命令找不到 【可尝试管理员身份运行 cmd】
  - nvm 安装 node 后 npm 无法使用 【原因可能是 setting.txt 未设置淘宝源，node 中 npm 未下载导致】

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
  - git stash pop // 将第一个 stash 拉出存储栈
  - git stash pop "$stash{1}" // 将第二个 stash 拉出存储栈，并从栈中删除
  - git stash apply "$stash{1}" // 复制第二个 stash 到文件中，并不将其从 stash 栈删除
  - git stash drop "$stash{1}" // 删除存储栈中的第二个 stash

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
