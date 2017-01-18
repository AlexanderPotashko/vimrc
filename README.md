install files into '~/.vimrc_conf'

and added string into '~/.vimrc' file

```viml
set runtimepath+=~/.vimrc_conf

source ~/.vimrc_conf/vimrcs/plugins.vim
source ~/.vimrc_conf/vimrcs/plugins_conf.vim
source ~/.vimrc_conf/vimrcs/basic.vim
source ~/.vimrc_conf/vimrcs/extended.vim
source ~/.vimrc_conf/vimrcs/filetypes.vim
source ~/.vimrc_conf/vimrcs/helpers.vim
```

don't forget to install youcomplete https://github.com/Valloric/YouCompleteMe
