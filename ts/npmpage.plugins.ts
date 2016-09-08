import 'typings-global'
export import beautylog = require('beautylog')
export import marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})
export import path = require('path')
export import smartcli = require('smartcli')
export import smartfile = require('smartfile')
export import shelljs = require('shelljs')
export import smartpug = require('smartpug')
export import q = require('q')
