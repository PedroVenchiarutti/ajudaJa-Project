import React from 'react';


export function AbrirMenu (e) {
    let list = document.querySelector('ul');

    e.name === 'Menu' ? (e.name = 'Close', list.classList.add('top-[80px]'), list.classList.add('opacity-100')  ) : (e.name = 'Menu', list.classList.remove('top-[80px]'), list.classList.remove('opacity-100') );
}