set nocompatible
filetype off

set rtp+=~/.vimrc_conf/plugins/Vundle.vim
call vundle#begin('~/.vimrc_conf/plugins')

" Plugin manager
Plugin 'VundleVim/Vundle.vim'

" Language manageer
Plugin 'sheerun/vim-polyglot'

" Language checker 
Plugin 'vim-syntastic/syntastic'

" File manager
Plugin 'scrooloose/nerdtree'
" Help with comments
Plugin 'scrooloose/nerdcommenter'

" Style theme for vim
Plugin 'joshdick/onedark.vim'

" Style theme for status line
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

" Fuzzy file, buffer, mru, tag, etc finder 
Plugin 'kien/ctrlp.vim' 

" Auto complete ( shoud be compile after install ) !!!
Plugin 'valloric/youcompleteme'
Plugin 'ternjs/tern_for_vim' " !!!

call vundle#end() 

filetype plugin indent on
