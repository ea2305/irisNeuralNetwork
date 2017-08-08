'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import Menu from '@/components/Menu';
import User from '@/components/User';
import File from '@/components/File';
import TypeFile from '@/components/TypeFile';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/file',
      name: 'File',
      component: File
    },{
      path: '/type-file',
      name: 'TypeFile',
      component: TypeFile
    }
  ]
})
