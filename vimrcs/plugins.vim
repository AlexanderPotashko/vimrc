set nocompatible
filetype off

set rtp+=~/.vimrc_conf/plugins/Vundle.vim
call vundle#begin('~/.vimrc_conf/plugins')

Plugin 'VundleVim/Vundle.vim'

Plugin 'sheerun/vim-polyglot'
Plugin 'scrooloose/nerdtree'
Plugin 'scrooloose/nerdcommenter'

Plugin 'joshdick/onedark.vim'

Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

Plugin 'kien/ctrlp.vim'
Plugin 'valloric/youcompleteme'

call vundle#end() 

filetype plugin indent on
