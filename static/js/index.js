/*
 * @Author             : xiwei.zw (xiwei.zw@alibaba-inc.com)
 * @Date               : 2026-06-23 17:10
 * @Last Modified By   : xiwei.zw (xiwei.zw@alibaba-inc.com)
 * @Last Modified Date : 2026-06-23 17:10
 * @Description        : 
 * -------- 
 * Copyright (c) 2026 Alibaba Inc. 
 */
// js文件头部注释之后的内容
document.addEventListener('DOMContentLoaded', () => {
  // Responsive navbar burger toggle
  const burgers = Array.from(document.querySelectorAll('.navbar-burger'));
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = targetId ? document.getElementById(targetId) : null;
      burger.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', String(burger.classList.contains('is-active')));
      if (target) {
        target.classList.toggle('is-active');
      }
    });
  });

  // Close mobile menu on nav link click
  const navLinks = document.querySelectorAll('.navbar-menu .navbar-item');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      const burger = document.querySelector('.navbar-burger');
      if (menu && menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
        if (burger) {
          burger.classList.remove('is-active');
          burger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});
