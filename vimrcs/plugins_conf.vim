"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Nerd Tree
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:NERDTreeWinPos = "left"
let NERDTreeShowHidden=1
let g:NERDTreeWinSize=35
map <leader>nn :NERDTreeToggle<cr>
map <leader>nb :NERDTreeFromBookmark
map <leader>nf :NERDTreeFind<cr>


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Nerd Commenter 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:NERDCompactSexyComs = 1
let g:NERDCustomDelimiters = { 'javascript.jsx': { 'left': '{ /*','right': '*/ }' } }


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => ctrlp https://github.com/kien/ctrlp.vim 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Use a custom file listing command:
let g:ctrlp_user_command = 'find %s -type f'        " MacOSX/Linux

" Exclude files and directories using Vim's wildignore and CtrlP's own g:ctrlp_custom_ignore
set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux

let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/]\.(git|hg|svn|node_modules)$',
  \ 'file': '\v\.(exe|so|dll)$'
  \ }


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => vim-airline 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
let g:airline_theme='onedark'
let g:airline#extensions#tabline#enabled = 1


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => sintastic 
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_mode_map={'mode': 'passive'}

" To setup Syntastic to automatically load errors into the location list
let g:syntastic_always_populate_loc_list = 1
" Syntastic does not check for errors when a file is loaded into Vim
let g:syntastic_check_on_open = 0
" Syntastic checks for errors whenever you save the file. 
let g:syntastic_check_on_wq = 1
" Uses g:syntastic_loc_list_height to set the initial height of the error window
let g:syntastic_loc_list_height = 5
" When set to 0 the error window will be neither opened nor closed automatically. 
" When set to 1 the error window will be automatically opened when errors are detected, and closed when none are detected. >
" When set to 2 the error window will be automatically closed when no errors are detected, but not opened automatically. >
" When set to 3 the error window will be automatically opened when errors are detected, but not closed automatically. >
let g:syntastic_auto_loc_list = 1

let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_javascript_eslint_exe = '$(npm bin)/eslint'

let g:syntastic_error_symbol = '❌'
let g:syntastic_style_error_symbol = '⁉️'
let g:syntastic_warning_symbol = '⚠️'
let g:syntastic_style_warning_symbol = '💩'

highlight link SyntasticErrorSign SignColumn
highlight link SyntasticWarningSign SignColumn
highlight link SyntasticStyleErrorSign SignColumn
highlight link SyntasticStyleWarningSign SignColumn
